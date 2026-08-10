"""
Sphinx theme packaging.

See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package.
"""

from pathlib import Path


__version__ = "0.6.0"


def setup(app) -> dict[str, bool]:
    app.add_html_theme("slate-sphinx-theme", str(Path(__file__).resolve().parent))
    app.add_css_file("style.css")
    app.add_js_file("theme.js")

    return {"parallel_read_safe": True, "parallel_write_safe": True}
