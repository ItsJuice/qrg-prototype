import Hero from "../assets/Hero.png";
import Pic4 from "../assets/pic4.png";
import Pic2 from "../assets/pic2.png";
import Pic3 from "../assets/pic3.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Home() {
  return (
    <>
      <div className="hero">
        <img src={Hero} alt="BMW - QRG" />
      </div>
      <div className="home-grid">
        <div className="home-grid__box">
          <img src={Pic3} alt="" />
          <h3><ChevronRightIcon /> My BMW App</h3>
        </div>
        <div className="home-grid__box">
          <img src={Pic4} alt="" />
          <h3><ChevronRightIcon /> Upcoming Models</h3>
        </div>
        <div className="home-grid__box">
          <img src={Pic2} alt="" />
          <h3><ChevronRightIcon /> Charging Info</h3>
        </div>
      </div>
    </>
  )
}
  
export default Home;