#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path


BOOK_DIR = Path("_book")
OUTPUT_PATH = Path("/tmp/book.md")


def parse_front_matter(text: str) -> tuple[dict[str, object], str]:
    match = re.match(r"^---\n(.*?)\n---\n", text, flags=re.DOTALL)
    if not match:
        return {}, text

    metadata: dict[str, object] = {}
    for raw_line in match.group(1).splitlines():
        if ":" not in raw_line:
            continue
        key, raw_value = raw_line.split(":", 1)
        key = key.strip()
        value = raw_value.strip()
        if not value:
            continue
        if value.lower() in {"true", "false"}:
            metadata[key] = value.lower() == "true"
            continue
        if key == "nav_order":
            try:
                metadata[key] = int(value)
                continue
            except ValueError:
                pass
        metadata[key] = value.strip('"').strip("'")

    return metadata, text[match.end() :]


def clean_body(body: str) -> str:
    body = re.sub(r"\{\{[^}]+\}\}", "", body)
    body = re.sub(r'<a id="[^"]+"></a>', "", body)

    lines = body.rstrip().splitlines()
    while lines and not lines[-1].strip():
        lines.pop()

    if lines and ("{{ site.baseurl }}/book/" in lines[-1] or lines[-1].lstrip().startswith("[←") or lines[-1].lstrip().startswith("[Next:")):
        lines.pop()
        while lines and not lines[-1].strip():
            lines.pop()
        if lines and lines[-1].strip() == "---":
            lines.pop()

    return "\n".join(lines).strip() + "\n"


def first_heading(body: str) -> str | None:
    match = re.search(r"^#\s+(.+)$", body, flags=re.MULTILINE)
    return match.group(1).strip() if match else None


def load_pages() -> list[dict[str, object]]:
    pages: list[dict[str, object]] = []
    for path in sorted(BOOK_DIR.glob("*.md")):
        if path.name == ".gitkeep":
            continue
        raw_text = path.read_text(encoding="utf-8")
        metadata, body = parse_front_matter(raw_text)
        metadata["path"] = path
        metadata["body"] = clean_body(body)
        metadata["display_heading"] = first_heading(str(metadata["body"])) or str(metadata.get("title", path.stem))
        pages.append(metadata)
    return pages


def page_sort_key(page: dict[str, object]) -> tuple[int, str]:
    nav_order = int(page.get("nav_order", 9999))
    path = str(page.get("path", ""))
    return nav_order, path


def build_combined_markdown() -> str:
    pages = load_pages()
    root_sections = sorted(
        [page for page in pages if page.get("has_children") and not page.get("parent")],
        key=page_sort_key,
    )
    children_by_parent: dict[str, list[dict[str, object]]] = {}
    for page in pages:
        parent = page.get("parent")
        if isinstance(parent, str):
            children_by_parent.setdefault(parent, []).append(page)

    for group in children_by_parent.values():
        group.sort(key=page_sort_key)

    parts: list[str] = [
        "---",
        'title: "AI for Leaders"',
        'author: "Kyi Thar"',
        'lang: "en-US"',
        "---",
        "",
        r"\frontmatter",
        "",
    ]

    for section in root_sections:
        section_title = str(section.get("title", ""))
        section_heading = str(section.get("display_heading", section_title))
        children = children_by_parent.get(section_title, [])
        if not children:
            continue

        if section_title == "Front Matter":
            for child in children:
                parts.append(str(child["body"]).strip())
                parts.extend(["", r"\newpage", ""])
            parts.extend([r"\mainmatter", ""])
            continue

        parts.extend([rf"\part{{{section_heading}}}", ""])
        for child in children:
            parts.append(str(child["body"]).strip())
            parts.extend(["", r"\newpage", ""])

    return "\n".join(parts).rstrip() + "\n"


def main() -> None:
    OUTPUT_PATH.write_text(build_combined_markdown(), encoding="utf-8")


if __name__ == "__main__":
    main()
