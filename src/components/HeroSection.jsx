function HeroSection() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-5/6 flex">
        <div className="w-1/2 flex justify-center items-center">
        <div className="heroContent flex flex-col justify-between w-full h-56">
            <h1 className="text-5xl font-semibold uppercase heroName">Hi! I&apos;m Himanshu <span className="text-red-600">Sharma</span></h1>
            <p className="heroPara text-2xl select-none">
            I&apos;m a passionate frontend developer dedicated to crafting responsive, user-friendly websites. With a foundation in modern web technologies, I bring ideas to life with clean code and innovative design.
            </p>
        </div>
        </div>
        <div className="w-1/2 heroSection-img flex justify-end ml-5">
          <img
            src="./src/assets/img/img3.jpeg"
            alt=""
            className="heroImage"
            width="100%"
            height="100%"
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
