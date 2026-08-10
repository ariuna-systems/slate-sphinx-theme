# Slate Sphinx Theme

[![Deploy example docs to GitHub Pages](https://github.com/ariuna-systems/slate-sphinx/actions/workflows/pages.yml/badge.svg)](https://github.com/ariuna-systems/slate-sphinx/actions/workflows/pages.yml)

Sphinx theme for documentation sites.

## Usage

Install the theme directly from GitHub:

```shell
uv pip install "git+https://github.com/ariuna-systems/slate-sphinx.git"
```

Then in your Sphinx project's `conf.py`:

1. Add `"slate.sphinx"` to `extensions`.
2. Set `html_theme = "slate-sphinx-theme"`.

See [example/docs/conf.py](example/docs/conf.py) for a complete configuration.

## Packaging

Install the package locally from a source checkout:

```shell
uv pip install .
```

## Build The Example Site

Generate the HTML output for the bundled example docs:

```shell
uv run sphinx-build -E -a example/docs example/docs/_build/html
```

If your environment does not already have docs dependencies, install them first:

```shell
uv pip install -e . sphinx sphinx-autobuild sphinx-autodoc-typehints myst-parser myst-nb
```

The generated site will be available in `example/docs/_build/html`.

## References

- <https://www.sphinx-doc.org/en/master/usage/theming.html>
- <https://www.sphinx-doc.org/en/master/development/theming.html>
