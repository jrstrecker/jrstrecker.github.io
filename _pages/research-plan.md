---
title: Research Plan
permalink: /research-plan/
author_profile: true
---

{% for item in site.publications limit:1 %}
  <pre>{{ item | jsonify }}</pre>
{% endfor %}

# References for my SMP submission

This pages is a companion to the paper "Creating Personalized Realities That Connect People’s Perceptions of Reality" that I present at the Stundent Mentoring Program: Dissertation Research Roundtable at [CHI 2026](https://chi2026.acm.org).

## RQ1: How can ubiquitous personalization systems be modeled to support the design, implementation and analysis of such systems in a responsible way?

{% assign selected_ids = "2026-RUPS,2024-ABIS" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs %}
	{% include archive-single.html post=post type="list" %}
{% endfor %}

## RQ2: What are suitable ways to give humans transparency and agency over the flow of their personal data in resonsible ubiquitous personalization systems?

This RQ is still in progress. Papers that I have contributed to which are (loosely) connected to this RQ:
{% assign selected_ids = "2024-Gaze-based-opportunistic" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs %}
	{% include archive-single.html post=post type="list" %}
{% endfor %}


## RQ3: How can PR support humans transparently to efficiently navigate affordance-rich realities?

{% assign selected_ids = "2026-PRecMR,2024-ShoppingCoach" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs %}
	{% include archive-single.html post=post type="list" %}
{% endfor %}

Papers that I have contributed to which are (loosely) connected to this RQ:
{% assign selected_ids = "2024-AdBlocked-Reality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs %}
	{% include archive-single.html post=post type="list" %}
{% endfor %}

## RQ4: In a multi-user PR scenario, what are suitable, effective and usable methods to counter isolated perceptions of reality?

This RQ is still in progress. However, this vision paper sketches the basic idea:
{% assign selected_ids = "2023-Sharing-P-MR" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs %}
	{% include archive-single.html post=post type="list" %}
{% endfor %}