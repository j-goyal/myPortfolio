
export function TopBar(){

    

    return <div className="bg-[#fafafa] fixed top-0 left-0 w-full z-50 shadow h-14 flex justify-between px-4 py-8">
        <div className=" font-bold text-2xl flex flex-col justify-center ml-4 h-full">
            Jatin Goyal.
        </div>
        
        <div className="flex items-center mr-4">
            <div className="hidden md:flex text-lg font-semibold gap-7 items-end">
                <a className="hover:cursor-pointer hover:text-purple-900" href="#AboutMe">About Me</a>
                <a className="hover:cursor-pointer hover:text-purple-900" href="#experience">Experience</a>
                <a href="#projects" className="hover:cursor-pointer hover:text-purple-900">Projects</a>
            </div>
        </div>
            <div className="flex items-center mr-4">
            <button className=" h-9 bg-black gap-2 flex items-center hover:shadow-lg hover:bg-slate-800 text-white font-semibold text-sm  px-4 sm:px-6 rounded-lg" onClick={() => window.open('https://docs.google.com/document/d/1DhXkdBFR-hQFUdmwQzK7J7U-gErURVzv/edit?usp=sharing&ouid=116084301159096467678&rtpof=true&sd=true', '_blank')} >Resume <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z"></path><path d="M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z"></path></svg></button>
        </div>
    </div>
}
