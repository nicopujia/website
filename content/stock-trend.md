---
title: Stock trend (NASDAQ index companies)
date: 2022-08
tags: Python, Web scraping, Selenium, Kivy, mplfinance
keywords: data science
category: Applications
lang: en
status: published
thumbnail: images/projects/stock-trend/chart.jpg
github: https://github.com/nicopujia/old_projects/tree/main/2022/Stock%20trend%20(NASDAQ%20index%20companies)
---

Desktop application I made to learn dynamic web scraping with Selenium.

1. Through the GUI, which has filters to search, you choose the company you want. If you want Apple, for example, you search for "Apple" and with the filters you can already get its symbol on the NASDAQ index, which is AAPL. You should also be able to search by sector, country and market cap.

    ![Input screen]({static}/images/projects/stock-trend/input.jpg)

2. Once the company was chosen, you select the time period.

    ![Time period selection]({static}/images/projects/stock-trend/time-period.jpg)

3. After that, the program downloads the company data automatically.

    ![Web scraping]({static}/images/projects/stock-trend/scraping.jpg)

4. With the data obtained, it shows many tecnical analysis indicators using [mplfinance](https://github.com/matplotlib/mplfinance) to estimate if the price will go up or down and show the results.

    ![Analysis chart]({static}/images/projects/stock-trend/chart.jpg)
