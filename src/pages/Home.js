import Menu from "../components/Menu"
import appMenu from "../components/appMenu"
import Carousel from "../components/Carousel"
const Home = () => {
    return(
    <div className="home-page">
        <Menu menu={appMenu}/>
        <div className="home-body">
        <Carousel/>
        </div>
    </div>)
}

export default Home