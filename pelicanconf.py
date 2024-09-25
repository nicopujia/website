# General
RELATIVE_URLS = True
SITENAME = AUTHOR = "Nicolás Pujia"
SITEURL = "http://127.0.0.1:8000"
DEFAULT_CATEGORY = "Other"
PATH = "content"
STATIC_PATHS = ["images", "extra"]
OUTPUT_PATH = "dist/"
SUMMARY_MAX_LENGTH = 30

# Time and date
DEFAULT_DATE_FORMAT = "%B %Y"
TIMEZONE = "America/Argentina/Buenos_Aires"
LOCALE = "en_US"

# Template pages
DIRECT_TEMPLATES = ["index", "categories", "tags"]

# Metadata
EXTRA_PATH_METADATA = {
    "extra/favicon.ico": {"path": "favicon.ico"},
    "extra/app-ads.txt": {"path": "app-ads.txt"},
}

# Feed
AUTHOR_FEED_ATOM = AUTHOR_FEED_RSS = CATEGORY_FEED_ATOM = FEED_ALL_ATOM = (
    TRANSLATION_FEED_ATOM
) = None

# Pagination
DEFAULT_PAGINATION = 12

# URL
AUTHOR_SAVE_AS = AUTHORS_SAVE_AS = ""
PAGE_SAVE_AS = PAGE_URL = "{slug}.html"
PAGE_LANG_SAVE_AS = PAGE_LANG_URL = "{lang}/" + PAGE_SAVE_AS
INDEX_SAVE_AS = "portfolio.html"
TAG_SAVE_AS = TAG_URL = "tags/{slug}.html"
CATEGORY_SAVE_AS = CATEGORY_URL = "{slug}.html"
ARTICLE_SAVE_AS = ARTICLE_URL = "{category}/{slug}.html"
ARTICLE_LANG_SAVE_AS = ARTICLE_LANG_URL = "{lang}/" + ARTICLE_SAVE_AS

# Theme
THEME = "src"
CSS_FILE = "output.css"
SOCIAL = (
    ("GitHub", "https://github.com/nicopujia"),
    ("YouTube", "https://www.youtube.com/@nico_pujia"),
    ("Twitter", "https://x.com/nico_pujia"),
    ("Reddit", "https://www.reddit.com/user/nico_pujia/"),
    ("Instagram", "https://www.instagram.com/nico_pujia/"),
)
