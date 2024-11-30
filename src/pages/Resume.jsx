import TopHeader from "../components/TopHeader";
import NavHeader from "../components/NavHeader";
// import HeroSection from "../components/HeroSection";
function ResumePage () {
    return(
        <>
            <TopHeader></TopHeader>
            <NavHeader></NavHeader>
            <div className="w-full flex justify-center pt-6">
                <div className="w-5/6 flex justify-center items-center mt-6">
                    <h1 className=" text-white text-xl font-extrabold tracking-wider">HIMANSHU SHARMA</h1>
                </div>
            </div>
            <div className="img-details w-full flex justify-center mt-10">
                <div className="w-5/6 flex justify-center">
                <div className="w-1/2 resumeLeft flex justify-center">
                <div className="img-circle">
                    <img src="./src/assets/img/img4.png" alt="" className="heroImage-resume" />
                </div>
                </div>
                <div className="w-1/2 resumeRight flex items-center flex-col justify-center gap-4">
                    <h1 className="dev-text">Hello, I am Full-Stack Web Developer</h1>
                    <p className="dev-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab fugit quaerat dolorem cumque quam expedita temporibus, maxime itaque cum et quibusdam perspiciatis, dolores voluptatibus reiciendis. Modi sit asperiores tenetur iusto, quibusdam consequatur ea. Eius distinctio quae laudantium non,
                    </p>
                </div>  
                </div>
            </div>

        </>
    )
}

export default ResumePage;