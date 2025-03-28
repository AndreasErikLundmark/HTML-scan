from fastapi import APIRouter
from service.ScrapeService import ScrapeService

router = APIRouter()
scrape_service = ScrapeService()



#Example of call
#http://127.0.0.1:8000/articles/?base_url=https%3A%2F%2Fedition.cnn.com&search_word=yemen
@router.get("/articles/")
def get_articles(base_url: str, search_word: str):
    return scrape_service.scrape_url(base_url=base_url, search_word=search_word)


