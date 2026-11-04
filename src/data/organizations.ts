export type OrganizationPhoto = {
  src: string;
  caption?: string;
};

export type OrganizationExperience = {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  logo?: string;
  organizationUrl?: string;
  images?: OrganizationPhoto[];
  status: "draft" | "published";
};

export const organizationExperiences: OrganizationExperience[] = [
  {
    id: "organization-01",
    period: "2022 — PRESENT",
    role: "Member",
    organization: "Forum Komunikasi Jalur Ketua OSIS UNHAS",
    description:
      "Applied and trained leadership and team management skills in the implementation of various youth forum work programs. Actively participated in various special workshops facilitated by the university to improve managerial capacity and professional communication.",
    images: [
      {
        src: "/images/organizations/jaketos1.webp",
        caption: "Jaketos Leader Summit 2023",
      },
      {
        src: "/images/organizations/jaketos2.webp",
        caption: "Jaketos Leader Summit 2022",
      },
      {
        src: "/images/organizations/jaketos3.webp",
        caption: "Kegiatan “ Orasi Ilmiah dengan Tema “ Transformasi Ekonomi Melalui Hilirisasi dengan kearifan Lokal",
      },
      {
        src: "/images/organizations/jaketos4.webp",
        caption: "Monitoring dan Evaluasi Mahasiswa Jalur Ketua Osis bersama Bidang Akademik dan Kemahasiswaan Uniersitas Hasanuddin",
      },
      {
        src: "/images/organizations/jaketos5.webp",
        caption: "Pelantikan Pengurus Forum Komunikasi Jalur Ketua OSIS UNHAS 2025",
      },
    ],
    status: "published",
  },
  {
    id: "organization-02",
    period: "2025 — 2026",
    role: "Public Relations Division Member",
    organization: "Badan Eksekutif Mahasiswa (BEM) FMIPA UNHAS",
    description:
      "Built and managed strategic communication and effective synergy, both with external stakeholders and across departments within the organization's internal environment. Actively involved in planning and executing various community service programs as a tangible implementation of the Tri Dharma of Higher Education pillars.",
    images: [
      {
        src: "/images/organizations/bem1.webp",
        caption: "Pengabdian Masyarakat di desa Tondongkura, Kab.Pangkajene dan Kepulauan",
      },
      {
        src: "/images/organizations/bem2.webp",
        caption: "Pengabdian Masyarakat di desa Tondongkura, Kab.Pangkajene dan Kepulauan",
      },
      {
        src: "/images/organizations/bem3.webp",
        caption: "Bina Akrab",
      },
    ],
    status: "published",
  },
  {
    id: "organization-03",
    period: "May 2024 – May 2025",
    role: "Secretary of Communication and Information Division",
    organization: "Himpunan Mahasiswa Statistika FMIPA UNHAS",
    description:
      "Formulated and drafted official correspondence, proposals, and complementary documents for various special activities under the auspices of the Communication and Information Division. Managed strategic communication channels and acted as a liaison in establishing cooperation and coordination with external stakeholders outside the association.",
    images: [
      {
        src: "/images/organizations/hima1.webp",
        caption: "Himastat Peduli Sosial di Rumah Harapan Indonesia",
      },
      {
        src: "/images/organizations/hima2.webp",
        caption: "Himastat Peduli Sosial di Rumah Harapan Indonesia",
      },
    ],
    status: "published",
  },
  {
    id: "organization-04",
    period: "December 2023 – December 2024",
    role: "General Secretary",
    organization: "Kerukunan Mahasiswa Pinrang Universitas Hasanuddin (KMP UNHAS)",
    description:
      "Led the full administrative governance of the organization's secretariat, including the management, numbering, and archiving of all incoming and outgoing mail during one management period. Executed an inventory system by recording, updating, and maintaining organizational asset data to ensure transparent and systematic tracking",
    images: [
      {
        src: "/images/organizations/kmp1.webp",
        caption: "Certified",
      },
      {
        src: "/images/organizations/kmp2.webp",
        caption: "Badan Pengurus Harian KMP UNHAS periode 2022-2023",
      },
      {
        src: "/images/organizations/kmp3.webp",
        caption: "Celebrating the 34th KMP UNHAS",
      },
      {
        src: "/images/organizations/kmp4.webp",
        caption: "Celebrating the 34th KMP UNHAS",
      },
    ],
    status: "published",
  },
];
