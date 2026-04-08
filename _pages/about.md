---
permalink: /
title: "Hi there!"
excerpt: "About me"
author_profile: true
is_title_page: true
redirect_from: 
  - /about/
  - /about.html
  - /research/
---
<div class="about-box"  markdown="1">

I’m a PhD Student in Computer Science at the [University of St. Gallen](https://unisg.ch) in Switzerland in the lab for [Interactions- and Communication-based Systems](https://interactions.ics.unisg.ch). 

I study  how ubiquitous personalization systems can make people’s interactions with their environment more efficient, safer and more inclusive, and how these systems can be built in a responsible and societally beneficial way, by combining the following research areas:
<div class="topic-pills"><span>Personalization</span><span>Mixed Reality</span><span>Ubiquitous Computing</span><span>Privacy</span><span>Algorithms and Society</span><span>Technology Acceptance</span><span>Regulation</span><span>Recommender Systems</span><span>Computer Vision</span><span>Critical Computing</span><span>Philosophy of Technology</span></div>

Next to my main PhD topic _Personalized Reality_, I work with colleagues on related topics, I am teaching assistant for multiple lectures (see [Teaching](./teaching)), and I am co-supervising Bachelor- and Master Theses.

I am been reviewing for multiple conferences and journals, for more details see [Community Service](./communityservice). 

For updates on what I'm doing, have a look at the [Publications](./publications) of my colleagues and me,
follow me on the Fediverse: [https://hci.social/@jannis](https://hci.social/@jannis),
or contact me via email: [jannis.strecker-bischoff@unisg.ch](mailto:jannis.strecker-bischoff@unisg.ch). 😀
</div>

## 📑 Recent Publications

{% assign sorted_posts = site.publications | sort: 'date' | reverse %}
{% for post in sorted_posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

<a href="./publications" target="_top" class="btn btn--light btn--large text-decoration-none">See all publications</a>