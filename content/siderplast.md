---
title: Siderplast
date: 2024-03
modified: 2024-11
tags: Python, Django, SQL, MySQL, Docker, Nginx, HTML, CSS, Bootstrap, Javascript, Linux, MercadoPago API
category: Websites
lang: en
status: published
thumbnail: images/projects/siderplast/icon.webp
website: https://siderplast.com.ar
---

The official website of Siderplast S.A., including both the online store for the customers and the [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning), *completely made by myself*.

This is the first project that I've made for a third party, and so it's fully covered with **automated tests**. You know, this cannot fail in production. It's a *serious project*.

![Index]({static}/images/projects/siderplast/index.png)
![About]({static}/images/projects/siderplast/about.png)
![Contact]({static}/images/projects/siderplast/contact.png)
![Article list]({static}/images/projects/siderplast/article-list.png)
![Article detail]({static}/images/projects/siderplast/article-detail.png)
![Cart]({static}/images/projects/siderplast/cart.png)
![Checkout]({static}/images/projects/siderplast/checkout.png)

*<p align="center">Online store (scroll horizontally to see more screenshots)</p>*

![Admin panel]({static}/images/projects/siderplast/admin-panel.png)

*<p align="center">Admin panel</p>*

The ERP is splitted into several modules (there will be more in the future as it's still in progress):

## Store

This is the main module. It contains all the logic for articles, orders, price adjustments, categories, customers, messages, invoices, budgets, shopping cart, and more.

![Articles change list]({static}/images/projects/siderplast/article-changelist.png)

## Wave

An independent module to dynamically create tables with custom columns, made in replacement of the well-known [Monday.com](https://monday.com)

![Wave being used by the company]({static}/images/projects/siderplast/wave.png)
![Column creation of custom data type and name]({static}/images/projects/siderplast/wave-columns.png)

*<p align="center">Wave, where data flows</p>*

## System

A secondary module for backups, logs, configuration and system information.

![System information and configuration]({static}/images/projects/siderplast/config-info.png)
