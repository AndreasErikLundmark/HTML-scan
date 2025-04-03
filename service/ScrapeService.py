import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # To handle relative URLs

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

class ScrapeService:
    def scrape_url(self, base_url, search_word):

        if not self.is_scraping_allowed(base_url):
            print(f"Scraping not allowed by {base_url}/robots.txt")
            return "Scraping is disallowed by robots.txt"

        url = base_url
        search_word = search_word.strip()
        print("base_url: " + url)
        print("search_word: " + search_word)
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": base_url,
            "Connection": "keep-alive"
        }
        response = requests.get(url, headers=headers)
#        headers = {"User-Agent": "Mozilla/5.0"}
#        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            # soup contains all html content as an object...
            soup = BeautifulSoup(response.text, "html.parser")

            links = soup.find_all("a", href=True)

            found_links = []

            for link in links:
                link_text = link.get_text(strip=True)
                link_url = link['href']

                if (link_text and search_word.lower() in link_text.lower()) or (link_url and search_word.lower() in link_url.lower()):
                    print("Match found!")

                    full_url = urljoin(base_url, link_url)

                    link_text = link_text.replace("\n", "").replace("•", "").strip()


                    found_links.append({"text": link_text, "url": full_url})

            if not found_links:
                print("No links found!")
            else:
                print("Found links:", found_links)
            return found_links
        else:
            return f"Access Denied: {response.status_code}"

    def scrapeParagraphs(self, base_url, search_word):

        if not self.is_scraping_allowed(base_url):
            print(f"Scraping not allowed by {base_url}/robots.txt")
            return "Scraping is disallowed by robots.txt"

        url = base_url
        search_word = search_word.strip()
        print("base_url: " + url)
        print("search_word: " + search_word)
        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "html.parser")
            paragraphs = soup.find_all("p")
            found_paragraphs = []

            for paragraph in paragraphs:
                paragraph_text = paragraph.get_text(strip=True)

                if search_word.lower() in paragraph_text.lower():
                    print("Match found!")
                    found_paragraphs.append(paragraph_text)

            print("Found paragraphs:", found_paragraphs) if found_paragraphs else print("No matching paragraphs found!")
            return found_paragraphs
        else:
            return f"Access Denied: {response.status_code}"

    def scrapeHeadings(self, base_url, search_word):
        url = base_url
        search_word = search_word.strip()
        print("base_url: " + url)
        print("search_word: " + search_word)

        headers = {"User-Agent": "Mozilla/5.0"}
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "html.parser")
            headings = soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"])

            found_headings = []

            for heading in headings:
                heading_text = heading.get_text(strip=True)
                if search_word.lower() in heading_text.lower():
                    print("Match found!")
                    found_headings.append(heading_text)
                    print("Found headings:", found_headings)


            print("Found headings:", found_headings) if found_headings else print("No matching headings found!")
            return found_headings
        else:
            return f"Access Denied: {response.status_code}"

    def is_scraping_allowed(self, base_url):
        robots_url = urljoin(base_url, "/robots.txt")
        try:
            response = requests.get(robots_url, timeout=5)
            if response.status_code == 200:
                robots_txt = response.text.lower()
                if "disallow: /" in robots_txt:
                    return False
                return True
        except requests.RequestException:
            pass  # If robots.txt is unreachable, assume scraping is allowed
        return True

