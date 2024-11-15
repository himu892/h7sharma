import TopHeader from "../components/TopHeader";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";

function Skills(){
    return (
        <>
            <TopHeader></TopHeader>
            <NavHeader></NavHeader>
            <Banner currentPage={'skills'}></Banner>
        </>
    )
}
export default Skills;