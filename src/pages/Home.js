import Menu from "../components/Menu"
import appMenu from "../components/appMenu"
import Carousel from "../components/Carousel"
import "../style/Home.css";

const Home = () => {
    return(
    <div className="home-page">
        <Menu menu={appMenu}/>
        <div className="home-body">
        <div className="welcome">Welcome to eDoc</div>
        </div>
        <div>
        </div>
        <div class = "aliniere" >
        <div class="container">
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        
                        <h3>Safety</h3>
                    </div>
                </div>
            
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        
                        <h3>Flexibility</h3>
                    </div>
                </div>
                
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        
                        <h3>Performance</h3>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>)
}

export default Home