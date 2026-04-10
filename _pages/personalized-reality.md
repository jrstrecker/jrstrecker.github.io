---
title: Personalized Reality
permalink: /personalized-reality/
author_profile: true
---

As devices like XR head-mounted displays and AI-enabled smart glasses become part of everyday life, personalization is extending beyond the Web into people's physical reality. When personalization is applied ubiquitously, each person may perceive a different, system-mediated version of reality -- a *Personalized Reality* (PR). While this can make interactions more efficient and information access more equitable, it also risks isolating people in fragmented realities and grants system designers unprecedented influence over how users experience the world.

In my dissertation, I investigate how *Responsible Ubiquitous Personalization Systems* (RUPS) can create beneficial PRs while mitigating harmful implications. My research combines conceptual frameworks, technical prototypes, and controlled user studies to provide theoretical and practical foundations for designing PR experiences that connect people's realities instead of isolating them.

This page accompanies the poster I present at the [CHI 2026](https://chi2026.acm.org) Dissertation Research Roundtable and provides an overview of my research and all referenced publications.

{% assign selected_ids = "/publication/2026-PR-SMP" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

## The RUPS Model

The figure below shows the model for Responsible Ubiquitous Personalization Systems (RUPS) that structures my dissertation. It consists of five main components -- UP Recipients, UP Data Sources, UP Creation, UP Sharing, and UP Delivery -- each potentially influenced by UP Mediators. My four research questions each address specific parts of this model.

<img src="/images/research/RUPS_Model_RQs.png" alt="RUPS Model with RQs" class="lightbox-trigger" data-lightbox="lightbox-rups">
<dialog id="lightbox-rups" class="lightbox-overlay"><img src="/images/research/RUPS_Model_RQs.png" alt="RUPS Model with RQs"></dialog>

<h2 class="rq-heading rq1">RQ1: Modeling Responsible Ubiquitous Personalization Systems</h2>
> How can ubiquitous personalization systems be modeled to support the design, implementation and analysis of such systems in a responsible way?

Existing personalization models were developed for the Web and primarily focus on optimizing content delivery. They do not capture the unique mechanisms and risks of ubiquitous personalization in physical, hybrid, and virtual environments. To address this, we developed the RUPS model, which extends Web personalization models to holistically describe ubiquitous personalization systems. The model was validated by applying it to existing systems, demonstrating that it can comprehensively describe them, highlight shortcomings, and point toward useful extensions.

{% assign selected_ids = "/publication/2025-RUPS,/publication/2024-PersonalizedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<h2 class="rq-heading rq2">RQ2: Transparency and Agency Over Personal Data</h2>
> What are suitable ways to give humans transparency and agency over the flow of their personal data in responsible ubiquitous personalization systems?

Ubiquitous personalization systems process personal data by definition, and potentially even more data in XR and ubiquitous computing contexts. While existing privacy mechanisms for XR exist, they are not designed for personalization contexts where systems fundamentally depend on personal data. We are developing an XR application using Solid Pods and fine-grained data categories to give users meaningful control over which personal data is used, for which purpose, and for how long. This work is currently in progress.

Related publications:
{% assign selected_ids = "/publication/2024-Gaze-based-opportunistic,/publication/2025-DogsGoPods" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<h2 class="rq-heading rq3">RQ3: Efficient and Transparent Navigation of Affordance-Rich Realities</h2>
> How can PR support humans transparently to efficiently navigate affordance-rich realities?

Personalization can reduce information and option overload by filtering available options to align with user preferences -- for example in supermarkets, warehouses, or industrial shop floors. Different techniques exist for this, including diminishing non-recommended options (Diminished Reality) or highlighting recommended ones. Crucially, this filtering must transparently communicate what has been personalized and why, without overwhelming users in already complex environments.

Our ShoppingCoach prototype uses Diminished Reality to visually diminish unhealthy products based on personalized nutrition recommendations. We also built a system providing personalized recommendations using analogies tailored to users' existing knowledge, making the system's reasoning more transparent.

{% assign selected_ids = "/publication/2026-PRecMR,/publication/2024-ShoppingCoach, /publication/2025-AdBlockedReality" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

Related publications:
{% assign selected_ids = "/publication/2025-AdBlockedReality,/publication/2025-JUIC-IoT,/publication/2024-GEAR2" | split: "," %}
{% assign selected_pubs = site.publications | where_exp: "item", "selected_ids contains item.permalink" %}
{% for post in selected_pubs reversed %}{% include archive-single.html %}{% endfor %}

<h2 class="rq-heading rq4">RQ4: Societally Beneficial Multi-User Personalized Realities</h2>
> In a multi-user PR scenario, what are suitable, effective and usable methods to counter isolated perceptions of reality?

Personalization is often seen as targeting only individuals, but consuming personalized content can have consequences for others. As physical reality provides a basis for shared worlds and intersubjectivity, personalizing it risks diminishing the perceptual overlap that connects people. To counter this, we investigate methods for sharing personalized content across users -- for example, swapping perceived content to foster mutual understanding, or sharing personalized recommendations with family members while grocery shopping. This work is currently in progress, building on the vision and sharing modes we have described in the publications below.

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
