import 
from bs4 import BeautifulSoup

# Step 1: Target URL
url = "https://www.tce.edu/staff_profile/faculty/BEECE/ymece.html"

# Step 2: Fetch the webpage
response = requests.get(url)
response.raise_for_status()  # will stop if request fails
html = response.text

# Step 3: Parse HTML
soup = BeautifulSoup(html, "html.parser")

# Step 4: Find the main content (faculty profile sections)
content = soup.find("div", {"class": "faculty_profile"}) or soup

# Step 5: Extract sections by keywords in headings
sections = {}
for header in content.find_all(["h2", "h3", "h4"]):
    title = header.get_text(strip=True)
    section_div = header.find_next_sibling()
    if section_div:
        sections[title] = section_div

# Step 6: Print fragments
for title, div in sections.items():
    print("=" * 80)
    print(f"SECTION: {title}")
    print("=" * 80)
    print(div.get_text(separator="\n", strip=True))
    print("\n")

# Step 7: Optionally save each section to separate files
for title, div in sections.items():
    safe_title = "_".join(title.split()).lower()
    with open(f"{safe_title}.html", "w", encoding="utf-8") as f:
        f.write(str(div))
