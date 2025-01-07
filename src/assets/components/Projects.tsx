import { ImageWithPlaceholder } from "./ImageWithPlaceholder"
export function Projects(){
    return <>
        <div id="projects" className="bg-white flex flex-col items-center px-3 sm:px-10 scroll-my-10">
            <div className="w-full lg:w-[980px] items-start font-extrabold text-gray-500 text-2xl mt-8 mb-3 sm:mt-10 sm:mb-5 px-4">
                PROJECTS
            </div>
            <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
                <div className="font-bold text-xl">
                    Share2Pay: Simulating Payments, Seamlessly.
                </div>
                <div className="flex gap-2 lg:gap-8 flex-col lg:flex-row mt-3">
                    <div className="flex-grow">
                        {/* <img src={Share2Pay} alt="project" className="h-auto max-w-full rounded-lg" /> */}
                        {/* <img src="https://drive.google.com/thumbnail?id=10coGoC17n_yQz93imIMEP1_dYkmer8Fq&sz=w1000" alt="Share2Pay" className="h-auto max-w-full rounded-lg"/> */}
                        <ImageWithPlaceholder
                            src="https://drive.google.com/thumbnail?id=10coGoC17n_yQz93imIMEP1_dYkmer8Fq&sz=w1000"
                            alt="Share2Pay"
                            placeholderSrc="https://drive.google.com/thumbnail?id=193XGnV0VZeLzmPq7z138byB0PM5sqtm4&sz=w1000"
                        />
                    </div>
                    <div className="flex flex-col gap-4 lg:w-[700px] font-light mt-2 justify-evenly">
                        <div>
                            A simple Paytm like website that allows you to transfer balance to other users utilizing database transactions. 
                        </div>
                        <div className="flex-wrap flex gap-2 mt-1">
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">React</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">MongoDb</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">NodeJs</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">ExpressJs</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Mongoose</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Tailwind CSS</div>
                        </div>
                        <button type="button" className="w-60 py-2.5 px-5 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white border-gray-600 hover:bg-gray-700" onClick={() => window.open('https://share2pay.aryansindhi18.co.in/', '_blank')}>
                            Check it out!
                        </button>
                    </div>
                </div>
            </div>
            {/* ========================================================================== */}
            <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
                <div className="font-bold text-xl">
                    Xiang-Su: Empower Every Step.
                </div>
                <div className="flex gap-2 lg:gap-8 flex-col lg:flex-row mt-3">
                    <div className="flex-grow">
                        {/* <img src={xiangsu} alt="project" className="h-auto max-w-full rounded-lg" /> */}
                        {/* <img src="https://drive.google.com/thumbnail?id=1DVQtQmH6rAHhfixddBFbicia6OMdam_0&sz=w1000" loading="lazy" alt="Xiang-Su" className="h-auto max-w-full rounded-lg"/> */}
                        <ImageWithPlaceholder
                            src="https://drive.google.com/thumbnail?id=1DVQtQmH6rAHhfixddBFbicia6OMdam_0&sz=w1000"
                            alt="Xiang-Su"
                            placeholderSrc="https://drive.google.com/thumbnail?id=1-qif1hFx-kLNS5FAh7wUxYXJ5X4gnz3T&sz=w1000"
                        />
                    </div>
                    <div className="flex flex-col gap-4 lg:w-[700px] font-light mt-2 justify-evenly">
                        <div>
                        A website offering various services such as converting images/videos from b/w to colored, downloading images from google and more.
                        </div>
                        <div className="flex-wrap flex gap-2 mt-1">
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">HTML</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">MongoDb</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Python</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Flask</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">PyMongo</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">CSS</div>
                        </div>
                        <button type="button" className="w-60 py-2.5 px-5 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white border-gray-600 hover:bg-gray-700" onClick={() => window.open('https://github.com/aryansindhi18/xiang-su', '_blank')}>
                            Github
                        </button>
                    </div>
                </div>
            </div>
            {/* ========================================================================== */}
            <div className="bg-[#F7F7F7] flex flex-col w-full lg:w-[950px] shadow-md rounded-3xl py-10 px-6 sm:px-8 md:px-12 gap-4 font-light text-md mb-8">
                <div className="font-bold text-xl">
                    Narrate.ly: Empowering Stories.
                </div>
                <div className="flex gap-2 lg:gap-8 flex-col lg:flex-row mt-3">
                    <div className="flex-grow">
                        {/* <img src={xiangsu} alt="project" className="h-auto max-w-full rounded-lg" /> */}
                        {/* <img src="https://drive.google.com/thumbnail?id=1jw5qQpQYT5lzjgpG206Hdl-uIgG_XeH-&sz=w1000" alt="Narrate.ly" className="h-auto max-w-full rounded-lg"/> */}
                        <ImageWithPlaceholder
                            src="https://drive.google.com/thumbnail?id=1jw5qQpQYT5lzjgpG206Hdl-uIgG_XeH-&sz=w1000"
                            alt="Narrate.ly"
                            placeholderSrc="https://drive.google.com/thumbnail?id=1n28A46MUX_eVqao_SNIcS-3YTS0oMmLC&sz=w1000"
                        />
                    </div>
                    <div className="flex flex-col gap-4 lg:w-[700px] font-light mt-2 justify-evenly">
                        <div>
                            A dynamic blogging platform where thoughts transform into impactful narratives. Inspired by the simplicity and reach of Medium, Narrate.ly leverages modern web technologies to provide a seamless writing and reading experience.
                        </div>
                        <div className="flex-wrap flex gap-2 mt-1">
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">ReactJs</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">PostgresSql</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Hono</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Cloudflare Workers</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Prisma</div>
                            <div className="bg-gray-200 rounded-lg items-center justify-center flex px-4 py-0.5 text-sm">Tailwind</div>
                        </div>
                        <button type="button" className="w-60 py-2.5 px-5 text-sm font-medium rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-100 bg-gray-800 text-white border-gray-600 hover:bg-gray-700" onClick={() => window.open('https://narrate.ly.aryansindhi18.co.in/', '_blank')}>
                        Check it out!
                        </button>
                    </div>
                </div>
            </div>
            {/* ========================================================================== */}
        </div>
    </>
}
