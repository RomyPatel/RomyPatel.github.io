// Dark-mode toggle (al-folio style). Persists choice, respects OS preference.
(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);

  function iconFor(t) {
    return t === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.innerHTML = iconFor(theme);
    btn.addEventListener("click", function () {
      theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      btn.innerHTML = iconFor(theme);
    });
  });
})();
