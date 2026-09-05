# Object Tracking

Real-time multi-object tracking built on top of YOLO detectors, ranging from Ultralytics' built-in tracker to a standalone SORT implementation and a multi-video-stream setup.

## Files

| File | What it does |
|---|---|
| `Yolov8 tracking.ipynb` | Video object tracking using YOLOv8's built-in `.track()` |
| `SORTTracker and YOLO11.py` | Live webcam tracking using YOLO11 + SORT |
| `Multi-Tracking.py` | Multi-threaded tracking across two video streams simultaneously |

---

## YOLOv8 Built-in Tracking

- `ultralytics` YOLOv8n (`yolov8n.pt`)
- Each video frame is resized to 1020×500 and tracked with `model.track(frame, persist=True)`, which assigns and maintains consistent object IDs across frames
- Annotated frames are rendered live with `results[0].plot()`

## YOLO11 + SORT (Webcam)

- `yolo11m.pt` performs detection on each webcam frame
- Detections are converted to `supervision.Detections` and passed to a `SORTTracker`, which uses Kalman filtering and Hungarian matching to assign stable tracker IDs across frames
- Results are annotated with `supervision.LabelAnnotator`, showing each object's tracker ID

## Multi-Stream Tracking

- Uses Python's `threading` module to run two independent YOLO trackers (`yolov8n.pt` for detection and `yolov8n-seg.pt` for segmentation) concurrently on two separate video files
- Each stream runs in its own thread with its own display window, demonstrating how tracking can scale across multiple simultaneous camera/video sources

## Requirements

```bash
pip install ultralytics supervision opencv-python trackers keyboard
```
