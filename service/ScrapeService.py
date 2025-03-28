import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # To handle relative URLs

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

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

            for link in links:
                link_text = link.get_text(strip=True)
                link_url = link['href']

                # Check if text matches search word
                if (link_text and search_word.lower() in link_text.lower()) or (link_url and search_word.lower() in link_url.lower()):
                    print("Match found!")

                    # Create the full URL
                    full_url = urljoin(base_url, link_url)

                    # Clean up the link text if necessary
                    link_text = link_text.replace("\n", "").replace("•", "").strip()

                    # Add a dictionary with text and url to the result list
                    found_links.append({"text": link_text, "url": full_url})

            if not found_links:
                print("No links found!")
            else:
                print("Found links:", found_links)
            return found_links
        else:
            return f"Access Denied: {response.status_code}"
