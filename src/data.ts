import type { ImageMetadata } from "astro"

const certImages = import.meta.glob<{ default: ImageMetadata }>("./assets/certificates/*", { eager: true })
const certMap: Record<string, ImageMetadata> = {}
for (const [path, mod] of Object.entries(certImages)) {
  const fileName = path.split("/").pop()!
  certMap[fileName] = mod.default
}

const cert = (file: string): ImageMetadata => certMap[file]

interface SkillItem {
  name: string
  image: string
  alt: string
}

interface SkillCard {
  title: string
  items: SkillItem[]
}

interface Certificate {
  name: string
  provider: string
  image: ImageMetadata
  date: string
  link?: string
  pinned?: boolean
}

export function sortedCertificates(list: Certificate[] = certificateData): Certificate[] {
  return [...list].sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export const cardData: SkillCard[] = [
    {
        title: "Programming Language",
        items: [
            { name: "JavaScript", image: "skills/javascript.svg", alt: "JavaScript logo" },
            { name: "TypeScript", image: "skills/typescript.svg", alt: "typeScript logo" },
            { name: "Kotlin", image: "skills/kotlin.svg", alt: "kotlin logo" },
            { name: "PHP", image: "skills/php.svg", alt: "PHP logo" },
            { name: "HTML", image: "skills/html.svg", alt: "HTML logo" },
            { name: "CSS", image: "skills/css.svg", alt: "CSS logo" },
        ]
    },
    {
        title: "Framework | Library",
        items: [
            { name: "Express", image: "skills/express.svg", alt: "Express logo" },
            { name: "Next JS", image: "skills/next.svg", alt: "Next logo" },
            { name: "Vite JS", image: "skills/vite.svg", alt: "Vite logo" },
            { name: "Astro", image: "skills/astro.svg", alt: "Astro logo" },
            { name: "Tailwind CSS", image: "skills/tailwind.svg", alt: "Tailwind logo" },
            { name: "Bootstrap", image: "skills/bootstrap.svg", alt: "Bootstrap logo" },
        ]
    },
    {
        title: "Machine Learning",
        items: [
            { name: "Python", image: "skills/python.svg", alt: "Python logo" },
            { name: "Jupyter", image: "skills/j-note.svg", alt: "Jupyter logo" },
            { name: "TensorFlow", image: "skills/tensorflow.svg", alt: "TensorFlow logo" },
            { name: "Scikit-learn", image: "skills/sklearn.svg", alt: "Scikit-learn logo" },
            { name: "Pandas", image: "skills/pandas.svg", alt: "Pandas logo" },
            { name: "Numpy", image: "skills/numpy.svg", alt: "Numpy logo" },
        ]
    },
    {
        title: "Cloud & DevOps",
        items: [
            { name: "Google Cloud Platform", image: "skills/gcp.svg", alt: "GCP logo" },
            { name: "Alibaba Cloud", image: "skills/alibaba.svg", alt: "ALIBABA logo" },
            { name: "Amazon Web Services", image: "skills/aws.svg", alt: "AWS logo" },
            { name: "Docker", image: "skills/docker.svg", alt: "Docker logo" },
            { name: "Kubernetes", image: "skills/kubernetes.svg", alt: "Kubernetes logo" },
            { name: "GitHub Actions", image: "skills/github.svg", alt: "GitHub Actions logo" },
        ]
    },
    {
        title: "Mobile Development",
        items: [
            { name: "React Native", image: "skills/react.svg", alt: "React Native logo" },
            { name: "Kotlin Multiplatform", image: "skills/kotlin.svg", alt: "Kotlin logo" },
        ]
    },
    {
        title: "Design | UI/UX",
        items: [
            { name: "Figma", image: "skills/figma.svg", alt: "Figma logo" },
            { name: "Lunacy", image: "skills/lunacy.svg", alt: "Lunacy logo" },
            { name: "Adobe XD", image: "skills/xd.svg", alt: "Adobe XD logo" },
        ]
    },
    {
        title: "Database | Storage",
        items: [
            { name: "Firebase", image: "skills/firebase.svg", alt: "Firebase logo" },
            { name: "MongoDB", image: "skills/mongo.svg", alt: "MongoDB logo" },
            { name: "Supabase", image: "skills/supabase.svg", alt: "Supabase logo" },
            { name: "MySQL", image: "skills/mysql.svg", alt: "MySQL logo" },
        ]
    },
]

export const certificateData: Certificate[] = [
    {
        name: "Google Cybersecurity",
        provider: "Coursera",
        image: cert("Coursera7.png"),
        date: "2024-08-03",
        link: "https://coursera.org/verify/professional-cert/M1GA8S0DBG01",
        pinned: true,
    },
    {
        name: "Alibaba Cloud Certified Developers",
        provider: "Alibaba Cloud",
        image: cert("alibaba.png"),
        date: "2024-07-29",
        link: "https://alicloud-common.oss-ap-southeast-1.aliyuncs.com/2023/Developers/Certified-Developer.jpg",
        pinned: true,
    },
    {
        name: "Graduated from Bangkit 2024, a Google-led program in collaboration with GoTo, Tokopedia, and Traveloka in Cloud Computing learning path",
        provider: "Bangkit Academy",
        image: cert("bangkit.png"),
        date: "2024-07-10",
        link: "https://drive.google.com/file/d/1rcbeNV4USyhwUZv9C1S8dzOQytxonw8e/view",
        pinned: true,
    },
    {
        name: "Google Cloud Architect",
        provider: "Dicoding",
        image: cert("dicoding12.png"),
        date: "2024-11-15",
        link: "https://www.dicoding.com/certificates/NVP743Y0OPR0",
        pinned: true,
    },
    {
        name: "Google IT Support",
        provider: "Coursera",
        image: cert("it_support.png"),
        date: "2024-03-12",
        link: "https://coursera.org/verify/professional-cert/ZJ2CZ5UY3P77",
        pinned: true,
    },
    {
        name: "Studi Independen Bersetifikat Angkatan 6",
        provider: "MSIB",
        image: cert("msib.png"),
        date: "2024-06-30",
        link: "https://kampusmerdeka.kemdikbud.go.id/cert/d9aa2ecfff7b1e1addb456ce53bb9d634ddc298d944383",
        pinned: true,
    },
    {
        name: "English for Business Communication",
        provider: "Bangkit Academy",
        image: cert("tbi.png"),
        date: "2024-07-12",
    },
    {
        name: "Machine Learning Intermediate",
        provider: "IDCamp",
        image: cert("idcamp.png"),
        date: "2025-04-07",
        link: "https://drive.google.com/file/d/1W2jgnt_g0W5Uvv5xPHg0EWvK_AA2Kni8/edit",
        pinned: true,
    },
    {
        name: "IT Security: Defense against the digital dark arts",
        provider: "Coursera",
        image: cert("coursera2.png"),
        date: "2024-03-12",
        link: "https://coursera.org/verify/JKUX57YS3LDG",
    },
    {
        name: "System Administration and IT Infrastructure Services",
        provider: "Coursera",
        image: cert("coursera3.png"),
        date: "2024-02-22",
        link: "https://coursera.org/verify/BVGLJ2YTNK25",
    },
    {
        name: "Technical Support Fundamentals",
        provider: "Coursera",
        image: cert("coursera4.png"),
        date: "2024-02-23",
        link: "https://coursera.org/verify/F6XFRJE63KWV",
    },
    {
        name: "The Bits and Bytes of Computer Networking",
        provider: "Coursera",
        image: cert("coursera5.png"),
        date: "2024-02-20",
        link: "https://coursera.org/verify/W29JM3UU2RPQ",
    },
    {
        name: "Operating Systems and You : Becoming a Power User",
        provider: "Coursera",
        image: cert("coursera6.png"),
        date: "2024-03-12",
        link: "https://coursera.org/verify/QE2P65GSJ4NE",
    },
    {
        name: "Put It to Work: Prepare for Cybersecurity Jobs",
        provider: "Coursera",
        image: cert("coursera8.png"),
        date: "2024-08-03",
        link: "https://coursera.org/verify/S0T7NEHLC1IC",
    },
    {
        name: "Automate Cybersecurity Tasks with Python",
        provider: "Coursera",
        image: cert("coursera9.png"),
        date: "2024-07-30",
        link: "https://coursera.org/verify/X8CFNS6SH88V",
    },
    {
        name: "Sound the Alarm: Detection and Response",
        provider: "Coursera",
        image: cert("coursera10.png"),
        date: "2024-07-25",
        link: "https://coursera.org/verify/CUTEMYEBRRS4",
    },
    {
        name: "Assets, Threats, and Vulnerabilities",
        provider: "Coursera",
        image: cert("coursera11.png"),
        date: "2024-07-22",
        link: "https://coursera.org/verify/HKJBS4QT77QJ",
    },
    {
        name: "Tools of the Trade: Linux and SQL",
        provider: "Coursera",
        image: cert("coursera12.png"),
        date: "2024-07-19",
        link: "https://coursera.org/verify/TRTPM29FRJ55",
    },
    {
        name: "Belajar Dasar Git dengan GitHub",
        provider: "Dicoding",
        image: cert("dicoding1.png"),
        date: "2024-02-19",
        link: "https://www.dicoding.com/certificates/98XW2QJVWPM3",
    },
    {
        name: "Belajar Dasar Pemrograman Web",
        provider: "Dicoding",
        image: cert("dicoding2.png"),
        date: "2024-02-29",
        link: "https://www.dicoding.com/certificates/NVP77VV4OPR0",
    },
    {
        name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        provider: "Dicoding",
        image: cert("dicoding3.png"),
        date: "2022-11-30",
        link: "https://www.dicoding.com/certificates/1OP85NWOQPQK",
    },
    {
        name: "Belajar Penerapan Machine Learning dengan Google Cloud",
        provider: "Dicoding",
        image: cert("dicoding4.png"),
        date: "2024-05-16",
        link: "https://www.dicoding.com/certificates/72ZDV7VWLZYW",
    },
    {
        name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
        provider: "Dicoding",
        image: cert("dicoding5.png"),
        date: "2022-10-12",
        link: "https://www.dicoding.com/certificates/MRZM458R3XYQ",
    },
    {
        name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
        provider: "Dicoding",
        image: cert("dicoding6.png"),
        date: "2024-02-19",
        link: "https://www.dicoding.com/certificates/6RPNV9285Z2M",
    },
    {
        name: "Memulai Pemrograman Dengan Kotlin",
        provider: "Dicoding",
        image: cert("dicoding7.png"),
        date: "2023-09-15",
        link: "https://www.dicoding.com/certificates/0LZ0QG1O0Z65",
    },
    {
        name: "Menjadi Google Cloud Engineer",
        provider: "Dicoding",
        image: cert("dicoding8.png"),
        date: "2024-05-08",
        link: "https://www.dicoding.com/certificates/MRZME42D3PYQ",
    },
    {
        name: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
        provider: "Dicoding",
        image: cert("dicoding9.png"),
        date: "2024-02-19",
        link: "https://www.dicoding.com/certificates/GRX5QYE5KZ0M",
    },
    {
        name: "Belajar Dasar Pemrograman JavaScript",
        provider: "Dicoding",
        image: cert("dicoding10.png"),
        date: "2022-10-26",
        link: "https://www.dicoding.com/certificates/81P28G8LYPOY",
    },
    {
        name: "Belajar Dasar Manajemen Proyek",
        provider: "Dicoding",
        image: cert("dicoding11.png"),
        date: "2024-08-09",
        link: "https://www.dicoding.com/certificates/JLX17ERENX72",
    },
    {
        name: "Belajar Dasar Data Science",
        provider: "Dicoding",
        image: cert("image.png"),
        date: "2024-09-05",
        link: "https://www.dicoding.com/certificates/QLZ97YEYMP5D",
    },
    {
        name: "Belajar Dasar Structured Query Language (SQL)",
        provider: "Dicoding",
        image: cert("image2.png"),
        date: "2024-09-05",
        link: "https://www.dicoding.com/certificates/EYX4VNE4JZDL",
    },
    {
        name: "Belajar Strategi Pengembangan Diri",
        provider: "Dicoding",
        image: cert("image3.png"),
        date: "2024-09-12",
        link: "https://www.dicoding.com/certificates/NVP7Q28QVZR0",
    },
    {
        name: "Memulai Pemrograman dengan Python",
        provider: "Dicoding",
        image: cert("dicoding13.png"),
        date: "2024-11-23",
        link: "https://www.dicoding.com/certificates/81P24MR88ZOY",
    },
    {
        name: "Belajar Dasar AI",
        provider: "Dicoding",
        image: cert("dicoding14.png"),
        date: "2024-11-28",
        link: "https://www.dicoding.com/certificates/4EXG72E8GPRL",
    },
    {
        name: "Belajar Machine Learning untuk Pemula",
        provider: "Dicoding",
        image: cert("dicoding15.png"),
        date: "2024-12-16",
        link: "https://www.dicoding.com/certificates/0LZ04LNMRP65",
    },
    {
        name: "Belajar Pengembangan Machine Learning",
        provider: "Dicoding",
        image: cert("dicoding16.png"),
        date: "2025-02-24",
        link: "https://www.dicoding.com/certificates/2VX3K5VYJXYQ",
    },
    {
        name: "Belajar Dasar HTML",
        provider: "Codepolitan",
        image: cert("codepolitan1.png"),
        date: "2024-07-30",
        link: "https://codepolitan.com/c/MJ0HYRW",
    },
    {
        name: "Belajar Dasar CSS",
        provider: "Codepolitan",
        image: cert("codepolitan2.png"),
        date: "2024-07-31",
        link: "https://codepolitan.com/c/DKE3UFB",
    },
    {
        name: "Belajar Bootstrap CSS Framework",
        provider: "Codepolitan",
        image: cert("codepolitan3.png"),
        date: "2024-08-01",
        link: "https://codepolitan.com/c/JVLB3KF",
    },
    {
        name: "Membuat Halaman Website Portofolio Menggunakan Tailwind CSS",
        provider: "Codepolitan",
        image: cert("codepolitan4.png"),
        date: "2024-08-01",
        link: "https://codepolitan.com/c/GHWAD0I",
    },
    {
        name: "Belajar JavaScript",
        provider: "Codepolitan",
        image: cert("codepolitan5.png"),
        date: "2024-08-02",
        link: "https://codepolitan.com/c/8ZICBQK",
    },
    {
        name: "Belajar JavaScript DOM",
        provider: "Codepolitan",
        image: cert("codepolitan6.png"),
        date: "2024-08-02",
        link: "https://codepolitan.com/c/JHPNC8W",
    },
    {
        name: "Belajar JavaScript Asynchronous",
        provider: "Codepolitan",
        image: cert("codepolitan7.png"),
        date: "2024-08-04",
        link: "https://codepolitan.com/c/GF1BV5A",
    },
    {
        name: "Belajar Ajax dan Web API",
        provider: "Codepolitan",
        image: cert("codepolitan8.png"),
        date: "2024-08-04",
        link: "https://codepolitan.com/c/C90DLBK",
    },
    {
        name: "Belajar Konsep OOP di Javascript",
        provider: "Codepolitan",
        image: cert("codepolitan9.png"),
        date: "2024-08-05",
        link: "https://codepolitan.com/c/OYVIIZT",
    },
    {
        name: "Belajar React JS",
        provider: "Codepolitan",
        image: cert("codepolitan10.png"),
        date: "2024-08-05",
        link: "https://codepolitan.com/c/2D8HXWT",
    },
    {
        name: "React.js 101 - Membuat dan Menggunakan Komponen dalam Aplikasi Berbasis React.js",
        provider: "Codepolitan",
        image: cert("codepolitan11.png"),
        date: "2024-08-07",
        link: "https://codepolitan.com/c/32S5K1B",
    },
    {
        name: "React.js State - Mengelola Perubahan Tampilan dengan Data bersama Event Handler",
        provider: "Codepolitan",
        image: cert("codepolitan12.png"),
        date: "2024-08-07",
        link: "https://codepolitan.com/c/IPQW1NH",
    },
    {
        name: "React.js State Management - Panduan Menggunakan State yg Baik",
        provider: "Codepolitan",
        image: cert("codepolitan13.png"),
        date: "2024-08-07",
        link: "https://codepolitan.com/c/EOWS7UD",
    },
    {
        name: "React.js - Membuat Aplikasi Split Bill",
        provider: "Codepolitan",
        image: cert("codepolitan14.png"),
        date: "2025-01-04",
        link: "https://codepolitan.com/c/4RBDB2Z",
    },
    {
        name: "React.js - Belajar Lebih Dalam Tentang Component dan Jenisnya",
        provider: "Codepolitan",
        image: cert("codepolitan15.png"),
        date: "2025-01-04",
        link: "https://codepolitan.com/c/XL5H2WE",
    },
    {
        name: "React.js - Bagaimana React.js Bekerja di Balik Layar",
        provider: "Codepolitan",
        image: cert("codepolitan16.png"),
        date: "2025-01-04",
        link: "https://codepolitan.com/c/UYHCNPR",
    },
    {
        name: "React.js - Belajar Hook Effect dan Data Fetching",
        provider: "Codepolitan",
        image: cert("codepolitan17.png"),
        date: "2025-01-04",
        link: "https://codepolitan.com/c/TUCO9US",
    },
    {
        name: "React Native Unveiled: From Basics to Mobile Mastery",
        provider: "Udemy",
        image: cert("Udemy React Native Unveiled: From Basics to Mobile Mastery.jpg"),
        date: "2024-08-08",
        link: "https://ude.my/UC-5bc1773d-ee4a-4337-a62c-596ae82bf238",
    },
    {
        name: "User Experience Design - Learn UI UX App Design with Figma",
        provider: "Udemy",
        image: cert("Udemy User Experience Design - Learn UI UX App Design with Figma.jpg"),
        date: "2024-08-12",
        link: "https://ude.my/UC-0242cc0d-4e6b-4694-a902-ba22093f90d1",
    },
    {
        name: "Cloud Computing and Amazon Web Services (AWS) Fundamentals",
        provider: "Udemy",
        image: cert("Udemy Cloud Computing and Amazon Web Services (AWS) Fundamentals.jpg"),
        date: "2024-08-12",
        link: "https://ude.my/UC-91de3e3a-79fe-463e-a5f5-53d3013a9ac5",
    },
]
