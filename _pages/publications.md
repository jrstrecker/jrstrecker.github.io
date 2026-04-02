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

<script src="/assets/js/pub-filter.js"></script>
