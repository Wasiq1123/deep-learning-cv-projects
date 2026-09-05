# Segmentation

Six notebooks covering pixel-level scene understanding, from classic fully-convolutional CNNs to the latest promptable segmentation models — applied to both static images and video.

## Notebooks

| Notebook | Model | Input |
|---|---|---|
| `Pytorch Image Segmentation.ipynb` | FCN-ResNet101 vs. DeepLabV3-ResNet101 | Image |
| `Deeplabv3_resnet101 Segmentation in Video.ipynb` | DeepLabV3-ResNet101 | Video |
| `YOLO11 Image Segmentation.ipynb` | YOLO11n-Seg | Image |
| `YOLO11 Segmentation in Video.ipynb` | YOLO11n-Seg | Video |
| `SAM2 Segementation in Video.ipynb` | SAM 2.1 (base) | Video |
| `FAST-SAM.ipynb` | FastSAM-s | Image |

---

## FCN vs. DeepLabV3 (side-by-side comparison)

Both `torchvision.models.segmentation.fcn_resnet101` and `deeplabv3_resnet101`, pretrained on COCO, are run on the same test image. Each model's output tensor is reduced to a per-pixel class mask with `argmax`, color-mapped with OpenCV's `COLORMAP_JET`, and the original image plus both predicted masks are displayed side by side for direct visual comparison.

## DeepLabV3 on Video

The same DeepLabV3-ResNet101 model is applied frame by frame to a video (each frame resized to 512×512 and normalized with ImageNet statistics), with the predicted class map rendered using `COLORMAP_INFERNO`.

## YOLO11 Segmentation

`yolo11n-seg.pt` performs instance segmentation, producing both bounding boxes and masks in a single pass.

**Result:** on a sample street image, detects 4 persons, 1 bus, and 1 stop sign (~588ms inference), with per-detection confidence, box coordinates, and mask shape printed for each instance. The same model is also run frame by frame on video for real-time segmentation.

## SAM2 (Segment Anything Model v2)

Meta's `sam2.1_b`, run through Ultralytics' `SAM` wrapper, processes video frames to generate zero-shot segmentation masks for the objects it finds, without any class-specific training.

## FastSAM

`FastSAM-s.pt`, a lightweight real-time alternative to SAM, segments a test image with `retina_masks=True`, `imgsz=1024`, confidence `0.85`, and IoU `0.9`.

**Result:** 11 objects detected in the scene.

## Requirements

```bash
pip install torch torchvision ultralytics opencv-python matplotlib Pillow
```
