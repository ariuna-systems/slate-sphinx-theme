(function () {
  var storageKey = "slate-docs-theme";

  function hasCurrentDescendant(item) {
    return Boolean(item.querySelector("li.current, a.current"));
  }

  function setSectionExpanded(item, expanded) {
    item.classList.toggle("is-expanded", expanded);
    var toggle = item.querySelector(":scope > .slate-nav__toggle");
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.setAttribute("title", expanded ? "Collapse section" : "Expand section");
    }
  }

  function initCollapsibleNav() {
    var nav = document.querySelector(".slate-nav");
    if (!nav) {
      return;
    }

    nav.querySelectorAll("li").forEach(function (item) {
      var childList = item.querySelector(":scope > ul");
      var link = item.querySelector(":scope > a");
      if (!childList || !link) {
        return;
      }

      item.classList.add("is-collapsible");

      if (!item.querySelector(":scope > .slate-nav__toggle")) {
        var toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "slate-nav__toggle";
        toggle.setAttribute("aria-label", "Toggle section");
        toggle.setAttribute("aria-expanded", "false");
        item.insertBefore(toggle, childList);

        toggle.addEventListener("click", function (event) {
          event.stopPropagation();
          setSectionExpanded(item, !item.classList.contains("is-expanded"));
        });
      }

      var shouldExpand = item.classList.contains("current") || hasCurrentDescendant(item);
      setSectionExpanded(item, shouldExpand);
    });
  }

  function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    updateThemeButton(theme);
  }

  function updateThemeButton(theme) {
    var label = document.querySelector("[data-theme-label]");
    if (label) {
      label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
  }

  function toggleTheme() {
    var nextTheme = currentTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (error) {
      // Ignore storage failures; the current session still updates.
    }
    applyTheme(nextTheme);
  }

  function setNavOpen(open) {
    document.body.classList.toggle("slate-nav-open", open);
    var toggle = document.querySelector("[data-nav-toggle]");
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateThemeButton(currentTheme());
    initCollapsibleNav();

    var themeToggle = document.querySelector("[data-theme-toggle]");
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    var navToggle = document.querySelector("[data-nav-toggle]");
    if (navToggle) {
      navToggle.addEventListener("click", function () {
        setNavOpen(!document.body.classList.contains("slate-nav-open"));
      });
    }

    var overlay = document.querySelector("[data-nav-overlay]");
    if (overlay) {
      overlay.addEventListener("click", function () {
        setNavOpen(false);
      });
    }

    document.querySelectorAll(".slate-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  });
})();