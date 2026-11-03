# ViLo

**ViLo: LiDAR Localization with Vision-Language Priors**  
NeurIPS 2026

ViLo uses vision-language scene priors during training to guide a scene-adaptive mixture of local, mid-range, and global experts. Cross-modal distillation transfers this guidance into the 3D backbone, so inference uses LiDAR point clouds alone.

[Project website](https://reckozmh.github.io/ViLo/) · [Manuscript PDF](Paper/ViLo_LiDAR_Localization_with_Vision-Language_Priors.pdf)

The paper reports mean translation errors of **0.60 m on Quality-enhanced Oxford** and **0.69 m on NCLT**, compared with 0.75 m and 1.40 m for GTRLoc in the same tables. See the manuscript for the full experimental setup and results.

**Code:** We are organizing the implementation for public release. The repository currently contains the project website, manuscript, and paper figures; it is not yet a code release.

Authors: Minghang Zhu, Jianshi Wu, Yuxin Guo, Wen Li, Penghui Shang, Sheng Ao, Cheng Wang. The first three authors contributed equally.
