# LMS (Learning Management System) Platform

Project web aplikasi LMS modern yang dibangun dengan teknologi web terbaru, menyediakan dashboard interaktif untuk berbagai role pengguna (Super Admin, Admin PSP, Mentor, Co-Mentor, Karyawan, dan Onboarding).

## 🛠️ Tech Stack

Project ini dibangun menggunakan teknologi-teknologi bleeding-edge berikut:

-   **Framework:** [Next.js 16](https://nextjs.org/) (App Router) - Framework React paling modern.
-   **Core:** [React 19](https://react.dev/) - Library UI versi terbaru.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript untuk kode yang lebih aman.
-   **Styling:**
    -   [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework (Versi terbaru dengan engine baru).
    -   `tailwind-merge` & `clsx` - Utilitas untuk manajemen class CSS yang dinamis.
    -   `class-variance-authority` (CVA) - Membuat varian komponen UI dengan terstruktur.
-   **Icons:** [Lucide React](https://lucide.dev/) - Koleksi ikon SVG yang bersih dan konsisten.
-   **UI Components:** Built on top of [Radix UI](https://www.radix-ui.com/) primitives (Headless UI).
-   **Animations:** `tw-animate-css` (Tailwind Animate) untuk transisi dan animasi halus.

## 🚀 Panduan Instalasi (Step-by-Step)

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstall:
-   [Node.js](https://nodejs.org/) (Versi 18.17 atau lebih baru direkomendasikan)
-   Package manager: `npm` (bawaan Node.js), `yarn`, `pnpm`, atau `bun`.

### 2. Clone Repository
Jika Anda belum mengunduh project ini, clone dari repository (atau ekstrak file zip jika offline):

```bash
git clone https://github.com/username-anda/lms-project.git
cd lms-project
```

### 3. Install Dependencies
Install semua library yang dibutuhkan menggunakan terminal:

```bash
npm install
```
*Atau jika menggunakan package manager lain:* `yarn` / `pnpm install` / `bun install`

### 4. Jalankan Development Server
Mulai server lokal untuk melihat website:

```bash
npm run dev
```

### 5. Buka di Browser
Setelah command di run dan muncul tulisan "Ready in ...", buka browser Anda (Chrome/Edge/Firefox) dan akses alamat:

[http://localhost:3000](http://localhost:3000)

## 📂 Struktur Project

-   **`/app`**: Folder utama untuk routing Next.js (App Router).
    -   **`dashboard-super-admin`**: Halaman khusus Super Admin.
    -   **`dashboard-admin`**: Halaman untuk Admin PSP.
    -   **`dashboard-mentor`**: Halaman untuk Mentor.
    -   **`dashboard-karyawan`**: Halaman untuk Karyawan/User biasa.
-   **`/components`**: Komponen UI yang dapat digunakan kembali (Button, Card, Input, dll).
-   **`/lib`**: Utility functions dan helper.
-   **`/public`**: Aset statis seperti gambar dan font.

## ✨ Fitur Utama (Saat Ini)

-   **Role-Based Access**: Dashboard yang disesuaikan untuk setiap role user.
-   **Role Switcher**: Fitur simulasi untuk berpindah role dengan cepat (untuk development/demo).
-   **Modern UI/UX**: Desain clean, responsif, dan menggunakan animasi halus.
-   **User Management**: Antarmuka untuk mengelola user dan role (Super Admin).