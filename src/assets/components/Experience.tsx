export function Experience() {
  return (
    <>
    <div className="h-8"></div>
      <div
        id="experience"
        className="flex flex-col bg-[#FAFAFA] items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10"
      >
        <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
          PROFESSIONAL EXPERIENCE
        </div>
        <div className="bg-white flex flex-col font-math w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
          <div className="flex justify-between md:gap-2 items-baseline flex-col md:flex-row">
            <div className="font-bold text-xl">
              FNF India Private Limited | Software Developer
            </div>
            <div className="font-semibold text-lg text-gray-500">
              Remote | 16 Aug 2024 - Present
            </div>
          </div>
          <div className="gap-1.5 flex flex-col text-[15px]">
            <div>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "40px",
                  textAlign: "justify",
                }}
              >
                <li>
                  Implemented Google SAML SSO using .NET WebAPI and Next.js,
                  enhancing authentication efficiency for 100% of users with
                  Safe Token management, leveraging Access Tokens and Refresh
                  Tokens stored in both DB and Redis, and encrypting
                  AccessTokens with RSA encryption for added security.
                </li>
                <li>
                  Engineered a robust password-compliance system using Formik
                  and Yup to enforce enterprise-grade security policies
                  incorporating advanced validations (complexity, dictionary
                  checks, and password history) to safeguard user accounts and
                  reduce password-related breaches by 35%.
                </li>
                <li>
                  Integrated Weglot, a paid translation solution to deliver
                  multilingual capabilities, configuring Spanish and Portuguese
                  translations, enhancing user engagement by 25%.
                </li>
                <li>
                  Addressed and mitigated security vulnerabilities reported by
                  Fortify, ensuring the application meets high security
                  standards and is protected against common threats.
                </li>
                <li>
                  Contributed to the development of a real estate marketing
                  platform providing customized websites for brokers and
                  realtors, partnering with 100+ marketing centers, including
                  Alliance, Kentwood, and Exp, Utilized technologies like .NET,
                  React, TypeScript, API integrations, Microservices, MongoDB,
                  and SQL DB while working on key subprojects:
                  <ul
                    style={{
                      listStyleType: "circle",
                      paddingLeft: "40px",
                      textAlign: "justify",
                    }}
                  >
                    <li>
                      <span className="underline">Control Panel:</span>{" "}
                      Managed tenant data for 100+ clients.
                    </li>
                    <li>
                      <span className="underline">Admin Panel:</span>{" "}
                      Facilitated seamless creation and configuration for new
                      tenants.
                    </li>
                    <li>
                      <span className="underline">Marketing Center:</span>{" "}
                      Delivered tenant-specific websites, supporting marketing
                      efforts across various real estate agencies.
                    </li>
                    <li>
                      <span className="underline">.NET Backend:</span>{" "}
                      Developed and maintained microservices-based architecture,
                      integrating multiple API projects for scalability and
                      efficient backend operations.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ================================================ */}
        <div className="bg-white flex flex-col font-math w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
          <div className="flex justify-between md:gap-2 items-baseline flex-col md:flex-row">
            <div className="font-bold text-xl">
              Smart Energy Water | Product Engineer
            </div>
            <div className="font-semibold text-lg text-gray-500">
              Noida, UP | Jul 2021 - 14 Aug 2024
            </div>
          </div>
          <div className="gap-1.5 flex flex-col text-[15px]">
            <div>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "40px",
                  textAlign: "justify",
                }}
              >
                <li>
                  Streamlined large-scale data reporting and reduced reporting
                  latency by 95% by implementing a .NET 8 scheduler to
                  consolidate multi-table data into a flat structure, cutting
                  CSV export time from over 5 minutes to 20 seconds for 200,000+
                  records.
                </li>
                <li>
                  Created a highly efficient C# scheduler console application
                  that automated data processing tasks such as data dumping,
                  file writing, multithreading, SAP integration via SFTP, and
                  table updates using LINQ; saved 25 hours per week and improved
                  overall operational efficiency.
                </li>
                <li>
                  Directed seamless integration through Web APIs, efficiently
                  preprocessing customer JSON payloads to create and update
                  system data, resulting in a significant improvement of 40% in
                  data management efficiency.
                </li>
                <li>
                  Reduced data processing time by 70% through implementation of
                  Advanced Entity Framework functionalities, expediting data
                  insertion and updates leading to a substantial enhancement in
                  system reliability.
                </li>
                <li>
                  Elevated user satisfaction by 18% by using comprehensive email
                  notifications for exceptional scenarios and successful
                  operations, providing meaningful and informative messages,
                  enhancing system monitoring and ensuring prompt awareness of
                  critical system events.
                </li>
                <li>
                  Developed and maintained user-friendly, dynamic single-page
                  applications (SPAs) using React, Redux , functional Hooks and
                  improving user interface responsiveness and contributing to a
                  25% increase in user engagement and satisfaction.
                </li>
                <li>
                  Implemented Gantt Chart functionality through code flexibility
                  and Scheduled Work Orders on the Gantt chart utilizing jQuery,
                  Ajax, JavaScript, C#, and .NET to increase task management
                  efficiency by 30%.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ================================================ */}
        <div className="bg-white flex flex-col font-math w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
          <div className="flex justify-between md:gap-2 items-baseline flex-col md:flex-row">
            <div className="font-bold text-xl">
              Smart Energy Water | Product Engineer Intern
            </div>
            <div className="font-semibold text-lg text-gray-500">
              Noida, UP | Jan 2021 - Jun 2021
            </div>
          </div>
          <div className="gap-1.5 flex flex-col text-[15px]">
            <div>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "40px",
                  textAlign: "justify",
                }}
              >
                <li>
                  Developed and optimized ASP.NET webpages utilizing HTML, CSS,
                  JavaScript, jQuery, and Bootstrap, resulting in accelerated
                  project delivery and enhanced functionality for 4+ clients.
                </li>
                <li>
                  Utilized w2ui to implement a grid system and High charts to
                  create visually appealing and interactive graphs.
                </li>
                <li>
                  Resolved frontend bugs and issues by conducting thorough code
                  reviews and implementing effective debugging strategies
                  resulting in a 30% improvement in overall system stability.
                </li>
                <li>
                  Created map using LeafletJS with marker clustering and lasso
                  functionality for effective visualization of geographical data
                  thereby increasing user interactivity by 20%.
                </li>
                <li>
                  Boosted application performance with strategic optimizations,
                  achieving an impressive 20% enhancement in page load times.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-6"></div>
      </div>
    </>
  );
}
