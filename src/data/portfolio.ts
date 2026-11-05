export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  screenshots?: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
  status: "draft" | "published";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Workforce Demographics Dashboard",
    category: "Data Visualization & Analytics",
    description:
      "Developed an interactive Workforce Demographics Dashboard to track key HR performance metrics, including total headcount, active/inactive employee status, turnover rate (22%), and average monthly salary across organizational levels. Integrated dynamic multi-chart visualizations analyzing department breakdowns, geographic distributions, gender ratios, contract types, and historical hiring trends to support data-driven workforce planning.",
    role: "Data Analyst / BI Developer",
    technologies: ["Power BI", "Pandas", "Jupyter Notebook", "Microsoft Excel"],
    screenshots: ["/images/projects/demo1.webp", "/images/projects/demo2.webp", "/images/projects/demo3.webp", "/images/projects/demo4.webp", "/images/projects/demo5.webp"],
    demoUrl: "https://app.powerbi.com/groups/me/reports/a71724e2-8f1b-4036-bee1-ba4ffbd14123/e1a7d0c18162dbe55dd1?experience=power-bi",
    repositoryUrl: "https://drive.google.com/file/d/1m88tUhjCl5RHq-TZAyfeyUaT6Dg2xUE5/view?usp=sharing",
    featured: true,
    status: "published",
  },
  {
    id: "project-2",
    title: "Sales Analytics Dashboard",
    category: "Data Visualization & Analytics",
    description:
      "Developed an interactive Sales Analytics Dashboard to monitor key business performance indicators, tracking Total Sales, Total Profit, Total Quantity, and Total Transactions[cite: 11]. Integrated dynamic multi-chart visualizations to analyze Sales vs Profit trends, regional performance, customer segments, shipping modes, and geographical sales distribution across states[cite: 11]. Implemented comprehensive filtering options for order dates, regions, segments, and ship modes to facilitate data-driven business decisions.",
    role: "Data Analyst / BI Developer",
    technologies: ["Tableau", "Pandas", "Jupyter Notebook", "Microsoft Excel"],
    screenshots: ["/images/projects/sales1.webp", "/images/projects/sales2.webp", "/images/projects/sales3.webp"],
    demoUrl: "https://public.tableau.com/shared/QYG6X88M8?:display_count=n&:origin=viz_share_link",
    repositoryUrl: "https://drive.google.com/file/d/1whQ0dnfZie58BXIsguQKqo6kGngcuGWc/view?usp=sharing",
    featured: false,
    status: "published",
  },
  {
    id: "project-3",
    title: "Trend Analysis & Forecasting: BPJS Membership Segmentation",
    category: "Data Analysis & Forecasting",
    description:
      "Conducted trend analysis and forecasting for segment data using Microsoft Excel[cite: 12]. Processed and organized large structured datasets, utilizing color-coded cell formatting (red and yellow blocks) to highlight specific data segments[cite: 12]. Generated multiple time-series line charts with trendlines to visualize historical trajectories and forecast future patterns across various membership categories, such as Pekerja Mandiri, PBI, and PPU",
    role: "Data Analyst",
    technologies: ["Microsoft Excel", "Data Analytics", "Time Series Analysis", "Data Visualization"],
    screenshots: ["/images/projects/trend1.webp", "/images/projects/trend2.webp", "/images/projects/trend3.webp", "/images/projects/trend4.webp"],
    demoUrl: "https://docs.google.com/spreadsheets/d/1nheycJ8Gy2q1I4hj4f5HCAdENq6__wUK/edit?usp=sharing&ouid=114945167876308242852&rtpof=true&sd=true",
    repositoryUrl: "https://docs.google.com/spreadsheets/d/1nheycJ8Gy2q1I4hj4f5HCAdENq6__wUK/edit?usp=sharing&ouid=114945167876308242852&rtpof=true&sd=true",
    featured: false,
    status: "published",
  },
  {
    id: "project-4",
    title: "Indonesia Financial Market: Global & Domestic Market Analysis 2010 - 2026",
    category: "Data Visualization & Analytics",
    description:
      "Developed a comprehensive financial dashboard to analyze global and domestic market trends from 2010 to 2026[cite: 13]. The dashboard tracks key macroeconomic and financial indicators including USDIDR, IHSG, Gold prices, S&P 500, and the VIX market volatility index[cite: 13]. Implemented advanced analytical visualizations such as relative market performance trends, monthly returns comparisons, rolling volatility analysis, and Pearson/Spearman correlation metrics to evaluate the relationship between domestic indices and global benchmarks.",
    role: "Data Analyst",
    technologies: ["Power BI", "Pandas", "Jupyter Notebook", "Microsoft Excel"],
    screenshots: ["/images/projects/market1.webp", "/images/projects/market2.webp", "/images/projects/market3.webp", "/images/projects/market4.webp", "/images/projects/market5.webp"],
    demoUrl: "https://app.powerbi.com/groups/me/reports/2f78f509-c67f-4add-bc51-cecc50ce83b5/2d49af254039ac8e3484?experience=power-bi",
    repositoryUrl: "https://drive.google.com/file/d/1XHmZBK3xZzCudafH_aaVDds1_CZmoWi1/view?usp=sharing",
    featured: false,
    status: "published",
  },
  {
    id: "project-5",
    title: "Exchange Rate Forecasting: FTS Heuristic Optimized with PSO",
    category: "Data Analysis & Forecasting",
    description:
      "Developed a predictive time series model utilizing the Average Based Fuzzy Time Series (FTS) Heuristic methodology, optimized with Particle Swarm Optimization (PSO). Processed daily exchange rate data through fuzzification, defined fuzzy logical relationships (FLRG), and established testing/training splits. Designed and implemented algorithms in R to dynamically tune universe intervals, minimizing error metrics (MAPE, RMSE) and generating predictive graphical visualizations comparing standard FTS versus the PSO-optimized model.",
    role: "R Developer",
    technologies: ["R", "Time Series Analysis", "Particle Swarm Optimization", "Fuzzy Logic", "dplyr", "readxl"],
    screenshots: ["/images/projects/fts1.webp", "/images/projects/fts2.webp", "/images/projects/fts3.webp", "/images/projects/fts4.webp"],
    demoUrl: "https://drive.google.com/file/d/1jiK2P6IIE_yzp3uZUks_a9q4oWWWzMf6/view?usp=sharing",
    repositoryUrl: "https://drive.google.com/file/d/1XHmZBK3xZzCudafH_aaVDds1_CZmoWi1/view?usp=sharing",
    featured: false,
    status: "published",
  },

];
