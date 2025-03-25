from fastapi import APIRouter
from service.ScrapeService import ScrapeService

router = APIRouter()
scrape_service = ScrapeService()

@router.get("/articles/{base_url}/{search_word}")
def get_articles(base_url: str, search_word: str):

    return scrape_service.scrape_url(base_url=base_url, search_word=search_word)


