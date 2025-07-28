---
title: Siderplast S.A.
date: 2024-03
modified: 2024-11
tags: Python, Django, SQL, MySQL, Docker, Nginx, HTML, CSS, Bootstrap, JavaScript, Linux, MercadoPago SDK, unittest, Coverage.py
category: Apps
summary: The official website of the Siderplast S.A. company, including both the **e‑commerce** and the **ERP**, *completely made by myself*.
thumbnail: images/projects/siderplast/icon.webp
website: https://siderplast.com.ar
---

The official website of the Siderplast S.A. company, including both the **e‑commerce** and the **ERP**, _completely made by myself_.

![Index]({static}/images/projects/siderplast/index.png)
![About]({static}/images/projects/siderplast/about.png)
![Contact]({static}/images/projects/siderplast/contact.png)
![Article list]({static}/images/projects/siderplast/article-list.png)
![Article detail]({static}/images/projects/siderplast/article-detail.png)
![Cart]({static}/images/projects/siderplast/cart.png)

_<p align="center">Online store / e‑commerce website</p>_

This is the first project that I've made for a third party, and because it cannot fail in production, it's fully covered with **automated tests**.

![Checkout]({static}/images/projects/siderplast/checkout.png)

_<p align="center">Real money payments via bank transfer, [Mercado Pago](https://www.mercadopago.com.ar/), or cash</p>_

Besides all the technologies that appear above, during the development of this project I have learned plenty of significant skills, such as **handling large projects**, **matching clients needs**, and designing a **UI & UX** targeted to real customers and admins.

![Admin panel]({static}/images/projects/siderplast/admin-panel.png)

_<p align="center">Admin panel</p>_

The ERP is splitted into several modules (there will be more in the future as it's still in progress):

### Store

This is the main module, which contains the logic for most operations. Therefore, it is further divided into different sections:

#### Inventory

![Articles change list]({static}/images/projects/siderplast/article-changelist.png)

It contains the articles and its related models needed to work. Some worth-mentioning features are:

-   There are price adjustments to perform massive discounts or recharges to the prices, without the need of manually updating each of them.

-   This was made for an Argentinian company, but they buy some articles in US dollars, so the program obtains the convertion value from either cache or an API and then calculates the final value in Argentina's currency.

-   Bas ed on the final sale price and the suggested price, the article detail page may show a message saying that it's in discount by X percent.

-   Stock of articles is handled automatically based on delivered orders (see below for further details on this feature).

#### Sales

It has orders, messages, banners, and budgets functionalities. As a cool feature, here's an example of an automatically-generated invoice:

![Example invoice]({static}/images/projects/siderplast/invoice.jpg)

#### People

This section groups all the models related to people, i.e., clients and suppliers, and in the UI it's showed up together with Django's User and Group models.

Clients may have exclusive discounts which are then applied to the prices when they buy through the website or ask for a budget.

#### Common logic

It wouldn't be a single app if these sections didn't shared features. For that, I created custom `ModelAdmin` mixins, abstract models, and other kinds of utilities to refactor my code and make it more scalable.

For example, and I'll get a bit more technical now, instead of writing a `display` method for every relation field (e.g. `ForeignKeyField`) to convert them into a link to the related object, I created a mixin that once applied to the `ModelAdmin` it detects all those types of fields and displays them as links. And because there were other types of fields that I wanted to render in a common way (like `ImageField`s as `img` tags, `TextField`s shortened to a maximum of words, etc.), I abstracted away the shared logic of all these mixins into a base mixin, resulting in my `ModelAdmin`s and mixins written in _much more_ cleaner way.

Like the example above I have a bunch more, but if I get into the details of every elegant part of the code this entry would become infinite, so let's continue with the next module.

### Wave

![Wave being used by the company]({static}/images/projects/siderplast/wave.png)

_<p align="center">Wave, where data flows</p>_

An independent module to dynamically create tables with custom columns, made in replacement of the well-known [Monday.com](https://monday.com) to reduce the company's costs.

![Column creation of custom data type and name]({static}/images/projects/siderplast/wave-columns.png)

### System

![System information and configuration]({static}/images/projects/siderplast/config-info.png)

A secondary module for backups, logs, configuration and system information.
