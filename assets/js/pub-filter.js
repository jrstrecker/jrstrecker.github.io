(function() {
  var activeFilters = [];

  var params = new URLSearchParams(window.location.search);
  var urlFilter = params.get("filter");
  if (urlFilter) activeFilters = [urlFilter];

  function applyFilters() {
    document.querySelectorAll(".pub-filter-pill").forEach(function(p) {
      var isAll = p.dataset.filter === "all";
      p.classList.toggle("active", isAll ? activeFilters.length === 0 : activeFilters.includes(p.dataset.filter));
    });

    document.querySelectorAll(".list__item[data-tags]").forEach(function(item) {
      if (activeFilters.length === 0) {
        item.style.display = "";
        return;
      }
      var tags = item.dataset.tags ? item.dataset.tags.split(",").map(function(t) { return t.trim(); }) : [];
      item.style.display = activeFilters.some(function(f) { return tags.includes(f); }) ? "" : "none";
    });

    document.querySelectorAll(".list__item:not([data-tags])").forEach(function(yearDiv) {
      if (activeFilters.length === 0) { yearDiv.style.display = ""; return; }
      var next = yearDiv.nextElementSibling;
      var hasVisible = false;
      while (next && next.classList.contains("list__item")) {
        if (next.dataset.tags !== undefined && next.style.display !== "none") { hasVisible = true; break; }
        next = next.nextElementSibling;
      }
      yearDiv.style.display = hasVisible ? "" : "none";
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    if (urlFilter) {
      document.querySelectorAll(".pub-filter-pill").forEach(function(p) {
        p.classList.toggle("active", p.dataset.filter === urlFilter);
      });
      applyFilters();
    }

    document.querySelectorAll(".pub-filter-pill").forEach(function(pill) {
      pill.addEventListener("click", function() {
        var f = pill.dataset.filter;
        if (f === "all") {
          activeFilters = [];
        } else {
          var idx = activeFilters.indexOf(f);
          if (idx === -1) activeFilters.push(f);
          else activeFilters.splice(idx, 1);
        }
        document.querySelector("[data-filter=\"all\"]").classList.toggle("active", activeFilters.length === 0);
        pill.classList.toggle("active", activeFilters.includes(f));
        applyFilters();
      });
    });
  });
})();
