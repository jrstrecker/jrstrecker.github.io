---
title: "ClearSkies: A Preliminary Study of Gaze-Mapped Scene Segmentation in Training Aircraft Cockpits"
collection: publications
permalink: /publication/2026-ClearSkies
tags: ["Eye Tracking", "Computer Vision"]
date: 2026-06-01
venue: '2026 Symposium on Eye Tracking Research and Applications (ETRA ’26)'
venuelink: "https://etra.acm.org/2026/"
shortvenue: "ETRA '26"
papertype: "Conference"
paperurl: '/files/pdf/research/2026-ClearSkies.pdf'
link: 'https://doi.org/10.1145/3797246.3805852'
videolink: 'https://www.youtube-nocookie.com/embed/Avw5mRp_3Fg'
videotitle: 'Teaser Video'
authors: "Sebastian Oes, Kenan Bektaş, Jannis Strecker-Bischoff, and Simon Mayer"
citation: "Sebastian Oes, Kenan Bektaş, Jannis Strecker-Bischoff, and Simon Mayer. 2026. ClearSkies: A Preliminary Study of Gaze-Mapped Scene Segmentation in Training Aircraft Cockpits. In 2026 Symposium on Eye Tracking Research and Applications (ETRA ’26), June 01–04, 2026, Marrakesh, Morocco. ACM, New York, NY, USA, 3 pages. https://doi.org/10.1145/3797246.3805852"
abstract: "In pilot training, deviation from standard procedures is a significant concern. To provide student pilots with objective feedback in post-flight debriefing, we captured pilots' view and gaze with the Pupil Core eye-tracker. Then we conducted a preliminary evaluation to test the feasibility of existing scene segmentation models for gaze-mapping. We used an OpenCV baseline model for coarse inside vs. outside-analysis, a fine-tuned Detectron2 model for specific instrument segmentation, and Segment Anything Models (SAM 2 and SAM 3) for human-in-the-loop analysis. The baseline was fast but fragile, failing in common flight scenarios; the Detectron2 model was powerful but inflexible and unsuitable for general use; and SAM 3 was promising, offering generalizability for post-flight analysis despite noisy digital displays. A qualitative preliminary evaluation of SAM with Visual Flight Rules shows that it can be beneficial in eye movement analysis. We identified poor data quality in bright cockpit environments and ergonomics as main limitations."
code: https://github.com/Interactions-HSG/ClearSkies
bib: |
    @inproceedings{10.1145/3797246.3805852,
    author = {Oes, Sebastian and Bektas, Kenan and Strecker-Bischoff, Jannis and Mayer, Simon},
    title = {ClearSkies: A Preliminary Study of Gaze-Mapped Scene Segmentation in Training Aircraft Cockpits},
    year = {2026},
    isbn = {9798400725197},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3797246.3805852},
    doi = {10.1145/3797246.3805852},
    abstract = {In pilot training, deviation from standard procedures is a significant concern. To provide student pilots with objective feedback in post-flight debriefing, we captured pilots’ view and gaze with the Pupil Core eye-tracker. Then we conducted a preliminary evaluation to test the feasibility of existing scene segmentation models for gaze-mapping1. We used an OpenCV baseline model for coarse inside vs. outside-analysis, a fine-tuned Detectron2 model for specific instrument segmentation, and Segment Anything Models (SAM 2 and SAM 3) for human-in-the-loop analysis. The baseline was fast but fragile, failing in common flight scenarios; the Detectron2 model was powerful but inflexible and unsuitable for general use; and SAM 3 was promising, offering generalizability for post-flight analysis despite noisy digital displays. A qualitative preliminary evaluation of SAM with Visual Flight Rules shows that it can be beneficial in eye movement analysis. We identified poor data quality in bright cockpit environments and ergonomics as main limitations.},
    booktitle = {Proceedings of the 2026 Symposium on Eye Tracking Research and Applications},
    articleno = {33},
    numpages = {3},
    location = {
    },
    series = {ETRA '26}
    }
---


