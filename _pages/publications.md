---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<div class="pub-filter-pills"><span class="pub-filter-pill active" data-filter="all">All</span><span class="pub-filter-pill" data-filter="Personalized Reality">Personalized Reality</span><span class="pub-filter-pill" data-filter="Personalization">Personalization</span><span class="pub-filter-pill" data-filter="Mixed Reality">Mixed Reality</span><span class="pub-filter-pill" data-filter="Ubiquitous Computing">Ubiquitous Computing</span><span class="pub-filter-pill" data-filter="Privacy">Privacy</span><span class="pub-filter-pill" data-filter="Recommender Systems">Recommender Systems</span><span class="pub-filter-pill" data-filter="Algorithms and Society">Algorithms and Society</span><span class="pub-filter-pill" data-filter="Social Media">Social Media</span><span class="pub-filter-pill" data-filter="Critical Computing">Critical Computing</span><span class="pub-filter-pill" data-filter="Technology Acceptance">Technology Acceptance</span><span class="pub-filter-pill" data-filter="Computer Vision">Computer Vision</span><span class="pub-filter-pill" data-filter="Regulation">Regulation</span></div>

{% capture written_year %}{{'None'}}{% endcapture %}
{% for post in site.publications reversed %}
  <div class="list__item">
   {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  </div>
  {% include archive-single.html %}
{% endfor %}

<script>
{% raw %}
(function() {
  var activeFilters = [];

  // Read filter from URL on load
  var params = new URLSearchParams(window.location.search);
  var urlFilter = params.get('filter');
  if (urlFilter) activeFilters = [urlFilter];

  function applyFilters() {
    var pills = document.querySelectorAll('.pub-filter-pill');
    pills.forEach(function(p) {
      p.classList.toggle('active', activeFilters.length === 0 || activeFilters.includes(p.dataset.filter) || p.dataset.filter === 'all' && activeFilters.length === 0);
    });

    var items = document.querySelectorAll('.list__item[data-tags]');
    items.forEach(function(item) {
      if (activeFilters.length === 0) {
        item.style.display = '';
      } else {
        var tags = item.dataset.tags ? item.dataset.tags.split(',').map(function(t) { return t.trim(); }) : [];
        var match = activeFilters.some(function(f) { return tags.includes(f); });
        item.style.display = match ? '' : 'none';
      }
    });

    // Hide year headings with no visible articles below them
    var yearDivs = document.querySelectorAll('.list__item:not([data-tags])');
    yearDivs.forEach(function(yearDiv) {
      var next = yearDiv.nextElementSibling;
      var hasVisible = false;
      while (next && next.classList.contains('list__item')) {
        if (next.dataset.tags !== undefined && next.style.display !== 'none') { hasVisible = true; break; }
        next = next.nextElementSibling;
      }
      yearDiv.style.display = hasVisible || activeFilters.length === 0 ? '' : 'none';
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Sync pill active state with URL param
    if (urlFilter) {
      document.querySelectorAll('.pub-filter-pill').forEach(function(p) {
        p.classList.toggle('active', p.dataset.filter === urlFilter);
      });
      applyFilters();
    }

    document.querySelectorAll('.pub-filter-pill').forEach(function(pill) {
      pill.addEventListener('click', function() {
        var f = pill.dataset.filter;
        if (f === 'all') {
          activeFilters = [];
        } else {
          var idx = activeFilters.indexOf(f);
          if (idx === -1) activeFilters.push(f);
          else activeFilters.splice(idx, 1);
        }
        // Update "All" pill
        document.querySelector('[data-filter="all"]').classList.toggle('active', activeFilters.length === 0);
        pill.classList.toggle('active', activeFilters.includes(f));
        applyFilters();
      });
    });
  });
})();
{% endraw %}
</script>
