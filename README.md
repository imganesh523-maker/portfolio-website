# 🌐 Portfolio Website

My personal portfolio: a clean, responsive single-page site built with **plain HTML, CSS and JavaScript** (no frameworks, no build step).

## Features

- Sections: Hero, About, Skills, Projects, Contact
- **Dark / light mode** toggle; remembers your choice (`localStorage`) and follows your system setting by default
- **Responsive** mobile-first layout with CSS Grid and a mobile menu
- **Accessible:** semantic HTML, skip link, visible keyboard focus, ARIA labels on buttons, good colour contrast, respects "reduce motion"
- Active nav link highlight and scroll-reveal animations using `IntersectionObserver`
- Contact through `mailto:` links, so no backend is needed

## How to run locally

Just open `index.html` in a browser. Or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Host it free with GitHub Pages

1. Push this repo to GitHub as `portfolio-website`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://imganesh523-maker.github.io/portfolio-website/`.

## Project structure

```
portfolio-website/
├── index.html   # page structure and content
├── style.css    # styles, theme colours (CSS variables), responsive layout
└── script.js    # theme toggle, mobile menu, active links, scroll reveal
```

## What I learned

- Using CSS variables to switch whole colour themes with one attribute
- Mobile-first design with media queries, Flexbox and Grid
- Basic web accessibility (keyboard focus, ARIA, contrast, reduced motion)
- DOM events and `IntersectionObserver` in vanilla JavaScript

---
Made by **Ganesh Kumar** · [LinkedIn](https://www.linkedin.com/in/ganesh-kumar-924192451/) · gkdeveloper75@gmail.com
