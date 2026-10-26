import os

from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv() # loads GEMINI_API_KEY from .env

client = genai.Client()

MODEL = os.environ.get("LLM_MODEL", "gemini-flash-lite-latest")

response = client.models.generate_content(
    model=MODEL,
    contents="What is a neural network in one setence?",
    config=types.GenerateContentConfig(max_output_tokens=1024)
)

print(response.text)