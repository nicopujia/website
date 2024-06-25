# General
RELATIVE_URLS = True
SITENAME = AUTHOR = 'Nicolás Pujía'
PATH = 'content'
STATIC_PATHS = [
    'images',
    'favicon.ico',
    'app-ads.txt',
]

# Time and date
TIMEZONE = 'America/Argentina/Buenos_Aires'

# Templates
DIRECT_TEMPLATES = ['index', 'categories', 'tags']

# Feed
AUTHOR_FEED_ATOM = AUTHOR_FEED_RSS = CATEGORY_FEED_ATOM = FEED_ALL_ATOM = TRANSLATION_FEED_ATOM = None

# Pagination
DEFAULT_PAGINATION = 10

# URL
AUTHOR_SAVE_AS = AUTHORS_SAVE_AS = ''
PAGE_SAVE_AS = PAGE_URL = '{slug}.html'
PAGE_LANG_SAVE_AS = PAGE_LANG_URL = '{lang}/' + PAGE_SAVE_AS
INDEX_SAVE_AS = 'entries.html'
TAG_SAVE_AS = TAG_URL = 'tags/{slug}.html'
CATEGORY_SAVE_AS = CATEGORY_URL = '{slug}.html'
ARTICLE_SAVE_AS = ARTICLE_URL = '{category}/{slug}.html'
ARTICLE_LANG_SAVE_AS = ARTICLE_LANG_URL = '{lang}/' + ARTICLE_SAVE_AS

# Theme
THEME = 'src'
CSS_FILE = 'output.css'
SOCIAL = (
    ('GitHub', 'https://github.com/nicopujia'),
    ('Instagram', 'https://www.instagram.com/nico_pujia/'),
    ('Twitter', 'https://x.com/nico_pujia'),
    ('YouTube', 'https://www.youtube.com/@nicopujia'),
    ('Reddit', 'https://www.reddit.com/user/nico_pujia/'),
)
