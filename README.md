# Nicolás Pujía's personal website

This repository contains the source code for my personal website. It's built using **Django** and **TailwindCSS**. If everything is working correctly, you can find the live site at the URL provided in the repository settings.

## Requirements

- Git
- Python 3.12

## Installation

Follow these steps to set up the website on your local machine:

### Clone the Repository

```bash
git clone https://github.com/nicopujia/website.git
cd website
```

### Set Up the Virtual Environment

```bash
python3.12 -m venv env
source env/bin/activate # For Linux / MacOS
.\env\Scripts\activate # For Windows
```

### Install Dependencies

```bash
pip install -r requirements.txt
django-admin compilemessages
python manage.py migrate
python manage.py tailwind start
```

### Run the Development Server

Open another terminal and run:

```bash
python manage.py runserver
```

You should now be able to see the website running at [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Deployment

For deployment instructions, please refer to the official Django documentation [deployment guide](https://docs.djangoproject.com/en/5.0/howto/deployment/).

## License

This repository is licensed under the [MIT license](LICENSE). While it's not required, I would really appreciate it if you give me credit if you use this code for your own project and if you let me know that you are using it.
