# Mahasarathi — Unified Mobility Platform (Website)

Mahasarathi is a neutral, interoperable mobility platform designed to connect public, semi-public, and private transportation systems across India through a shared digital layer.

This repository contains the **official static website** for Mahasarathi, intended for public information dissemination, early-access interest collection, and stakeholder engagement.

---

## About the Project

Mahasarathi is envisioned as the **UPI of mobility** — a common, open digital infrastructure that enables seamless coordination across diverse transport modes and service providers.

The platform is designed to enable:

- Integration across buses, metro, rail, shared autos, and on-demand mobility services  
- Interoperability between government systems, transport operators, and private applications  
- Data-driven planning without vendor lock-in  
- Sustainable, eco-friendly, and inclusive mobility infrastructure  

---

## Website Scope

The website focuses on:

- Communicating the Mahasarathi vision and long-term objectives  
- Describing platform offerings and technical infrastructure  
- Addressing common questions through a structured FAQ section  
- Enabling early-access requests and collaboration inquiries  

---

## Tech Stack

- **HTML5**  
- **CSS3**  
- **Vanilla JavaScript**

**Architecture Characteristics**

- No frontend frameworks  
- No backend services  
- Fully static and framework-agnostic  

---

## Project Structure

```text
.
├── index.html
├── faq.html
├── offerings.html
├── infrastructure.html
├── revenue.html
├── coverage.html
├── policy.html
├── terms.html
├── privacy.html
│
├── nav.html
├── footer.html
│
├── style.css
├── global.js
│
├── assets/
│   └── mahasarathi-logo.png
│
└── README.md
```
## Key Features

- Shared navigation and footer components loaded dynamically  
- SEO-friendly FAQ accordion structure  
- Breadcrumb navigation on internal pages  
- Early-access and contact CTAs via email compose  
- Dedicated Terms of Use and Privacy Policy pages  
- Eco-friendly blue and green design language  

---

## Deployment

This website is designed for static hosting platforms, including:

- **Netlify** (recommended)  
- Vercel  
- GitHub Pages  

### Netlify Quick Deploy

1. Visit https://www.netlify.com  
2. Drag and drop the project root folder  
3. Deployment completes automatically with HTTPS enabled  

**Important Notes**

- `index.html` must remain at the project root  
- Shared components rely on relative paths  

---

## Contact & Early Access

The **Get Early Access** and **Start a Conversation** actions open an email compose window addressed to:

hello.mahasarathi@gmail.com

This approach ensures consistent behavior across browsers and devices without requiring backend services.

---

## Privacy & Compliance

- Minimal personal data collection  
- No cookies or tracking scripts  
- Privacy Policy included  
- Terms of Use included  

The website is suitable for **government, enterprise, and regulatory review**.

---

## Future Enhancements

- Backend-powered contact forms with email confirmation  
- SEO and OpenGraph metadata enhancements  
- Privacy-friendly analytics  
- Dark mode support  
- CMS integration  
- Optional migration to Next.js  

---

## License

© Mahasarathi. All rights reserved.

This repository and its contents are **proprietary** and intended for informational and evaluation purposes only, unless explicitly stated otherwise.
