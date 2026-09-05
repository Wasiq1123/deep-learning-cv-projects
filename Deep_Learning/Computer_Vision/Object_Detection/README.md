# Object Detection

Four different approaches to object detection, ranging from a classic two-stage detector to a fully zero-shot vision-language model — implemented as separate notebooks so each architecture's behavior can be inspected in isolation.

## Notebooks

| Notebook | Model | Approach |
|---|---|---|
| `Faster R-CNN Object Detection.ipynb` | Faster R-CNN (ResNet50-FPN) | Two-stage, anchor-based detection |
| `Detr Transformer.ipynb` | DETR (ResNet-50 backbone) | End-to-end transformer-based detection |
| `Yolov8 Video Object Detection.ipynb` | YOLOv8n | Real-time, single-stage video detection |
| `Qwen2.5 Zero Shot Object detection.ipynb` | Qwen2.5-VL-3B-Instruct | Zero-shot, prompt-based grounding |

---

## Faster R-CNN

- `torchvision.models.detection.fasterrcnn_resnet50_fpn`, loaded with default COCO-pretrained weights
- Confidence threshold: `0.6`

**Result:** detects **person** (99.97%) and **bicycle** (99.65%) on the test image; lower-confidence spurious detections are filtered out by the threshold.

## DETR (DEtection TRansformer)

- `facebook/detr-resnet-50` via Hugging Face `transformers`, using `DetrImageProcessor` for pre- and post-processing
- No anchors and no NMS — the model directly predicts a fixed set of boxes and labels, matched via Hungarian matching
- Detection threshold: `0.86`

**Result:** detects **person** (99.97%) and **bicycle** (99.67%) on the same test image.

## YOLOv8 (Video)

- `ultralytics` YOLOv8n (`yolov8n.pt`)
- Confidence threshold: `0.5`
- Runs frame by frame over a video file, annotating and displaying each frame in real time with `results[0].plot()`

## Qwen2.5-VL Zero-Shot Detection

- `Qwen/Qwen2.5-VL-3B-Instruct`, loaded via Hugging Face Transformers + `qwen-vl-utils`
- The model is prompted (through a chat template) to act as an object detector and return strict JSON: `{"bbox_2d": [x1, y1, x2, y2], "label": "class"}`
- Given an image and a natural-language instruction (e.g. *"Outline the position of elephants"*), it returns a bounding box and label with no training or fine-tuning — purely from the prompt

## Requirements

```bash
pip install torch torchvision transformers qwen-vl-utils ultralytics matplotlib opencv-python
```
