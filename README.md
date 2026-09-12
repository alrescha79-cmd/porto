# **Personal Portfolio Project**

🎨 **A modern and fully responsive portfolio website** built with the latest technologies to showcase your skills, projects, and experiences in style.

## **About the Project**

This repository contains the source code for my **Personal Portfolio Website**, built with **Astro**, **TypeScript**, and **Tailwind CSS**. The project is designed to be fast, responsive, and visually appealing, providing recruiters and visitors with a seamless experience while exploring my profile, projects, and contact information.

## **Features**

- **🌟 Modern Design**: A clean and professional layout to leave a great first impression.
- **⚡ Fast Performance**: Optimized for speed and responsiveness using Astro JS.
- **📱 Responsive Design**: Fully compatible with desktops, tablets, and mobile devices.
- **📂 Project Showcase**: Highlight your top projects with detailed descriptions, technologies used, and live/demo links.
- **📧 Contact Form**: Allows visitors to easily get in touch.
- **🌙 Dark/Light Mode**: A toggle for users to switch between dark and light themes.

## **Tech Stack**

- **Astro**: Framework for building fast, optimized web pages.
- **TypeScript**: Typed superset of JavaScript for maintainable code.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **daisyUI**: Accessible Tailwind component library.
- **Vite**: Build tool for fast development and optimized production builds.

### **Development Tools**

- JavaScript
- Astro
- TypeScript
- CSS
- ESLint

## **Getting Started**

Follow these instructions to set up the project locally:

### **Prerequisites**

- Node.js (v22 or later)
- npm or yarn
- Git
- A code editor (e.g., Visual Studio Code)

### **Installation**

1. Clone the repository to your local machine.

    ```bash
    git clone https://github.com/alrescha79-cmd/porto.git
    ```

2. Navigate to the project directory.

    ```bash
    cd porto
    ```

3. Install the dependencies.

    ```bash
    npm install
    ```

4. Start the development server.

    ```bash
    npm start
    ```

5. Open your browser and visit `http://localhost:4321` to view the website.

## **Mengelola Konten dengan Pages CMS**

Proyek ini menggunakan [Pages CMS](https://pagescms.org/) untuk mengelola data proyek melalui GitHub. Pages CMS menulis perubahan langsung ke repository, lalu Vercel akan melakukan deploy otomatis setelah commit masuk ke branch `main`.

### **URL dan Repository**

- **CMS:** [pagescms.org](https://pagescms.org/)
- **Repository:** [github.com/alrescha79-cmd/porto](https://github.com/alrescha79-cmd/porto)
- **Konfigurasi CMS:** `.pages.yml`
- **Lokasi konten proyek:** `src/content/projects`
- **Lokasi gambar proyek:** `public/projects`

### **Cara Menambah atau Mengubah Proyek**

1. Buka [Pages CMS](https://pagescms.org/) dan masuk menggunakan akun GitHub yang memiliki akses ke repository.
2. Pilih repository `alrescha79-cmd/porto`.
3. Buka koleksi **Projects**.
4. Pilih **New** untuk membuat proyek atau buka proyek yang sudah ada untuk mengeditnya.
5. Isi judul, ringkasan, tanggal, tags, link demo, link repository, cover image, dan isi proyek.
6. Klik **Save** atau **Commit** untuk menyimpan perubahan ke GitHub.
7. Tunggu Vercel menyelesaikan deploy, lalu periksa halaman proyek di website.

### **Catatan Penting**

- Field `Tags` menyediakan dropdown multi-pilihan untuk tag yang sudah tersedia: `Backend`, `FrontEnd`, `FullStack`, `Machine Learning`, `Mobile`, `New`, dan `UI UX`.
- Untuk tag baru, masukkan nilai pada field `Custom tags` sebagai daftar. Setelah commit, gabungkan nilainya ke field `tags` pada frontmatter proyek, lalu hapus `customTags` agar schema Astro tetap sesuai.
- Aktifkan `Draft` jika proyek belum ingin ditampilkan di website.
- Upload gambar melalui media library Pages CMS. File akan tersimpan di `public/projects` dan URL-nya dimulai dengan `/projects/`.
- Gunakan format Markdown pada isi proyek jika membutuhkan heading, daftar, link, atau gambar.
- Pastikan ringkasan tidak memakai baris baru mentah di dalam nilai YAML. Gunakan editor Pages CMS atau format satu paragraf agar build Astro tetap berhasil.
- Jangan mengedit file hasil CMS secara bersamaan dari Pages CMS dan lokal sebelum melakukan `git pull`.
- Jika perubahan lokal dibuat setelah CMS melakukan commit, jalankan `git pull` sebelum `git push`.

## **Lighthouse Report**

![porto](public/perform.png)

## **Project Structure**

```plaintext
porto/
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable components
│   ├── content/           # Projects and legal content collections
│   ├── layouts/           # Layout components
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   └── styles/            # Global styles
├── .gitignore             # Git ignore file
├── astro.config.mjs       # Astro configuration
├── package.json           # Project metadata and dependencies
└── tsconfig.json          # TypeScript configuration
```

## **Contributing**

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

### **Steps to Contribute**

1. Fork the repository.
2. Create your feature branch:

    ```bash
    git checkout -b feature/amazing-feature
    ```

3. Commit your changes:

    ```bash
    git commit -m 'Add some amazing feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/amazing-feature
    ```

5. Open a pull request.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## **Contact**

📧 **Email:** [anggun@cakson.my.id](mailto:anggun@cakson.my.id)  
🌐 **Website:** [cakson.my.id](https://cakson.my.id)  
🔗 **GitHub:** [github.com/alrescha79-cmd](https://github.com/alrescha79-cmd)  
💼 **LinkedIn:** [linkedin.com/in/angguncaksono](https://www.linkedin.com/in/angguncaksono)  

## Acknowledgments

- Thanks to the open-source community for their amazing tools and libraries.
- Special thanks to [Astro](https://astro.build/) and [React](https://reactjs.org/) for their incredible frameworks.
