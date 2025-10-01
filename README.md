# LMS Platform – Udemy‑style Course Builder and Player

Create, publish, and learn from courses with a modern LMS built on Next.js 15, React 19, Tailwind CSS 4, Prisma, and MySQL. Includes payments (Stripe), auth (Clerk), uploads (UploadThing), and video processing/streaming (Mux).

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19-149eca?logo=react) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma) ![MySQL](https://img.shields.io/badge/MySQL-DB-005E86?logo=mysql&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe&logoColor=white) ![Clerk](https://img.shields.io/badge/Clerk-Auth-5A67D8) ![Mux](https://img.shields.io/badge/Mux-Video-FF1F2D) ![UploadThing](https://img.shields.io/badge/UploadThing-Uploads-111827)

## ✨ Features

Student experience

- Browse & filter courses by category
- Purchase courses securely via Stripe Checkout
- Track progress (chapter completion + overall course progress)
- HLS video playback powered by Mux

Teacher experience

- Dedicated teacher dashboard and “teacher mode”
- Create and manage courses and chapters
- Drag‑and‑drop chapter reordering
- Upload thumbnails, attachments, and videos (UploadThing)
- Rich text editor for chapter descriptions
- Publish/unpublish workflows

Platform

- Authentication and user management with Clerk
- MySQL + Prisma ORM
- Modern UI (Radix UI + Tailwind CSS), dark‑mode ready

## 🧱 Tech Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS 4
- Prisma ORM + MySQL
- Stripe (Checkout + Webhooks)
- Clerk (Auth)
- UploadThing (file uploads)
- Mux (video ingest + HLS streaming)
- Shadcn/Radix UI components, Zustand, Zod, React Hook Form
