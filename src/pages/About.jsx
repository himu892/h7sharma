import TopHeader from "../components/TopHeader";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
function About(){
    return (
        <>
            <TopHeader></TopHeader>
            <NavHeader></NavHeader>
            <Banner currentPage={'about'}></Banner>
        </>
    )
}
export default About;