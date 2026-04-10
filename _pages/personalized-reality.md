---
title: Personalized Reality
permalink: /personalized-reality/
author_profile: true
---

This pages is a companion to the paper "Creating Personalized Realities That Connect People's Perceptions of Reality" that I present at the Stundent Mentoring Program: Dissertation Research Roundtable at [CHI 2026](https://chi2026.acm.org). Here, I list all the papers that I mention in the poster I presented at CHI.


{% assign selected_ids = "/publication/2026-PR-SMP" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<img src="/images/research/RUPS_Model_RQs.png" alt="RUPS Model with RQs" class="lightbox-trigger" data-lightbox="lightbox-rups">
<dialog id="lightbox-rups" class="lightbox-overlay"><img src="/images/research/RUPS_Model_RQs.png" alt="RUPS Model with RQs"></dialog>

<h2 class="rq-heading rq1">RQ1</h2>
> How can ubiquitous personalization systems be modeled to support the design, implementation and analysis of such systems in a responsible way?

{% assign selected_ids = "/publication/2025-RUPS,/publication/2024-PersonalizedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<h2 class="rq-heading rq2">RQ2</h2>
> What are suitable ways to give humans transparency and agency over the flow of their personal data in resonsible ubiquitous personalization systems?

This RQ is still in progress. Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2024-Gaze-based-opportunistic,/publication/2025-DogsGoPods" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<h2 class="rq-heading rq3">RQ3</h2>
> How can PR support humans transparently to efficiently navigate affordance-rich realities?

{% assign selected_ids = "/publication/2026-PRecMR,/publication/2024-ShoppingCoach, /publication/2025-AdBlockedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2025-AdBlockedReality,/publication/2025-JUIC-IoT,/publication/2024-GEAR2" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<h2 class="rq-heading rq4">RQ4</h2>
> In a multi-user PR scenario, what are suitable, effective and usable methods to counter isolated perceptions of reality?

This RQ is still in progress. However, these vision papers sketch the basic ideas:
{% assign selected_ids = "/publication/2026-PersonalizedSociety,/publication/2025-WorldviewPR,/publication/2024-TowardsNewRealities,/publication/2022-Sharing-P-MR" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<script>
document.querySelectorAll('.lightbox-trigger').forEach(function(img) {
  img.addEventListener('click', function() {
    document.getElementById(this.dataset.lightbox).showModal();
  });
});
document.querySelectorAll('dialog.lightbox-overlay').forEach(function(dialog) {
  dialog.addEventListener('click', function() { this.close(); });
});
</script>
