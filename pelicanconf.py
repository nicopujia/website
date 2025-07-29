AUTHOR = SITENAME = "Nicolás Pujia"
AUTHOR_FEED_ATOM = AUTHOR_FEED_RSS = CATEGORY_FEED_ATOM = FEED_ALL_ATOM = (
    TRANSLATION_FEED_ATOM
) = None
CSS_FILE = "style.css"
DEFAULT_CATEGORY = "Other stuff"
DEFAULT_DATE_FORMAT = "%B %Y"
DELETE_OUTPUT_DIRECTORY = True
DIRECT_TEMPLATES = ["index", "categories", "tags"]
EXTRA_PATH_METADATA = {
    "extra/favicon.ico": {"path": "favicon.ico"},
    "extra/app-ads.txt": {"path": "app-ads.txt"},
}
LINKS = (
    ("Go to top", "#"),
    ("Email", "mailto:contact@nicolaspujia.com"),
    ("Tags", "/tags"),
)
PATH = "content"
PLUGINS = ["sitemap"]
SEPARATOR_SYMBOL = "·"
SLUGIFY_SOURCE = "basename"
SOCIAL = (
    ("GitHub", "https://github.com/nicopujia"),
    ("X", "https://x.com/nicopujia"),
    ("LinkedIn", "https://www.linkedin.com/in/nicopujia/"),
    ("YouTube", "https://www.youtube.com/@nicopujia"),
    ("Instagram", "https://www.instagram.com/nico_pujia"),
    ("Reddit", "https://www.reddit.com/user/nico_pujia"),
)
SITEURL = "http://127.0.0.1:8000"
SITESUBTITLE = "Programmer and student from Argentina."
STATIC_PATHS = ["images", "extra"]
THEME = "src"
TIMEZONE = "America/Argentina/Buenos_Aires"

# URLs
AUTHOR_URL = AUTHOR_SAVE_AS = ""
CATEGORY_SAVE_AS = CATEGORY_URL = PAGE_SAVE_AS = PAGE_URL = "{slug}.html"
