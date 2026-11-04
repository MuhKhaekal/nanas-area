export type Achievement = {
  id: string;
  number: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: "certification" | "recognition" | "contribution";
  image?: string;
  credentialUrl?: string;
  status: "draft" | "published";
};

export const achievements: Achievement[] = [
  {
    id: "achievement-01",
    number: "1",
    title: "Tableau",
    issuer: "SimpliLearn",
    year: "2026",
    description:
      "This certification validates foundational knowledge and competency in data visualization using Tableau. It demonstrates a commitment to deepening analytical skills by completing coursework focused on the basics of creating visual reports and interactive dashboards",
    category: "certification",
    image: "/images/achievements/tableau.webp",
    credentialUrl: "",
    status: "published",
  },
  {
    id: "achievement-02",
    number: "2",
    title: "SQLite Beyond the Basics",
    issuer: "CoddyTech",
    year: "2026",
    description:
      "This certification validates intermediate to advanced proficiency in SQLite database management. It demonstrates the ability to execute complex queries, manage relational data structures, and optimize database performance beyond foundational SQL concepts.",
    category: "certification",
    image: "/images/achievements/sql.webp",
    credentialUrl: "",
    status: "published",
  },
  {
    id: "achievement-03",
    number: "3",
    title: "HubSpot Data Integrations Certified",
    issuer: "HubSpot Academy",
    year: "2026",
    description:
      "This certification validates the capability to assess client use cases and specific data requirements to provide targeted HubSpot integration recommendations. It demonstrates a technical understanding of data flow and system alignment within the HubSpot ecosystem.",
    category: "certification",
    image: "/images/achievements/integ.webp",
    credentialUrl: "",
    status: "published",
  },
  {
    id: "achievement-04",
    number: "4",
    title: "Microsoft Excel for Financial Administration: Strategi Mengelola Data Keuangan dan Menyusun Laporan Secara Profesional",
    issuer: "Worldpreneur",
    year: "2026",
    description:
      "This certification validates practical competency in utilizing Microsoft Excel for financial administration. It confirms the ability to effectively manage financial data, implement data strategies, and systematically compile professional financial reports.",
    category: "certification",
    image: "/images/achievements/excel.webp",
    credentialUrl: "",
    status: "published",
  },
  {
    id: "achievement-05",
    number: "5",
    title: "Intro to Data Analytics",
    issuer: "RevoU",
    year: "2026",
    description:
      "This certification confirms the completion of an intensive program covering fundamental data analytics principles. It validates introductory knowledge in data extraction, processing methodologies, and generating actionable insights from datasets.",
    category: "certification",
    image: "/images/achievements/analys.webp",
    credentialUrl: "",
    status: "published",
  },
  {
    id: "achievement-06",
    number: "6",
    title: "Pandas",
    issuer: "Kaggle",
    year: "2026",
    description:
      "This certification validates practical coding competency using the Python Pandas library for data manipulation and analysis. It demonstrates the ability to clean, transform, and analyze structured data efficiently within a Python environment.",
    category: "certification",
    image: "/images/achievements/pandas.webp",
    credentialUrl: "",
    status: "published",
  },
];
