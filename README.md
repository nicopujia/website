# Website

This repository contains the source code for my personal website. It's built using **[Pelican](https://getpelican.com/)**. If everything is working correctly, you should be able to find it live at <https://nicolaspujia.com>.

## Getting Started

### Development

```bash
# Clone the repo
git clone https://github.com/nicopujia/personal-website.git
cd personal-website

# Install dependencies
uv venv
source env/bin/activate
uv pip install -r requirements.txt

# Run the development server
pelican -lr
```

You should now be able to see the website running at <http://127.0.0.1:8000>, and your changes should automatically be updated after reloading the page.

### Deployment

You can easily deploy the website (for free) using the static website hosting provider of your choice (e.g. GitHub Pages, Cloudflare Pages, etc).

- Build command: `pelican -s publishconf.py`
- Build output directory: `output`

For more details about Pelican deployment, see [here](https://docs.getpelican.com/en/stable/publish.html#deployment).

## License

This repository is licensed under the [MIT license](LICENSE). While it's not required, I would really appreciate it if you give me credit if you use this code for your own project and if you let me know that you are using it.
