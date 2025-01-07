
export function TopBar(){

    

    return <div className="bg-[#fafafa] fixed top-0 left-0 w-full z-50 shadow h-14 flex justify-between px-4 py-8">
        <div className=" font-bold text-2xl flex flex-col justify-center ml-4 h-full">
            Aryan Sindhi.
        </div>
        
        <div className="flex items-center mr-4">
            <div className="hidden md:flex text-lg font-semibold gap-7 items-end">
                <a className="hover:cursor-pointer hover:text-purple-900" href="#AboutMe">About Me</a>
                <a className="hover:cursor-pointer hover:text-purple-900" href="#experience">Experience</a>
                <a href="#projects" className="hover:cursor-pointer hover:text-purple-900">Projects</a>
            </div>
        </div>
            
            {/* <a href="https://twitter.com/AryanSindhi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-2">Twitter</a>
            <a href="https://linkedin.com/in/aryan-sindhi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-2">LinkedIn</a>
            <a href="https://github.com/aryansindhi18" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-2">GitHub</a> */}
            {/* <button onClick={() => window.open('https://drive.google.com/file/d/1sMeHxR7VU_HefCniVdB6gXbKZ_8cIvwx/view?usp=drive_link', '_blank')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded">
                View Resume
            </button> */}
            <div className="flex items-center mr-4">
            <button className=" h-9 bg-black gap-2 flex items-center hover:shadow-lg hover:bg-slate-800 text-white font-semibold text-sm  px-4 sm:px-6 rounded-lg" onClick={() => window.open('https://drive.google.com/file/d/1HYI7iDX3YnTh8eYJp6spAPcMggJ63cBJ/view?usp=drive_link', '_blank')} >Resume <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z"></path><path d="M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z"></path></svg></button>
        </div>


        {/* <div className="flex">
            <div className=" font-medium flex flex-col justify-center h-full mr-4">
                Hello, Aryan
            </div>
        </div> */}
    </div>
}
