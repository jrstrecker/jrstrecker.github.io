---
title: Personalized Reality
permalink: /personalized-reality/
author_profile: true
---

This pages is a companion to the paper "Creating Personalized Realities That Connect People's Perceptions of Reality" that I present at the Stundent Mentoring Program: Dissertation Research Roundtable at [CHI 2026](https://chi2026.acm.org). Here, I list all the papers that I mention in the poster I presented at CHI.


{% assign selected_ids = "/publication/2026-PR-SMP" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<div class="rp-pub"><div class="rp-pub-header"><p class="rp-pub-title"><a href="{{ post.url }}">📄 {{ post.title }}</a></p><em class="rp-pub-venue">{{ post.venue }}</em><button class="rp-pub-toggle">See details</button></div><div class="rp-pub-content">{% include archive-single.html %}</div></div>{% endfor %}

![RUPS Model with RQs](/images/research/RUPS_Model_RQs.png)


## RQ1
> How can ubiquitous personalization systems be modeled to support the design, implementation and analysis of such systems in a responsible way?

{% assign selected_ids = "/publication/2025-RUPS,/publication/2024-PersonalizedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<div class="rp-pub"><div class="rp-pub-header"><p class="rp-pub-title"><a href="{{ post.url }}">📄 {{ post.title }}</a></p><em class="rp-pub-venue">{{ post.venue }}</em><button class="rp-pub-toggle">See details</button></div><div class="rp-pub-content">{% include archive-single.html %}</div></div>{% endfor %}

## RQ2
> What are suitable ways to give humans transparency and agency over the flow of their personal data in resonsible ubiquitous personalization systems?

This RQ is still in progress. Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2024-Gaze-based-opportunistic" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<div class="rp-pub"><div class="rp-pub-header"><p class="rp-pub-title"><a href="{{ post.url }}">📄 {{ post.title }}</a></p><em class="rp-pub-venue">{{ post.venue }}</em><button class="rp-pub-toggle">See details</button></div><div class="rp-pub-content">{% include archive-single.html %}</div></div>{% endfor %}

## RQ3
> How can PR support humans transparently to efficiently navigate affordance-rich realities?

{% assign selected_ids = "/publication/2026-PRecMR,/publication/2024-ShoppingCoach, /publication/2025-AdBlockedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<div class="rp-pub"><div class="rp-pub-header"><p class="rp-pub-title"><a href="{{ post.url }}">📄 {{ post.title }}</a></p><em class="rp-pub-venue">{{ post.venue }}</em><button class="rp-pub-toggle">See details</button></div><div class="rp-pub-content">{% include archive-single.html %}</div></div>{% endfor %}

Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2025-AdBlockedReality,/publication/2025-JUIC-IoT,/publication/2024-GEAR2" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<div class="rp-pub"><div class="rp-pub-header"><p class="rp-pub-title"><a href="{{ post.url }}">📄 {{ post.title }}</a></p><em class="rp-pub-venue">{{ post.venue }}</em><button class="rp-pub-toggle">See details</button></div><div class="rp-pub-content">{% include archive-single.html %}</div></div>{% endfor %}

## RQ4
> In a multi-user PR scenario, what are suitable, effective and usable methods to counter isolated perceptions of reality?

This RQ is still in progress. However, these vision papers sketch the basic ideas:
{% assign selected_ids = "/publication/2022-Sharing-P-MR,/publication/WorldviewPR,/publication/2026-PersonalizedSociety" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<div class="rp-pub"><div class="rp-pub-header"><p class="rp-pub-title"><a href="{{ post.url }}">📄 {{ post.title }}</a></p><em class="rp-pub-venue">{{ post.venue }}</em><button class="rp-pub-toggle">See details</button></div><div class="rp-pub-content">{% include archive-single.html %}</div></div>{% endfor %}

<script>
document.body.classList.add('research-plan-page');
document.querySelectorAll('.rp-pub-toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var pub = btn.closest('.rp-pub');
    pub.classList.toggle('open');
    btn.textContent = pub.classList.contains('open') ? 'Hide details' : 'See details';
  });
});
</script>
