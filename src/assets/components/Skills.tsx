import { skillData } from "../data/skillData"

export function Skills() {
  return (
    <div id="Skills" className="flex flex-col items-center px-4 sm:px-6 md:px-8 justify-center scroll-my-10 py-12">
      <div className="w-full lg:w-[980px] flex flex-col items-start">
        <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100 text-2xl mb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-300 dark:to-gray-100 rounded-full mb-8"></div>
      </div>

      <div className="w-full lg:w-[950px] bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-500 dark:to-gray-300"></div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
            {skillData.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 items-center border border-gray-400 dark:border-gray-600 justify-center gap-2 p-4 shadow-lg rounded-3xl hover:scale-110 hover:shadow-2xl transition-transform duration-200"
              >
                <div className="text-3xl dark:text-white">{skill.icon}</div>
                <div className="text-center font-bold text-gray-600 dark:text-gray-300 text-xs cursor-default">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
