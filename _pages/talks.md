---
layout: archive
permalink: /talks/
title: "Invited Talks"
excerpt: "Invited Talks"
author_profile: true
---

{% include base_path %}

I enjoy sharing my research with both academic and general audiences. I’m especially happy to talk about ubiquitous personalization and how it is extending beyond the Web into people’s physical reality through XR head-mounted displays and AI-enabled smart glasses, and about my main PhD topic [_Personalized Reality_](/personalized-reality/), where each person may come to perceive a different, system-mediated version of the world. I like to look at how these systems can make people’s interactions with their environment more efficient, safer and more inclusive, at the risks they bring, such as fragmented, isolated perceptions of reality, and at how they can be built in a responsible and societally beneficial way.

If you’d like me to give a talk on one of these topics, I’d be happy to hear from you, just send me an email: <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>!

{% capture written_year %}{{'None'}}{% endcapture %}
{% for post in site.talks reversed %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% if year != written_year %}
<h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
{% capture written_year %}{{ year }}{% endcapture %}
{% endif %}
{% include archive-single-talk-card.html %}
{% endfor %}
