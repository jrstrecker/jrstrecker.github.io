---
permalink: /communityservice/
title: "Community Service"
excerpt: "Community Service"
author_profile: true
---

{% include base_path %}

<div class="service-page" markdown="1">

## Organizing Roles

<ul class="service-list">{% for post in site.data.service.roles %}{% include service-item.html %}{% endfor %}</ul>

## Workshop Organization

<ul class="service-list">{% for post in site.data.service.workshops %}{% include service-item.html %}{% endfor %}</ul>

## Program Committees

<ul class="service-list">{% for post in site.data.service.committees %}{% include service-item.html %}{% endfor %}</ul>

## Peer Reviewing

I am more or less regularly reviewing for different venues. If you are a chair or AC in need of a review for a paper that aligns topic-wise with my interests, feel free to contact me via email: [jannis.strecker-bischoff@unisg.ch](mailto:jannis.strecker-bischoff@unisg.ch)!

- Venues: CHI, CHI LBW, DIS, ISMAR, IMWUT, UbiComp, Mensch und Computer
- Special Recognitions for Outstanding Reviews: CHI'25 Full Paper (1), DIS'25 Full Paper (1), ISMAR'25 (1), CHI'24 LBW (1), MuC'24 Short Paper (1)

## Social Media


I am (co-) responsible for the following social media pages:

<ul class="service-list">{% for post in site.data.service.social %}{% include service-item.html %}{% endfor %}</ul>

</div>
