# Document Processor

Extracts structured data from PDFs, images, and forms using OCR and LLM-powered parsing. Validates extracted data against schemas and handles multi-page documents with context retention.

**Tech stack:** Python 3.11, FastAPI, PyPDF2, pytesseract, OpenAI GPT-4

**Run locally:** `poetry install && poetry run uvicorn main:app --host 0.0.0.0 --port 8003`