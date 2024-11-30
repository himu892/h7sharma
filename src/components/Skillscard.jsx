
function Skillscard({ icon, desc, title, iconClass }) {
  return (
    <>
      <div className="w-full flex justify-center mt-6">
        <div className="card-container w-5/6 flex gap-5 card hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <div className="logo-container group w-1/5 h-full flex justify-center items-center">
            <div className="skillsIcon html">
            <i className={`${icon} ${iconClass}`}></i>
            </div>
          </div>
          <div className="text-container flex-1 flex flex-col">
            <h2 className="flex-1 px-8 py-2 font-extrabold text-lg mt-4">{title}</h2>
            <div className="w-full h-full flex-1 flex justify-center items-center px-8 py-4 text-lg">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skillscard;
