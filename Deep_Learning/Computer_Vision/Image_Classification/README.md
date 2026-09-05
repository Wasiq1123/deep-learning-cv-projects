# Image Classification

Two experiments exploring image classification from different angles: a CNN trained from scratch, and a benchmark comparison between two pretrained TensorFlow/Keras models.

*(ViT-based classification is covered separately in [Vision Transformers](../Vision_Transformers/README.md).)*

## Notebooks

| Notebook | What it does |
|---|---|
| `Hand_Written_Dataset Recognition.ipynb` | Trains a CNN from scratch on MNIST digits |
| `Tf Resnet and VGG image classification comparison.ipynb` | Benchmarks pretrained ResNet50 vs. VGG16 on a custom image |

---

## 1. MNIST Digit Classification (CNN from scratch)

A custom convolutional network built with `tf.keras.Sequential`:

```
Conv2D(32, 3x3, ReLU) → MaxPool(3x3) → Dropout(0.25) → Flatten → Dense(100, ReLU) → Dense(10, Softmax)
```

- **Dataset:** `keras.datasets.mnist` — 60,000 train / 10,000 test, 28×28 grayscale digits
- **Optimizer / Loss:** Adam, sparse categorical cross-entropy
- **Training:** 10 epochs, batch size 32, 25% validation split
- **Evaluation:** confusion matrix and classification report on the held-out test set

**Result**

| Metric | Value |
|---|---|
| Test accuracy | ~98.2% |
| Test loss | 0.097 |
| Validation accuracy (during training) | ~98–99% |

## 2. ResNet50 vs. VGG16 (TensorFlow/Keras Applications)

Both models are loaded with ImageNet-pretrained weights (`tf.keras.applications`) and run on the same custom test image (a photo of an alligator), recording inference time, parameter count, and the top-1 prediction with confidence score for each.

**Result**

| Model | Parameters | Inference Time | Top-1 Prediction | Confidence |
|---|---|---|---|---|
| ResNet50 | ~25.6M | ~0.49s | American alligator | 96.15% |
| VGG16 | 138,357,544 | ~0.57s | American alligator | 95.29% |

Both models correctly identify the subject. ResNet50 is far smaller and slightly faster than VGG16, while reaching marginally higher confidence on this image.

## Requirements

```bash
pip install tensorflow torch torchvision transformers opencv-python matplotlib scikit-learn
```
