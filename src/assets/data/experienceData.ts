import { ExperienceDetail } from "../types/types";

export const experienceData: ExperienceDetail[] = [
  {
    title: "FNF India Private Limited | Software Developer",
    duration: "16 Aug 2024 - Present",
    location: "Remote",
    responsibilities: [
      {
        text: "Implemented SSO (Google SAML, JWT, Custom) using .NET WebAPI and Next.js, enhancing authentication efficiency for 100% of users with Safe Token management, leveraging Access Tokens and Refresh Tokens stored in both DB and Redis, and encrypting AccessTokens with RSA encryption for added security.",
      },
      {
        text: "Implemented robust Stripe Subscription Management in .NET WebAPI + Next.js stack, covering Customers, Payment Methods, Products, Coupons, and Subscriptions, including secure Stripe Webhook handling to automate real-time billing events, impacting 100% of paying users and streamlining recurring payment operations.",
      },
      {
        text: "Led end-to-end data and file migration as part of a full platform rewrite from legacy PHP to React + .NET, ensuring zero data loss, interoperability, and seamless cutover between legacy and modern systems.",
        subResponsibilities: [
          {
            heading: "Database Migration (MySQL → SQL Server & MongoDB)",
            description:
              "Extracted legacy data using optimized MySQL dump scripts and stored procedures, transformed and imported records into SQL Server using BCP, pipelines, and migrated selective modules to MongoDB for document-based structures, ensuring schema mapping, referential integrity, and validation across environments.",
          },
          {
            heading: "Data Merge & Validation",
            description:
              "Performed data merging with production tables, implemented validation scripts to detect duplicates or inconsistencies, and executed reconciliation testing to ensure migrated datasets aligned with live business rules and usage patterns.",
          },
          {
            heading: "File System Migration to Azure Blob Storage",
            description:
              "Migrated large volumes of legacy files hosted on EC2 and public endpoints to Azure Blob Storage using a combination of automated batching scripts, and .NET multithreaded processes to accelerate download and upload time while preserving file metadata and directory structure.",
          },
          {
            heading: "Automation & Performance Optimization",
            description:
              "Developed automated .NET utilities to orchestrate file transfers, handle retries, chunking, checksum verification, and parallel processing using threading to reduce execution time and improve migration reliability across environments.",
          },
        ],
      },
      {
        text: "Optimized reporting performance by loading large datasets in controlled chunks via LINQ, improving memory efficiency and export reliability by writing streamed CSV output in batches, and fine-tuning SQL queries to significantly reduce execution time and system load."
      },
      {
        text: "Conducted technical interviews for Software Developer positions, evaluating candidates in C#, OOPs principles, .NET Core, Web APIs, SQL, JavaScript, HTML, CSS, and React.js, ensuring alignment with company's engineering standards and contributing to effective hiring decisions.",
      },
      {
        text: "Engineered a robust password-compliance system using Formik and Yup to enforce enterprise-grade security policies incorporating advanced validations (complexity, dictionary checks, and password history) to safeguard user accounts and reduce password-related breaches by 35%.",
      },
      {
        text: "Integrated Weglot, a paid translation solution to deliver multilingual capabilities, configuring Spanish and Portuguese translations, enhancing user engagement by 25%.",
      },
      {
        text: "Addressed and mitigated security vulnerabilities reported by Fortify, ensuring the application meets high security standards and is protected against common threats.",
      },
      {
        text: "Contributed to the development of a real estate marketing platform providing customized websites for brokers and realtors, partnering with 100+ marketing centers, including Alliance, Kentwood, and Exp, Utilized technologies like .NET, React, TypeScript, API integrations, Microservices, MongoDB, and SQL DB while working on key subprojects:",
        subResponsibilities: [
          {
            heading: "Control Panel",
            description: "Managed tenant data for 100+ clients.",
          },
          {
            heading: "Admin Panel",
            description:
              "Facilitated seamless creation and configuration for new tenants.",
          },
          {
            heading: "Marketing Center",
            description:
              "Delivered tenant-specific websites, supporting marketing efforts across various real estate agencies.",
          },
          {
            heading: ".NET Backend",
            description:
              "Developed and maintained microservices-based architecture, integrating multiple API projects for scalability and efficient backend operations.",
          },
        ],
      },
    ],
  },
  {
    title: "Smart Energy Water | Product Engineer",
    duration: "Jul 2021 - 14 Aug 2024",
    location: "Noida, UP",
    responsibilities: [
      {
        text: "Streamlined large-scale data reporting and reduced reporting latency by 95% by implementing a .NET 8 scheduler to consolidate multi-table data into a flat structure, cutting CSV export time from over 5 minutes to 20 seconds for 200,000+ records.",
      },
      {
        text: "Created a highly efficient C# scheduler console application that automated data processing tasks such as data dumping, file writing, multithreading, SAP integration via SFTP, and table updates using LINQ; saved 25 hours per week and improved overall operational efficiency.",
      },
      {
        text: "Directed seamless integration through Web APIs, efficiently preprocessing customer JSON payloads to create and update system data, resulting in a significant improvement of 40% in data management efficiency.",
      },
      {
        text: "Reduced data processing time by 70% through implementation of Advanced Entity Framework functionalities, expediting data insertion and updates leading to a substantial enhancement in system reliability.",
      },
      {
        text: "Elevated user satisfaction by 18% by using comprehensive email notifications for exceptional scenarios and successful operations, providing meaningful and informative messages, enhancing system monitoring and ensuring prompt awareness of critical system events.",
      },
      {
        text: "Developed and maintained user-friendly, dynamic single-page applications (SPAs) using React, Redux , functional Hooks and improving user interface responsiveness and contributing to a 25% increase in user engagement and satisfaction.",
      },
      {
        text: "Implemented Gantt Chart functionality through code flexibility and Scheduled Work Orders on the Gantt chart utilizing jQuery, Ajax, JavaScript, C#, and .NET to increase task management efficiency by 30%.",
      },
    ],
  },
  {
    title: "Smart Energy Water | Product Engineer Intern",
    duration: "Jan 2021 - Jun 2021",
    location: "Noida, UP",
    responsibilities: [
      {
        text: "Developed and optimized ASP.NET webpages utilizing HTML, CSS, JavaScript, jQuery, and Bootstrap, resulting in accelerated project delivery and enhanced functionality for 4+ clients.",
      },
      {
        text: "Utilized w2ui to implement a grid system and High charts to create visually appealing and interactive graphs.",
      },
      {
        text: "Resolved frontend bugs and issues by conducting thorough code reviews and implementing effective debugging strategies resulting in a 30% improvement in overall system stability.",
      },
      {
        text: "Created map using LeafletJS with marker clustering and lasso functionality for effective visualization of geographical data thereby increasing user interactivity by 20%.",
      },
      {
        text: "Boosted application performance with strategic optimizations, achieving an impressive 20% enhancement in page load times.",
      },
    ],
  },
];