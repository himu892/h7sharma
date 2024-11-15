import TopHeader from "../components/TopHeader";
import NavHeader from "../components/NavHeader";
import Banner from "../components/Banner";
function Contact(){
    return (
        <>
            <TopHeader></TopHeader>
            <NavHeader></NavHeader>
            <Banner currentPage={'contact'}></Banner>
        </>
    )
}
export default Contact;