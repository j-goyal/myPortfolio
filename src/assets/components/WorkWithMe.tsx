export function WorkWithMe() {
  return (
    <div className="flex justify-center items-center">
      <button
        aria-label="Email Me"
        className="bg-black hover:shadow-lg h-11 hover:bg-slate-800
           text-white text-md rounded-lg py-2 px-8"
        onClick={() => window.open("mailto:jating07925@gmail.com", "_blank")}
      >
        Work with me -&gt;
      </button>
    </div>
  );
}
