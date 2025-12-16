# My Personal React Portfolio

A modern, dark-themed portfolio built with React. It showcases featured projects, a services/tech stack, and contact details. Navigation uses page-based routing with subtle enter animations and a clean, consistent style.

## Overview
- Pages: Home, About, Services, Portfolio, Contact
- Theme: Global dark theme with a green accent for links and highlights
- Navigation: Persistent Navbar/Footer, page-based via React Router
- Animations: Gentle fade-in on page enter with optional child stagger
- Portfolio: Three featured cards using a single image asset for simplicity

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run
```bash
git clone https://github.com/JOSHUA-A69/My-Personal-Portfolio-
cd react-portfolio
npm install
npm start
```
The app starts at http://localhost:3000.

### Production Build
```bash
npm run build
```

## Project Structure
```
src/
  components/
    About.jsx
    Contact.jsx
    Home.jsx
    Navbar.jsx
    Portfolio.jsx
    Services.jsx
    *.css
  pages/
    AboutPage.jsx
    ContactPage.jsx
    HomePage.jsx
    PortfolioPage.jsx
    ServicesPage.jsx
  img/
    Undead Siege .png   (single image used by portfolio)
  App.jsx
  index.js
  style.css             (layout utils + animations)
```

## Key Features
- Dark theme with CSS variables for colors
- Clean header/footer, uppercase nav labels, active underline
- Page-enter animations: `animate-fade-in-up` and `animate-stagger`
- Portfolio cards sized consistently; image covers while keeping aspect

## Customization
- Update colors in `src/index.css` (CSS variables)
- Tweak animations in `src/style.css` (`@keyframes fade-in-up`)
- Edit featured projects in `src/components/Portfolio.jsx`

## Contact
- Email: ujoshua368@gmail.com
- GitHub: https://github.com/JOSHUA-A69

---

Thanks for visiting and reviewing the portfolio!
