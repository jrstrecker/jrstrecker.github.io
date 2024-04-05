---
permalink: /
title: "Hi there!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I’m a second year PhD Student in Computer Science at the [University of St. Gallen](https://unisg.ch) in Switzerland \
in the lab for [Interactions- and Communication-based Systems](https://interactions.ics.unisg.ch). 

My research combines the following areas:
- Mixed Reality
- Ubiquitous Computing
- Personalization
- Privacy
- Internet of Things
- Computer Vision
- Technology Acceptance


For updates on what I'm doing, have a look at my [Publications](./publications), \
follow me on the Fediverse: [https://hci.social/@jannis](https://hci.social/@jannis), \
or contact me via email: [jannisrene.strecker@unisg.ch](mailto:jannisrene.strecker@unisg.ch). 😀


## 📑 Recent Publications

{% assign sorted_posts = site.publications | sort: 'date' | reverse %}
{% for post in sorted_posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

<a href="./publications" target="_top" class="btn btn--light btn--large text-decoration-none">See all publications</a>