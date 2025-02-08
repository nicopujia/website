---
title: Job offers scraper
date: 2023-12
tags: Python, Selenium
category: Web scrapers
lang: en
status: hidden
thumbnail: images/projects/job-search.jpg
github: https://github.com/nicopujia/jobs_scraper
---

A web scraper to automatically find the amount of job offers of all the specified jobs at once and save the data in a CSV file. Useful to know the demand of a variety of jobs.

Here is an example output:

```text
Enter the location (default: "United States"): Argentina
Enter the job titles (comma-separated) (default: "Frontend Developer,Backend Developer,Game Developer"):
Loading driver, please wait...
In Argentina, December 2023 there are...
- 112 job offers for "Frontend Developer"
- 177 job offers for "Backend Developer"
- 36 job offers for "Game Developer"
Data saved at "D:/Proyectos de Nico/Web/jobs_scraper/Jobs offers in Argentina, 28-12-2023Y 15-42.csv"
Quitting...
```

And this is the saved CSV file:

| Job Title          | Offers Amount |
| ------------------ | ------------- |
| Frontend Developer | 112           |
| Backend Developer  | 177           |
| Game Developer     | 36            |
