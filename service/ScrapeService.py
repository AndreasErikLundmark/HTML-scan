import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # To handle relative URLs

class ScrapeService:
    def scrape_url(self, base_url, search_word):
        url = base_url
        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            # soup contains all html content as an object...
            soup = BeautifulSoup(response.text, "html.parser")

            # Find all link elements
            links = soup.find_all("a", href=True)

            # Loop through the links and check if the search word is present in the link text or URL
            found_links = []

            for idx, link in enumerate(links, start=1):
                link_text = link.get_text(strip=True)
                link_url = link['href']

                # Check if search word is in the link text or the URL
                if search_word.lower() in link_text.lower() or search_word.lower() in link_url.lower():
                    # Use urljoin to ensure the full URL is constructed
                    full_url = urljoin(base_url, link_url)
                    found_links.append(f"{idx}. Text: {link_text} - URL: {full_url}")

            return found_links
        else:
            return f"Access Denied: {response.status_code}"
