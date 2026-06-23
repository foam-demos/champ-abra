# Agent Orchestrator

Coordinates multi-step AI agent workflows across browser, document, and voice execution engines. Built with Python, FastAPI, and Celery for async task distribution. Integrates with OpenAI, Anthropic, and internal agent runners.

**Tech stack:** Python 3.11, FastAPI, Celery, Redis, PostgreSQL

**Run locally:** `poetry install && poetry run uvicorn main:app --reload`