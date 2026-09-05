# Vision Transformers

Transformer-based architectures applied to image classification and object detection — treating an image as a sequence of patches (ViT), or as a set of learned object queries (DETR), instead of relying purely on convolutions.

## Notebooks

| Notebook | Model | Task |
|---|---|---|
| `ViT Image Classification.ipynb` | ViT (`google/vit-base-patch16-224`) | Image classification |
| `Detr Transformer.ipynb` | DETR (`facebook/detr-resnet-50`) | Object detection |

---

## ViT (Vision Transformer)

- Loaded via Hugging Face Transformers (`ViTFeatureExtractor` + `ViTForImageClassification`)
- The input image is split into fixed-size patches, embedded, and passed through a standard transformer encoder pretrained on ImageNet
- Outputs logits over 1,000 ImageNet classes; the top prediction is taken with `argmax`

**Result:** predicts **"tabby, tabby cat"** as the top-1 class on the test image.

## DETR (DEtection TRansformer)

- `facebook/detr-resnet-50`: a ResNet-50 CNN backbone feeding into a transformer encoder-decoder
- Predicts a fixed set of boxes and class labels directly (no anchors, no NMS), matched to ground truth via Hungarian matching during training
- Detection threshold: `0.86`

**Result:** detects **person** (99.97%) and **bicycle** (99.67%) on the test image.

*(This is the same DETR implementation referenced in [Object Detection](../Object_Detection/README.md) — included here as well since DETR is, at its core, a transformer architecture.)*

## Requirements

```bash
pip install torch torchvision transformers matplotlib opencv-python
```
