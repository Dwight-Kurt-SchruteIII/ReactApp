import Body from "./Body.jsx";
import "./Styles.css";
import diamondImage from "../Img/MainPage/diamantove-sperky-2-f30.jpg";

function MainPage() {
  return (
    <Body>
      <h1>Welcome to my world of design! </h1>
      <div className="Content">
        <div className="leftBox">
          <div className="textContent">
            <h2 className="text-align-left">About Me</h2>
            Originally hailing from the beautiful Czech Republic, where I
            pursued my studies in interior design, I've now found my home in the
            serene landscapes of Norway. The breathtaking Nordic design and the
            pristine nature here have deeply inspired me and my creations.
          </div>
        </div>
        <div className="rightBox">
          <div className="slide-in">
            <div className="image">
              <img src={diamondImage} alt="Diamantové Šperky" />
            </div>
          </div>
        </div>
      </div>
      <div className="Content">
        <div className="leftBox">
          <div className="slide-in">
            <div className="image">
              <img src={diamondImage} alt="Diamantové Šperky" />
            </div>
          </div>
        </div>
        <div className="rightBox">
          <div className="textContent">
            <h2 className="text-align-right">My Philosophy </h2>I am passionate
            about using only the highest quality, eco-friendly materials in all
            my products. This commitment not only ensures the longevity and
            beauty of each piece but also allows us to contribute to the health
            of our planet and ourselves. Together, we can make a difference—one
            sustainable choice at a time.
          </div>
        </div>
      </div>
      <div className="Content">
        <div className="leftBox">
          <div className="textContent">
            <h2 className="text-align-left">My Specialties </h2>
            With a keen eye for detail and a love for all things beautiful, I
            specialize in creating exquisite jewellery and unique interior
            accessories. Each piece is crafted with care, blending the timeless
            elegance of traditional design with modern aesthetics.
          </div>
        </div>
        <div className="rightBox">
          <div className="slide-in">
            <div className="image">
              <img src={diamondImage} alt="Diamantové Šperky" />
            </div>
          </div>
        </div>
      </div>
      <div className="Content">
        <div className="leftBox">
          <div className="slide-in">
            <div className="image">
              <img src={diamondImage} alt="Diamantové Šperky" />
            </div>
          </div>
        </div>
        <div className="rightBox">
          <div className="textContent">
            <h2 className="text-align-right">My Mission </h2>
            My mission is to bring a touch of joy and elegance into your life
            through my creations. I hope that each product will not only enhance
            your personal style or home decor but also bring a smile to your
            face and a sense of happiness to your heart.
          </div>
        </div>
      </div>
    </Body>
  );
}

export default MainPage;
