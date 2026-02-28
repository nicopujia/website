"""Extract headings from article/page content into a `toc` attribute."""

import re

from pelican import signals

HEADING_RE = re.compile(
    r'<h([2-6]) id="([^"]+)">(.+?)(?:<a class="[^"]*"[^>]*>.*?</a>)?\s*</h\1>',
    re.DOTALL,
)


def _build_nested_toc(headings):
    """Build a properly nested <ul> structure from a flat list of headings."""
    if not headings:
        return ""

    base_level = int(headings[0][0]) - 1
    result = []
    current_depth = 0

    for level_str, id_, text in headings:
        depth = int(level_str) - base_level

        if depth > current_depth:
            for _ in range(depth - current_depth):
                result.append("<ul>")
        elif depth < current_depth:
            for _ in range(current_depth - depth):
                result.append("</li></ul>")
            result.append("</li>")
        else:
            if current_depth > 0:
                result.append("</li>")

        result.append(f'<li><a href="#{id_}">{text.strip()}</a>')
        current_depth = depth

    for _ in range(current_depth):
        result.append("</li></ul>")

    return "\n".join(result)


def extract_toc(content):
    if not content._content:
        content.toc = ""
        return
    headings = HEADING_RE.findall(content._content)
    if not headings:
        content.toc = ""
        return

    content.toc = _build_nested_toc(headings)


def register():
    signals.content_object_init.connect(extract_toc)
