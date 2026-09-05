# Deep Learning & Computer Vision Projects

![Python](https://img.shields.io/badge/Python-3.8+-blue)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=white)
![HuggingFace](https://img.shields.io/badge/%F0%9F%A4%97%20Transformers-yellow)
![Ultralytics](https://img.shields.io/badge/Ultralytics-YOLO-111F68)

A collection of applied deep learning experiments covering the core areas of modern computer vision: image classification, object detection, segmentation, object tracking, vision transformers, and vision-language models (VLMs). Each project is a self-contained Jupyter notebook (or script) built on industry-standard frameworks — PyTorch, TensorFlow/Keras, Hugging Face Transformers, and Ultralytics — developed and run on Google Colab.

## Contents

- [Repository Structure](#repository-structure)
- [What This Repository Covers](#what-this-repository-covers)
- [Tools & Frameworks](#tools--frameworks)
- [How the Projects Were Built](#how-the-projects-were-built)

## Repository Structure

```
deep-learning-cv-projects/
│
├── Deep_Learning/
│   └── Computer_Vision/
│       ├── Image_Classification/     # CNN from scratch, ResNet50, VGG16
│       ├── Object_Detection/         # Faster R-CNN, DETR, YOLOv8, Qwen2.5-VL
│       ├── Segmentation/             # DeepLabV3, FCN, YOLO11-Seg, SAM2, FastSAM
│       ├── Tracking/                 # YOLOv8 / YOLO11 + SORT, multi-stream tracking
│       ├── Vision_Transformers/      # ViT, DETR
│       ├── VLMs/                     # CLIP, Qwen2.5-VL
│       └── Transfer_Learning/        # reserved for transfer-learning experiments
│
├── Machine_Learning/
│   └── ML/                           # reserved for classical ML experiments
│
├── cookbooks/
│   └── universal_audio_understanding.ipynb   # Qwen2.5-Omni audio understanding reference notebook
│
├── ZoeDepth_quickstart.ipynb          # ZoeDepth monocular depth estimation reference notebook
└── README.md
```

Each subfolder under `Deep_Learning/Computer_Vision/` has its own README with model details and results:

| Folder | Focus |
|---|---|
| [Image Classification](Deep_Learning/Computer_Vision/Image_Classification/README.md) | CNN, ResNet50, VGG16 |
| [Object Detection](Deep_Learning/Computer_Vision/Object_Detection/README.md) | Faster R-CNN, DETR, YOLOv8, Qwen2.5-VL |
| [Segmentation](Deep_Learning/Computer_Vision/Segmentation/README.md) | DeepLabV3, FCN, YOLO11-Seg, SAM2, FastSAM |
| [Tracking](Deep_Learning/Computer_Vision/Tracking/README.md) | YOLOv8/YOLO11 + SORT, multi-stream tracking |
| [Vision Transformers](Deep_Learning/Computer_Vision/Vision_Transformers/README.md) | ViT, DETR |
| [VLMs](Deep_Learning/Computer_Vision/VLMs/README.md) | CLIP, Qwen2.5-VL |

## What This Repository Covers

- **Image Classification** — training a CNN from scratch on MNIST, and benchmarking pretrained ResNet50 and VGG16 on a custom image.
- **Object Detection** — comparing a two-stage detector (Faster R-CNN), a transformer-based detector (DETR), a real-time detector (YOLOv8), and a zero-shot vision-language detector (Qwen2.5-VL).
- **Segmentation** — pixel-level scene understanding with DeepLabV3, FCN-ResNet101, YOLO11-Seg, SAM2, and FastSAM, applied to both images and video.
- **Tracking** — combining detectors with tracking algorithms (Ultralytics' built-in tracker, SORT) to maintain persistent object IDs across video frames, including a multi-stream setup.
- **Vision Transformers** — patch-based image understanding (ViT) and transformer-based detection (DETR).
- **Vision-Language Models (VLMs)** — CLIP for image-text embedding and similarity, and Qwen2.5-VL for zero-shot captioning and object grounding.

Two additional reference notebooks sit at the repository root:

- `ZoeDepth_quickstart.ipynb` — the official ZoeDepth quickstart notebook for zero-shot monocular depth estimation.
- `cookbooks/universal_audio_understanding.ipynb` — a Qwen2.5-Omni cookbook notebook demonstrating speech recognition, speech-to-text translation, and audio analysis.

## Tools & Frameworks

| Category | Tools |
|---|---|
| Deep Learning | PyTorch, TensorFlow / Keras |
| Model Hub | Hugging Face Transformers, `qwen-vl-utils` |
| Detection / Segmentation / Tracking | Ultralytics (YOLOv8, YOLO11, FastSAM, SAM2), TorchVision |
| Vision-Language | OpenAI CLIP, Qwen2.5-VL |
| Supporting Libraries | OpenCV, NumPy, Matplotlib, scikit-learn |
| Environment | Google Colab (GPU runtime), Google Drive for data/model storage |

## How the Projects Were Built

Every notebook follows the same workflow:

1. Mount Google Drive (for input images/videos) and install any extra dependencies (`ultralytics`, `transformers`, `qwen-vl-utils`, etc.).
2. Load a pretrained model — from TorchVision, Hugging Face, or Ultralytics — with no or minimal task-specific training.
3. Run inference on a custom image or on a video, frame by frame.
4. Post-process the output (thresholding, decoding predictions, drawing boxes/masks) and visualize the results with Matplotlib or OpenCV.

This keeps each notebook focused on understanding and comparing how a given architecture behaves in practice, rather than on large-scale training.
