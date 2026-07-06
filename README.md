# Uday Kumar Barman - Personal Portfolio

I am a final-year Software Engineering student and Java Full Stack Developer based in Jabalpur, currently working as a Web Development Intern at Ouranos Robotics. I specialize in building robust applications using React, Spring Boot, and MySQL. From developing healthcare platforms like MedHelp to e-commerce systems like Baskit, I am passionate about creating scalable software. I am also currently exploring agentic workflows through my ongoing enterprise AI knowledge engine project, Nexus. 

I am always eager to collaborate with batchmates on innovative projects. If you are looking to team up or have referral opportunities, feel free to explore my work and reach out!

## 🚀 Overview

This repository contains the source code for my personal portfolio website. Built as a fast, responsive Single Page Application (SPA), it serves as a central hub to showcase my technical skills, internship experiences, and full-stack project portfolio. 

## ✨ Key Features

*   **Dynamic Component Architecture:** Modular UI design including dedicated sections for Projects, Experience, Skills, and Contact.
*   **Live GitHub Integration:** Dynamically fetches and displays my latest repositories utilizing a custom `useGithubRepos` hook.
*   **Smooth UI Animations:** Implements seamless scroll reveals and element transitions via a custom `useReveal` hook.
*   **Centralized Data Management:** Portfolio content (projects, skills, links) is managed efficiently through a single `data.js` file.
*   **Multi-Platform Deployment Ready:** Pre-configured for seamless hosting with included `netlify.toml` and `vercel.json` configuration files.

## 🛠️ Tech Stack

*   **Frontend Framework:** React.js
*   **Build Tool:** Vite
*   **Styling:** Pure CSS (Component-level scoping)
*   **Package Manager:** npm

## 📂 Project Structure

```text
portfolio-app/
├── public/
│   └── favicon.svg         
├── src/
│   ├── components/          # Contains all UI components (Hero, Projects, Skills, etc.) and their CSS
│   ├── useGithubRepos.js    # Custom hook for GitHub API integration
│   ├── useReveal.js         # Custom hook for scroll animations
│   ├── data.js              # Centralized portfolio data
│   ├── App.jsx              # Main application wrapper
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styling variables
├── index.html               # Main HTML document
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite build configuration
├── netlify.toml             # Netlify deployment configuration
└── vercel.json              # Vercel deployment configuration

## ⚙️ Local Development Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/UdayBarman001/Portfolio-Page](https://github.com/UdayBarman001/Portfolio-Page)
   cd portfolio-app

Install dependencies:
Ensure you have Node.js installed, then run:

Bash
npm install
Start the development server:

Bash
npm run dev
Open your browser and navigate to the local host address provided by Vite (usually http://localhost:5173).

Build for production:

Bash
npm run build
📫 Let's Connect
If you want to discuss engineering opportunities or collaborate on a project, connect with me through the contact form on my portfolio!
