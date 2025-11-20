Inveca LP - Landing Page
A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS.

 Quick Start
Prerequisites
Node.js 18+ installed

npm or yarn package manager

Installation & Running
Install dependencies:

bash
npm install
Start development server:

bash
npm run dev
Open your browser:

Local: http://localhost:3000

Network: http://192.168.43.18:3000

Build for Production
bash
npm run build
npm start
Project Structure
text
src/
├── app/           # Next.js app router pages
├── components/    # React components
│   ├── ui/       # Reusable UI components
│   ├── sections/ # Page sections
│   └── layout/   # Layout components
└── lib/          # Utilities
🛠️ Tech Stack
Framework: Next.js 14 with App Router

Language: TypeScript

Styling: Tailwind CSS

UI Components: Custom components with clsx + tailwind-merge

Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run start - Start production server

npm run lint - Run ESLint
