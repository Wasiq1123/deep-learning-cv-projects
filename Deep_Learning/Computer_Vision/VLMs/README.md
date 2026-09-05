# Vision-Language Models (VLMs)

Models that jointly understand images and text — used here for embedding/similarity analysis, zero-shot image captioning, and zero-shot object grounding, with no task-specific training.

## Notebooks

| Notebook | Model | Task |
|---|---|---|
| `CLIP Tokenization.ipynb` | CLIP (`openai/clip-vit-base-patch32`) | Text/image embeddings & similarity |
| `Owen 2.5 VLMs Image Captioning.ipynb` | Qwen2.5-VL-3B-Instruct | Zero-shot image captioning |
| `Owen2.5 Zero Shot Object detection.ipynb` | Qwen2.5-VL-3B-Instruct | Zero-shot object grounding |

---

## CLIP: Tokenization & Embedding Similarity

Both text (`CLIPTokenizer`) and images (`CLIPProcessor`) are encoded into a shared 512-dimensional embedding space using `CLIPModel`.

- **Text-text similarity:** four prompts ("a donut", "a cookie", "an airplane", "a cat") are embedded and compared with cosine similarity — semantically related pairs (donut/cookie) score highest against each other.
- **Image-text similarity:** four images (cat, donut, airplane, cookie) are embedded and compared against the text embeddings using `torch.nn.functional.cosine_similarity`, demonstrating CLIP's cross-modal alignment between visual and textual concepts.

## Qwen2.5-VL: Zero-Shot Image Captioning

- `Qwen/Qwen2.5-VL-3B-Instruct`, loaded with Hugging Face Transformers (`torch_dtype="auto"`, `device_map="auto"`)
- An image and a text instruction ("Describe this image.") are combined via a chat template and processed with `qwen_vl_utils.process_vision_info`
- The model generates a natural-language caption for the image with no fine-tuning

## Qwen2.5-VL: Zero-Shot Object Grounding

- Same base model, prompted with a system message instructing it to act as an object detector and respond with strict JSON (`{"bbox_2d": [...], "label": "..."}`)
- Given a user instruction such as *"Outline the position of elephants"*, it returns bounding box coordinates and a label directly from the prompt, with no object-detection-specific training

## Requirements

```bash
pip install torch torchvision transformers qwen-vl-utils matplotlib opencv-python
```

If using Google Colab with a gated Hugging Face model:

```python
from huggingface_hub import login
login(token="your_huggingface_token")
```
