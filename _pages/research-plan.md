---
title: Research Plan
permalink: /research-plan/
author_profile: true
---

This pages is a companion to the paper "Creating Personalized Realities That Connect People's Perceptions of Reality" that I present at the Stundent Mentoring Program: Dissertation Research Roundtable at [CHI 2026](https://chi2026.acm.org). Here, I list all the papers that I mention in the poster I presented at CHI.


{% assign selected_ids = "/publication/2026-PR-SMP" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details class="pub-collapsible"><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

## RQ1: How can ubiquitous personalization systems be modeled to support the design, implementation and analysis of such systems in a responsible way?

{% assign selected_ids = "/publication/2025-RUPS,/publication/2024-PersonalizedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details class="pub-collapsible"><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

## RQ2: What are suitable ways to give humans transparency and agency over the flow of their personal data in resonsible ubiquitous personalization systems?

This RQ is still in progress. Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2024-Gaze-based-opportunistic" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details class="pub-collapsible"><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}


## RQ3: How can PR support humans transparently to efficiently navigate affordance-rich realities?

{% assign selected_ids = "/publication/2026-PRecMR,/publication/2024-ShoppingCoach, /publication/2025-AdBlockedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details class="pub-collapsible"><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

Papers that I have contributed to which are connected to this RQ:
{% assign selected_ids = "/publication/2025-AdBlockedReality,/publication/2025-JUIC-IoT,/publication/2024-GEAR2" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details class="pub-collapsible"><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

## RQ4: In a multi-user PR scenario, what are suitable, effective and usable methods to counter isolated perceptions of reality?

This RQ is still in progress. However, these vision papers sketch the basic ideas:
{% assign selected_ids = "/publication/2022-Sharing-P-MR,/publication/WorldviewPR,/publication/2026-PersonalizedSociety" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}<details class="pub-collapsible"><summary>{{ post.title }}</summary>{% include archive-single.html %}</details>{% endfor %}

<script>
document.querySelectorAll('.pub-collapsible').forEach(function(el) {
  el.addEventListener('click', function(e) {
    var summary = el.querySelector(':scope > summary');
    if (!e.target.closest('summary') || e.target.closest('summary') !== summary) return;
    e.preventDefault();
    var content = el.querySelector(':scope > .list__item');
    if (el.open) {
      content.style.height = content.scrollHeight + 'px';
      requestAnimationFrame(function() {
        content.style.transition = 'height 0.35s ease, opacity 0.35s ease';
        content.style.height = '0';
        content.style.opacity = '0';
        content.addEventListener('transitionend', function() {
          el.removeAttribute('open');
          content.style.cssText = '';
        }, { once: true });
      });
    } else {
      el.setAttribute('open', '');
      var height = content.scrollHeight;
      content.style.height = '0';
      content.style.opacity = '0';
      content.style.overflow = 'hidden';
      requestAnimationFrame(function() {
        content.style.transition = 'height 0.35s ease, opacity 0.35s ease';
        content.style.height = height + 'px';
        content.style.opacity = '1';
        content.addEventListener('transitionend', function() {
          content.style.cssText = '';
        }, { once: true });
      });
    }
  });
});
</script>
