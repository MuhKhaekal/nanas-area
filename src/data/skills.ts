export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    number: "1",
    title: "Programming & Libraries",
    description: "Utilizing programming languages ​​and specialized libraries, such as Pandas or R, to automate data cleaning, manipulation, and calculations at scale.",
    technologies: ["Pandas", "NumPy", "Base", "SQL", "SQLite", "PostgreSQL"],
  },
  {
    id: "statistical",
    number: "2",
    title: "Statistical & Analytical Skills",
    description: "Applying mathematical concepts, hypothesis testing, and regression modeling to extract meaning and test the validity of findings from data.",
    technologies: ["Data exploration", "T-tests", "ANOVA", "Regression", "Handling missing values", "Identifying outliers", "Transforming variables", "Normalizing data", "Joining/merging tables", "Validating data integrity"],
  },
  {
    id: "visualization",
    number: "3",
    title: "Data Visualization & Reporting",
    description: "Translating the results of complex numerical analysis into interactive charts or intuitive dashboards, making them easy for stakeholders to understand.",
    technologies: ["Matplotlib", "Power BI", "Tableau", "Microsoft Excel", "Google Sheet"],
  },
  {
    id: "tools",
    number: "4",
    title: "Tools & Workflow",
    description: "Using tools such as Git, Jupyter Notebook, and GitHub to document research transparently and ensure that the analysis workflow is reproducible.",
    technologies: ["Git", "GitHub", "SPSS", "Jupyter Notebook", "VS Code", "HeidiSQL", "R Studio", "NeonDB", "PSPP", "Minitab"],
  },
];
