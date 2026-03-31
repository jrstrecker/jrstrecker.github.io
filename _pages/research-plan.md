---
title: Research Plan
layout: default
permalink: /research-plan/
author_profile: true
---

# References for my SMP submission

This pages is a companion to the paper "Creating Personalized Realities That Connect People’s Perceptions of Reality" that I present at the Stundent Mentoring Program: Dissertation Research Roundtable at [CHI 2026](https://chi2026.acm.org).

## RQ1: How can ubiquitous personalization systems be modeled to support the design, implementation and analysis of such systems in a responsible way?

{% assign pub = site.publications | where: "permalink", "/publication/2026-RUPS" | first %}
{% include archive-single.html post=pub type="list" %}

{% assign pub = site.publications | where: "permalink", "/publication/2024-ABIS" | first %}
{% include archive-single.html post=pub type="list" %}

## RQ2: What are suitable ways to give humans transparency and agency over the flow of their personal data in resonsible ubiquitous personalization systems?

This RQ is still in progress. Papers that I have contributed to which are (loosely) connected to this RQ:
{% assign pub = site.publications | where: "permalink", "/publication/2024-Gaze-based-opportunistic" | first %}
{% include archive-single.html post=pub type="list" %}


## RQ3: How can PR support humans transparently to efficiently navigate affordance-rich realities?

{% assign pub = site.publications | where: "permalink", "/publication/2026-PRecMR" | first %}
{% include archive-single.html post=pub type="list" %}
{% assign pub = site.publications | where: "permalink", "/publication/2024-ShoppingCoach" | first %}
{% include archive-single.html post=pub type="list" %}

Papers that I have contributed to which are (loosely) connected to this RQ:
{% assign pub = site.publications | where: "permalink", "/publication/2024-AdBlocked-Reality" | first %}
{% include archive-single.html post=pub type="list" %}

## RQ4: In a multi-user PR scenario, what are suitable, effective and usable methods to counter isolated perceptions of reality?

This RQ is still in progress. However, this vision paper sketches the basic idea:
{% assign pub = site.publications | where: "permalink", "/publication/2023-Sharing-P-MR" | first %}
{% include archive-single.html post=pub type="list" %}