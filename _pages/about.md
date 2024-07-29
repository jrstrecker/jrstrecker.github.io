---
permalink: /
title: "Hi there!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<div class="about-box"  markdown="1">

I’m a second year PhD Student in Computer Science at the [University of St. Gallen](https://unisg.ch) in Switzerland in the lab for [Interactions- and Communication-based Systems](https://interactions.ics.unisg.ch). 

I study  how ubiquitous personalization systems can make people’s interactions with their environment more efficient, safer and more inclusive, and how these systems can be built in a responsible and societally beneficial way, by combining the following research areas:
- Mixed Reality
- Ubiquitous Computing
- Personalization
- Privacy
- Algorithms and Society
- Computer Vision
- Technology Acceptance

Next to my main PhD topic _Personalized Reality_, I work with colleagues on related topics, I am teaching assistant for multiple lectures (see [Teaching](./teaching)), and I am co-supervising Bachelor- and Master Theses.

I have been reviewing for multiple conferences and journals, including CHI, IMWUT, UbiComp, and Mensch und Computer. I was an AC at MuC'24 and got two Special Recognitions for Outstanding Reviews (CHI'24 LBW, MuC'24 Short Paper) so far.


For updates on what I'm doing, have a look at the [Publications](./publications) of my colleagues and me,
follow me on the Fediverse: [https://hci.social/@jannis](https://hci.social/@jannis),
or contact me via email: [jannisrene.strecker@unisg.ch](mailto:jannisrene.strecker@unisg.ch). 😀
</div>

## 📑 Recent Publications

{% assign sorted_posts = site.publications | sort: 'date' | reverse %}
{% for post in sorted_posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

<a href="./publications" target="_top" class="btn btn--light btn--large text-decoration-none">See all publications</a>