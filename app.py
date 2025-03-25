#https://www.crummy.com/software/BeautifulSoup/bs4/doc/

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # To handle relative URLs

def scrape_url(base_url, search_word):
    url = base_url
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        #soup contains all html content as an object...
        soup = BeautifulSoup(response.text, "html.parser")

        # Find all anchor tags (links)
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

        if found_links:
            print(f"\nLinks containing the word '{search_word}':\n")
            for link in found_links:
                print(link)
        else:
            print(f"No links found containing the word '{search_word}'")
    else:
        print("Access Denied:", response.status_code)

if __name__ == "__main__":
    base_url = input("Enter the base url: ")
    search_word = input("Enter a word to search for in links: ")
    scrape_url(base_url, search_word)
