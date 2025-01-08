import { ImageWithPlaceholder } from "./ImageWithPlaceholder";
export function Projects() {
  return (
    <>
      <div
        id="projects"
        className="bg-white flex flex-col items-center px-3 sm:px-10 scroll-my-10"
      >
        <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
          PROJECTS
        </div>
        <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
          <div className="font-bold text-xl">TextUtils: Do Fun With Text.</div>
          <div className="flex gap-2 lg:gap-8 flex-col lg:flex-row mt-3">
            <div className="flex-grow">
              {/* <img src={Share2Pay} alt="project" className="h-auto max-w-full rounded-lg" /> */}
              {/* <img src="https://drive.google.com/thumbnail?id=10coGoC17n_yQz93imIMEP1_dYkmer8Fq&sz=w1000" alt="Share2Pay" className="h-auto max-w-full rounded-lg"/> */}
              {/* <ImageWithPlaceholder
                src="https://drive.google.com/thumbnail?id=10coGoC17n_yQz93imIMEP1_dYkmer8Fq&sz=w1000"
                alt="TextUtils"
                placeholderSrc="https://drive.google.com/thumbnail?id=193XGnV0VZeLzmPq7z138byB0PM5sqtm4&sz=w1000"
              /> */}
            </div>
            <div className="flex flex-col gap-4 lg:w-[700px] font-light mt-2 justify-evenly">
              <div className="text-justify">
                A simple project to create a text utility web application that
                enabled users to perform a range of text operations and also
                features theme customization, allowing users to personalize the
                appearance for a more engaging and user-friendly experience.
              </div>
              <div className="flex-wrap flex gap-2 mt-1">
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  React
                </div>
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  JavaScript
                </div>
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  HTML
                </div>
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  Bootstrap CSS
                </div>
              </div>
              <button
                type="button"
                className="w-60 py-2.5 px-5 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                onClick={() =>
                  window.open(
                    "https://j-goyal.github.io/TextUtils-React/",
                    "_blank"
                  )
                }
              >
                Check it out!
              </button>
            </div>
          </div>
        </div>
        {/* ========================================================================== */}
        <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
          <div className="font-bold text-xl">
            QuestQuizzy: Engaging Quiz Platform.
          </div>
          <div className="flex gap-2 lg:gap-8 flex-col lg:flex-row mt-3">
            <div className="flex-grow">
              {/* <img src={xiangsu} alt="project" className="h-auto max-w-full rounded-lg" /> */}
              {/* <img src="https://drive.google.com/thumbnail?id=1DVQtQmH6rAHhfixddBFbicia6OMdam_0&sz=w1000" loading="lazy" alt="Xiang-Su" className="h-auto max-w-full rounded-lg"/> */}
              {/* <ImageWithPlaceholder
                src="https://drive.google.com/thumbnail?id=1DVQtQmH6rAHhfixddBFbicia6OMdam_0&sz=w1000"
                alt="QuestQuizzy"
                placeholderSrc="https://drive.google.com/thumbnail?id=1-qif1hFx-kLNS5FAh7wUxYXJ5X4gnz3T&sz=w1000"
              /> */}
            </div>
            <div className="flex flex-col gap-4 lg:w-[700px] font-light mt-2 justify-evenly">
              <div className="text-justify">
                A quiz platform designed to deliver a personalized experience,
                featuring a dynamic countdown timer that transitions through
                colors (green → yellow → red) as time dwindles, enhancing
                urgency and excitement. With the added ability to review
                answers, it's an ideal choice for fun, interactive, and engaging
                learning sessions!
              </div>
              <div className="flex-wrap flex gap-2 mt-1">
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  React
                </div>
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  JavaScript
                </div>
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  HTML
                </div>
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  Tailwind CSS
                </div>
                <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">
                  API
                </div>
              </div>
              <button
                type="button"
                className="w-60 py-2.5 px-5 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                onClick={() =>
                  window.open(
                    "https://jatins-questquizzy.vercel.app/",
                    "_blank"
                  )
                }
              >
                Check it out!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
