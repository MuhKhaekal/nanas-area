export type JourneyPhoto = {
  src: string;
  caption?: string;
};

export type JourneyItem = {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "experience" | "learning";
  status: "published" | "draft";
  logo?: string;
  images?: JourneyPhoto[];
};

export const journeyItems: JourneyItem[] = [
  {
    id: "journey-01",
    date: "March 2025 - November 2025",
    title: "Chief Operating Officer",
    organization: "CV. ADIKARTA KERTAWIDYA",
    description:
      "Managed the complete business operational cycle for the STOMAPATCH product, encompassing production planning, logistics distribution, and performance evaluation. Executed strict Quality Control for products and services, ensuring supply chain stability by maintaining adequate stock of raw materials and work equipment. Identified and formulated operational risk management strategies to minimize production bottlenecks, maintain workflow efficiency, and uphold service quality",
    type: "experience",
    status: "published",
    logo: "/images/journey/logo/adikarta.webp",
    images: [
      {
        src: "/images/journey/adikarta.webp",
        caption: "1 attachment",
      },
    ],
  },
  {
    id: "journey-02",
    date: "March 2025 - May 2025",
    title: "Service and Finance Division Staff",
    organization: "PT. TASPEN (Persero) Makassar",
    description:
      "Performed accurate and structured daily data entry for over 200 membership and pensioner documents into the database system. Checked and validated the completeness of incoming daily data to identify discrepancies, thereby supporting the speed and accuracy of operational services.",
    type: "experience",
    status: "published",
    logo: "/images/journey/logo/taspen.webp",
    images: [
      {
        src: "/images/journey/taspen.webp",
        caption: "1 attachment",
      },
    ],
  },
  {
    id: "journey-03",
    date: "December 2024 - March 2025",
    title: "Staff of Deputy for HR, General Affairs, and Communication",
    organization: "BPJS Kesehatan Kedeputian Wilayah IX Sulselbartrama",
    description:
      "Managed and digitalized daily correspondence data, recording incoming mail in the General Affairs division to ensure smooth and comprehensive agency administration. Conducted regular checking, verification, and organization of the document archiving system to maintain file order and improve administrative data retrieval efficiency.",
    type: "experience",
    status: "published",
    logo: "/images/journey/logo/bpjs.webp",
    images: [
      {
        src: "/images/journey/bpjs.webp",
        caption: "1 attachment",
      },
    ],
  },
];
