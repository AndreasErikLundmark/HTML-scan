#https://www.crummy.com/software/BeautifulSoup/bs4/doc/
from fastapi import FastAPI
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from controller.ScrapeController import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (this will allow any domain to access your API)
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Allow specific methods
    allow_headers=["*"],  # Allow all headers
)
app.include_router(router)

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=5000, reload=True)
#    base_url = input("Enter the base url: ")
#    search_word = input("Enter a word to search for in links: ")
#    scrape_url(base_url, search_word)
#    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)

