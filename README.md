# Syntax-Savant-C19

## BADGES/License🔖

---

[![MIT License](https://img.shields.io/badge/License-MIT%20License-orange)](https://opensource.org/license/mit/)

## Description 📖

---

> This is a web-based text editor that can also be installed locally for offline use. It utilizes webpack to bundle all the necessary JavaScript, CSS, and HTML files, resulting in an optimized and efficient deployed site. In addition, the editor leverages plugins to aid in bundling files and transforming ES6+ code into ES5 code that is compatible with web browsers. To save the text, the editor utilizes the idb module to store it in the indexedDB within the browser.

## Installation ⚙️

---

> With this repo, you can type npm I in the root directory to install client dev/dependencies and server dev/dependencies. After, run npm run start. text editor should be available via localhost. Otherwise, please use the heroku link referenced in this README.md

## Usage/Deployment Link 💻

---

> [Heroku Deployment](https://murmuring-headland-78036.herokuapp.com)

## Acceptance Criteria ✔️

---

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Contact me 📇

---

- [Via Email](mailto:franciaexequiel@hotmail.ca)
- [Via Github](https://github.com/Tweakiel)
