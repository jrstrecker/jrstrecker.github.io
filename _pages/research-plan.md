---
title: Research Plan
permalink: /research-plan/
author_profile: true
---

This pages is a companion to the paper "Creating Personalized Realities That Connect People's Perceptions of Reality" that I present at the Stundent Mentoring Program: Dissertation Research Roundtable at [CHI 2026](https://chi2026.acm.org).


{% assign selected_ids = "/publication/2026-PR-SMP" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

## RQ1: How can ubiquitous personalization systems be modeled to support the design, implementation and analysis of such systems in a responsible way?

{% assign selected_ids = "/publication/2025-RUPS,/publication/2024-PersonalizedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

## RQ2: What are suitable ways to give humans transparency and agency over the flow of their personal data in resonsible ubiquitous personalization systems?

This RQ is still in progress. Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2024-Gaze-based-opportunistic" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}


## RQ3: How can PR support humans transparently to efficiently navigate affordance-rich realities?

{% assign selected_ids = "/publication/2026-PRecMR,/publication/2024-ShoppingCoach, /publication/2025-AdBlockedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2025-AdBlockedReality, /publication/2025-JUIC-IoT" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

## RQ4: In a multi-user PR scenario, what are suitable, effective and usable methods to counter isolated perceptions of reality?

This RQ is still in progress. However, these vision papers sketch the basic ideas:
{% assign selected_ids = "/publication/2022-Sharing-P-MR, /publication/WorldviewPR, /publication/2026-PersonalizedSociety" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}
