export function Experience(){
    return <>
        <div id="experience" className="flex flex-col bg-[#FAFAFA] items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10">
            <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
                PROFESSIONAL EXPERIENCE
            </div>
            <div className="bg-white flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
                <div className="f`lex justify-between md:gap-2 items-baseline flex-col md:flex-row">
                    <div className="font-bold text-xl">
                        Smart Energy Water | Software Engineer
                    </div>
                    <div className="font-semibold text-lg text-gray-500">
                        Noida, UP | July 2021 - Feb 2024
                    </div>
                </div>
                <div className="gap-1.5 flex flex-col text-[15px]">
                    <div>
                        {/* <ul > */}
                        <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
                            <li>
                                Orchestrated the optimization of the auto scheduler, driving successful onboarding of new clients and earning back-to-back Award of Excellence recognition for outstanding contributions within a single year.
                            </li>
                            <li>
                                Diagnosed root cause for very high latency (p99 ~ 10 minutes) of our work order system.
                                <ul style={{ listStyleType: "circle", paddingLeft: "40px" }}>
                                <li>
                                    Improved the latency (p99) from 10 minutes to 2 seconds.
                                </li>
                                </ul>
                            </li>
                            <li>
                                Revamped the auto scheduler through the incorporation of advanced algorithms, leading to a 50% improvement in scheduling accuracy and reclaiming over 10 hours per week by minimizing the need for manual adjustments.
                                <ul style={{ listStyleType: "circle", paddingLeft: "40px" }}>
                                <li>
                                    Enhanced work order routing through the integration of location-based pre-route capabilities, leading to a 40% decrease in travel time and fuel costs for field technicians.
                                </li>
                                </ul>
                                <ul style={{ listStyleType: "circle", paddingLeft: "40px" }}>
                                <li>
                                    Created a new feature which provides top 5 field workers for each work order beforehand, to enable dispatchers to make quick and sound decisions for emergency work orders.
                                </li>
                                </ul>
                            </li>
                            <li>
                                Spearheaded a client project to streamline operations by replacing the traditional paperwork system with our efficient automated smart scheduling solution, resulting in a 50% reduction in administrative tasks.
                            </li>
                            <li>
                                Performed data backfill during the migration to the new database version with a different schema structure.
                            </li>
                            <li>
                                Designed an ETL job to insert daily client assets data of around 100k records into our system.
                            </li>
                        </ul>
                    </div>
                </div>   
            </div>
            {/* ================================================ */}
            <div className="bg-white flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
                <div className="flex justify-between md:gap-2 items-baseline flex-col md:flex-row">
                    <div className="font-bold text-xl">
                        Smart Energy Water | Software Engineer Intern
                    </div>
                    <div className="font-semibold text-lg text-gray-500">
                        Noida, UP | Jan 2021 - June 2024
                    </div>
                </div>
                <div className="gap-1.5 flex flex-col text-[15px]">
                    <div>
                        {/* <ul > */}
                        <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
                            <li>
                                Initiated the integration of Smart Mobile Workforce's flagship product, Schedule and Dispatch, within the product engineering team at SEW. This positively impacted workload management for field workers, fostering superior customer service delivery and optimizing operational efficiency.
                            </li>
                            <li>
                                Developed a cutting-edge SQL Server auto scheduler for a utility company, streamlining work order assignment to the most qualified and available workers, resulting in a 30% reduction in overall project turnaround time.
                            </li>
                            <li>
                                Engineered a flexible and customisable  scheduling system enabling efficient job allocation at customized time intervals, resulting in a 40% reduction in operational costs.
                                <ul style={{ listStyleType: "circle", paddingLeft: "40px" }}>
                                <li>
                                    It schedules approximately 300 work orders daily, saving 4-5 hours of manual work compared to earlier processes.
                                </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>   
            </div>  
            {/* ================================================ */}
            <div className="h-6"></div>
        </div>
    </>
}