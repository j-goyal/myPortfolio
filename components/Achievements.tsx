export function Achievements() {
  const achievements = [
    "Pat on the Back Award (06/2023), Excellence Award (06/2022) at Smart Energy Water.",
    "Recipient of Merit Scholarship in 1st, and 3rd Year for Top 10% students of my branch based on CGPA at Thapar Institute of Engineering and Technology.",
  ]

  return (
    <div
      id="achievements"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10 py-12"
    >
      <div className="w-full lg:w-[980px] flex flex-col items-start">
        <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100 text-2xl mb-2">
          ACHIEVEMENTS & AWARDS
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-300 dark:to-gray-100 rounded-full mb-8"></div>
      </div>

      <div className="w-full lg:w-[950px] bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden font-math">
        <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-500 dark:to-gray-300"></div>

        <div className="p-6 sm:p-8">
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="group flex items-start gap-3">
                <div className="mt-1.5 min-w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-500 dark:bg-gray-400 group-hover:bg-gray-700 dark:group-hover:bg-gray-300 transition-colors"></div>
                </div>
                <p className="text-gray-800 dark:text-gray-200 group-hover:text-gray-950 dark:group-hover:text-white transition-colors text-justify">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
