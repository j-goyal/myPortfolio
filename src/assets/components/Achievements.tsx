export function Achievements() {
    return (
      <>
        <div
          id="achievements"
          className="flex flex-col bg-[#FAFAFA] items-center px-4 justify-center scroll-my-10"
        >
          <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
            ACHIEVEMENTS & AWARDS
          </div>
          <div className="bg-white flex flex-col font-math w-full lg:w-[950px] shadow-lg rounded-3xl py-6 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
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
                  Pat on the Back Award (06/2023), Excellence Award (06/2022) at Smart Energy Water.
                  </li>
                  <li>
                  Recipient of Merit Scholarship in 1st, and 3rd Year for Top 10% students of my branch based on CGPA at Thapar Institute of Engineering and Technology.
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
  