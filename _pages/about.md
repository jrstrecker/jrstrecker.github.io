---
permalink: /
excerpt: "About me"
author_profile: true
is_title_page: true
redirect_from: 
  - /about/
  - /about.html
  - /research/
---
<div class="about-box"  markdown="1">

As XR headsets and AI-enabled smart glasses become part of everyday life, personalization is moving beyond the Web into people's physical surroundings. When it is applied everywhere, each person may perceive a different, system-mediated version of reality: a [Personalized Reality](./personalized-reality). This can make interactions more efficient and information access more equitable. It can also isolate people in fragmented realities and give system designers considerable influence over how people experience the world and each other.

In my dissertation at the [Interactions- and Communication-based Systems](https://interactions.ics.unisg.ch) lab, I investigate how Responsible Ubiquitous Personalization Systems can create beneficial Personalized Realities while mitigating their harmful social and societal effects. I combine conceptual frameworks, technical prototypes and controlled user studies. So far, this includes the RUPS model for describing and analyzing such systems, Mixed Reality prototypes that filter or explain options while shopping or learning board games, and ways to give people control over their personal data using Solid Pods. My current work focuses on multi-user settings, where people share personalized content so that their realities stay connected.

To do this, I draw on the following research areas:
<div class="topic-pills"><span>Personalization</span><span>Mixed Reality</span><span>Ubiquitous Computing</span><span>Privacy</span><span>Algorithms and Society</span><span>Technology Acceptance</span><span>Regulation</span><span>Recommender Systems</span><span>Computer Vision</span><span>Critical Computing</span><span>Philosophy of Technology</span></div>

Next to my main PhD topic, I collaborate with colleagues on related research in personalization, privacy and ubiquitous interaction. I am a teaching assistant for multiple lectures (see [Teaching](./teaching)) and co-supervise Bachelor's and Master's theses.

I am been reviewing for multiple conferences and journals, for more details see [Community Service](./communityservice). 

For updates on what I'm doing, have a look at the [Publications](./publications) of my colleagues and me,
follow me on the Fediverse: [https://hci.social/@jannis](https://hci.social/@jannis),
or contact me via email: [jannis.strecker-bischoff@unisg.ch](mailto:jannis.strecker-bischoff@unisg.ch)!
</div>

## 📑 Recent Publications

{% assign sorted_posts = site.publications | sort: 'date' | reverse %}
{% for post in sorted_posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

<a href="./publications" target="_top" class="btn btn--light btn--large text-decoration-none">See all publications</a>