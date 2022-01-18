import Menu from "../components/Menu";
import appMenu from "../components/appMenu";
import "../style/AboutUs.css";
const AboutUs = () => {
  return (
    <div className="home">
      <Menu menu={appMenu} />
      <div className="aboutus">ABOUT US</div>
      <div className="welcomeedoc">Welcome to Edoc. We are delighted to have you here! </div>
      <div className="fulltext">

EDoc is the latest solution to the ongoing problem of document storing and retrieving. This application will help you safely store all of your personal or proffessional documents, making document storage easier than ever. All you need to do is send an "add document" request and we will be taking care of the rest. We assure you of the outmost secure and safe storage for your personal data, so feel free and confident to use this service for any document you might want to store for easy finding and retrieving!</div>
    </div>
  );
};

export default AboutUs;
