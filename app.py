#https://www.crummy.com/software/BeautifulSoup/bs4/doc/
from fastapi import FastAPI
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import uvicorn

from controller.ScrapeController import router

app = FastAPI()

app.include_router(router)

if __name__ == "__main__":
#    base_url = input("Enter the base url: ")
#    search_word = input("Enter a word to search for in links: ")
#    scrape_url(base_url, search_word)
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
