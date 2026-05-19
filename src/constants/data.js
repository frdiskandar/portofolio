export const myProjects = [
  {
    id: 2,
    title: "AI Expense Tracker",
    description:
      "A modern web application for tracking and analyzing personal expenses with the help of artificial intelligence (AI).",
    subDescription: [
      "Developed a full-stack web application using Next.js App Router and TypeScript.",
      "Implemented a secure authentication system with Clerk integration.",
      "Used Prisma ORM to manage expense data and transaction history.",
      "Provided intelligent financial insights and automatic categorization with Google Gemini API integration.",
      "Designed a modern, responsive, and intuitive user interface using Tailwind CSS and Chart.js for data visualization.",
    ],
    href: "https://github.com/frdiskndr/ai-expanse-tracker-nextJs.git",
    logo: "/assets/logos/nextjs.svg",
    image: "/assets/projects/aiexpenses.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "Prisma",
        path: "/assets/logos/prisma.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Clerk",
        path: "/assets/logos/clerk.svg",
      },
      {
        id: 6,
        name: "openRouter",
        path: "/assets/logos/openrouter.svg",
      },
    ],
  },
  {
    id: 1,
    title: "Go Pocket - RESTful API E-Wallet",
    description:
      "Aplikasi e-wallet sederhana dengan RESTful API untuk mengelola transaksi keuangan seperti top-up dan transfer dana.",
    subDescription: [
      "Mengembangkan backend RESTful API menggunakan Go dengan framework Fiber untuk performa yang cepat dan efisien.",
      "Mengimplementasikan sistem otentikasi aman menggunakan JWT (JSON Web Tokens) untuk pendaftaran dan login pengguna.",
      "Menggunakan GORM dan database SQLite untuk manajemen data pengguna, dompet, dan riwayat transaksi.",
      "Membangun antarmuka pengguna (frontend) yang modern dan responsif dengan React, Vite, dan styling menggunakan TailwindCSS.",
      "Menyediakan fitur-fitur inti e-wallet seperti top-up saldo, transfer antar pengguna, dan melihat riwayat transaksi.",
    ],
    href: "https://github.com/frdiskndr/Go-Pocket-RestFullApi",
    logo: "/assets/logos/go.svg",
    image: "/assets/logos/golang.svg",
    tags: [
      {
        id: 1,
        name: "Go",
        path: "/assets/logos/go.svg",
      },
      {
        id: 2,
        name: "Fiber",
        path: "/assets/logos/fiber.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 5,
        name: "Vite",
        path: "/assets/logos/vite.svg",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Aplikasi web replika Netflix sederhana dengan fitur streaming video dan 'nonton bareng' (watch party) secara real-time.",
    subDescription: [
      "Membangun backend menggunakan Node.js dan framework Express.js untuk mengelola rute API dan logika server.",
      "Mengimplementasikan fungsionalitas streaming video dinamis untuk memutar konten film.",
      "Menciptakan fitur 'nonton bareng' (watch party) real-time menggunakan Socket.io untuk sinkronisasi video antar pengguna.",
      "Menggunakan EJS (Embedded JavaScript) sebagai view engine untuk rendering halaman dinamis pada server.",
      "Mengelola data pengguna dan room 'nonton bareng' dengan database MySQL.",
    ],
    href: "https://github.com/frdiskndr/netflix-clone",
    logo: "/assets/logos/nodejs.svg",
    image: "/assets/projects/iflix.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "EJS",
        path: "/assets/logos/ejs.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 5,
        name: "Socket.io",
        path: "/assets/logos/socketio.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Shopee Clone",
    description:
      "Replika platform e-commerce Shopee yang menampilkan halaman beranda dinamis dan detail produk, dengan fokus pada pengalaman pengguna yang bersih dan responsif.",
    subDescription: [
      "Membangun aplikasi web menggunakan Next.js App Router dan React untuk struktur yang modern dan efisien.",
      "Menerapkan desain antarmuka pengguna (UI) yang responsif dengan Tailwind CSS, memastikan tampilan yang optimal di berbagai perangkat.",
      "Mengembangkan komponen modular seperti kartu produk, kategori, dan flash sale untuk reusabilitas dan skalabilitas.",
      "Mengintegrasikan fitur navigasi dan pencarian, serta menampilkan data produk dinamis untuk pengalaman berbelanja yang realistis.",
    ],
    href: "https://shopee-clone-kappa-five.vercel.app/",
    logo: "/assets/logos/nextjs.svg",
    image: "/assets/projects/shopee-clone.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "MUI",
        path: "/assets/logos/mui.svg",
      },
    ],
  },
  {
    id: 5,
    title: "LDS Mover Website",
    description:
      "Aplikasi website statis yang dirancang untuk perusahaan jasa pindahan profesional, menampilkan layanan, armada, dan portofolio perusahaan.",
    subDescription: [
      "Mengembangkan website yang cepat dan efisien menggunakan Next.js App Router dan JavaScript.",
      "Merancang antarmuka pengguna yang modern dan responsif dengan Tailwind CSS untuk pengalaman yang optimal di berbagai perangkat.",
      "Menampilkan berbagai layanan pindahan, seperti domestik, internasional, dan pemindahan kantor.",
      "Menyediakan informasi detail tentang armada truk yang tersedia (bak, box, dan cooler) untuk memenuhi kebutuhan pelanggan yang beragam.",
      "Menambahkan fitur-fitur seperti testimoni klien, portofolio proyek, dan profil perusahaan untuk membangun kredibilitas.",
    ],
    href: "https://lds-mover-website.vercel.app/",
    logo: "/assets/logos/nextjs.svg",
    image: "/assets/projects/lds-mover-website.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6281383156812",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/faridiskandar26",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/faridiskndr.dev/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Email",
    href: "mailto:fariditb159@gmail.com",
    icon: "/assets/socials/mail.png",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer Intern",
    job: "PT. Edukaarir Global Nusantara",
    date: "July 2025 – Present",
    contents: [
      "Designed and developed core modules for internal Human Resource Management (HRM) and Learning Management System (LMS), improving workflow efficiency and employee learning engagement.",
      "Optimized system architecture and implemented clean code practices to ensure scalability, maintainability, and long-term sustainability of the applications.",
      "Actively collaborated in agile sprints, contributing to sprint planning, daily stand-ups, and retrospective sessions to achieve feature delivery on time.",
      "Participated in cross-functional collaboration with UI/UX designers and QA engineers to ensure high-quality product releases.",
      "Applied modern development tools (Docker, Git, CI/CD pipelines) to improve deployment efficiency and reduce system downtime.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
