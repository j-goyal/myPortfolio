export function Resume() {
  return (
    <div className="flex items-center mr-4">
        <button
          className=" h-9 bg-black gap-2 flex items-center hover:shadow-lg hover:bg-slate-800 text-white font-semibold text-sm  px-4 sm:px-6 rounded-lg"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1GtRShpp0mX7cEU5QlVKN5XfVdMgy8EbO/view?usp=sharing",
              "_blank"
            )
          }
        >
          Resume{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z"></path>
            <path d="M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z"></path>
          </svg>
        </button>
      </div>
  );
}
