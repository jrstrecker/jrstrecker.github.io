---
title: "MR Object Identification and Interaction: Fusing Object Situation Information from Heterogeneous Sources"
collection: publications
permalink: /publication/2022-MR-Object-Identification
date: 2023-09-27
venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies'
paperurl: '/files/pdf/research/2023-Sharing-P-MR.pdf'
link: 'https://www.alexandria.unisg.ch/handle/20.500.14171/117736'
citation: 'Jannis Strecker, Khakim Akhunov, Federico Carbone, Kimberly García, Kenan Bektaş, Andres Gomez, Simon Mayer, and Kasim Sinan Yildirim. 2023. MR Object Identification and Interaction: Fusing Object Situation Information from Heterogeneous Sources. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 7, 3, Article 124 (September 2023), 26 pages. https://doi.org/10.1145/3610879'
abstract: 'The increasing number of objects in ubiquitous computing environments creates a need for effective object detection and identification mechanisms that permit users to intuitively initiate interactions with these objects. While multiple approaches to such object detection -- including through visual object detection, fiducial markers, relative localization, or absolute spatial referencing -- are available, each of these suffers from drawbacks that limit their applicability. In this paper, we propose ODIF, an architecture that permits the fusion of object situation information from such heterogeneous sources and that remains vertically and horizontally modular to allow extending and upgrading systems that are constructed accordingly. We furthermore present BLEARVIS, a prototype system that builds on the proposed architecture and integrates computer-vision (CV) based object detection with radio-frequency (RF) angle of arrival (AoA) estimation to identify BLE-tagged objects. In our system, the front camera of a Mixed Reality (MR) head-mounted display (HMD) provides a live image stream to a vision-based object detection module, while an antenna array that is mounted on the HMD collects AoA information from ambient devices. In this way, BLEARVIS is able to differentiate between visually identical objects in the same environment and can provide an MR overlay of information (data and controls) that relates to them. We include experimental evaluations of both, the CV-based object detection and the RF-based AoA estimation, and discuss the applicability of the combined RF and CV pipelines in different ubiquitous computing scenarios. This research can form a starting point to spawn the integration of diverse object detection, identification, and interaction approaches that function across the electromagnetic spectrum, and beyond.'
code: https://github.com/Interactions-HSG/blearvis
---

<details open><summary><i class="fa fa-fw fa-film fa-info-color" aria-hidden="true"></i> Short Demo Video</summary>
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pmwpOFGvSwc?si=HBNIOHo0Rtze_Ziu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 </details>
