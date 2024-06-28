# Nicolás Pujía's personal website

This repository contains the source code for my personal website. It's built using **[Pelican](https://getpelican.com/)** and **[Tailwind](https://tailwindcss.com/)**. If everything is working correctly, you can find the live site at the URL provided in the repository settings.

## Installation

### 1. Set up the environment

```bash
# Project (requires Git):
git clone https://github.com/nicopujia/persona_website.git
cd personal_website

# Python requirements (requires Python >= 3.8.1):
python -m venv env
source env/bin/activate # For Linux / MacOS
.\env\Scripts\activate # For Windows
python -m pip install -r requirements.txt

# Tailwind (requires Node.js):
npm install tailwind
```

### 2. Run the development commands

In different terminals, run:

- `npm run dev`
- `python -m pelican -lr`

You should now be able to see the website running at <http://127.0.0.1:8000>, and your changes should automatically be updated after pressing F5.

## Deployment

You can easily deploy the website (for free) using the static website hosting provider of your choice (e.g. GitHub Pages, Netlify, etc).

- Build command: `npm run build && pelican -s publishconf.py`
- Build output directory: `dist`

For more details about Pelican deployment, see [here](https://docs.getpelican.com/en/stable/publish.html#deployment).

**Note**: remember to modify the config files (`pelicanconf.py` & `publishconf.py`) to match your own needs.

## License

This repository is licensed under the [MIT license](LICENSE). While it's not required, I would really appreciate it if you give me credit if you use this code for your own project and if you let me know that you are using it.
