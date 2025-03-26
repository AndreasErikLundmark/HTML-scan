import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # To handle relative URLs

class ScrapeService:
    def scrape_url(self, base_url, search_word):
        url = base_url
        search_word = search_word.strip()
        print("base_url: " + url)
        print("search_word: " + search_word)
        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            # soup contains all html content as an object...
            soup = BeautifulSoup(response.text, "html.parser")

            links = soup.find_all("a", href=True)

            found_links = []

            for idx, link in enumerate(links, start=1):
                link_text = link.get_text(strip=True)
                link_url = link['href']

                if (link_text and search_word.lower() in link_text.lower()) or (
                        link_url and search_word.lower() in link_url.lower()):
                    print("Match found!")

                    full_url = urljoin(base_url, link_url)

                    found_links.append(f"{idx}. Text: {link_text} - URL: {full_url}")

            if not found_links:
                print("No links found!")
            else:
                print("Found links:", found_links)
            return found_links
        else:
            return f"Access Denied: {response.status_code}"
