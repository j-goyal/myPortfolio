import { skillData } from "../data/skillData";

export function Skills() {
  return (
    <>
      <div
        id="Skills"
        className="flex flex-col bg-white items-center px-4 justify-center scroll-my-10"
      >
        <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
          TECHNICAL SKILLS
        </div>
        <div className="bg-[#f8f8f8] flex flex-col w-full lg:w-[950px] shadow-lg rounded-3xl py-6 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
            {skillData.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-gray-300 justify-center gap-2 p-4 shadow-lg rounded-3xl bg-white hover:scale-110 hover:shadow-2xl transition-transform duration-200"
              >
                <div className="text-3xl">{skill.icon}</div>
                <div className="text-center text-gray-600 font-bold text-xs cursor-default">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-6"></div>
      </div>
    </>
  );
}
