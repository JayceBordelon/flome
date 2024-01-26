import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ABOUT } from '../data/home.jsx';
import GROUP_PIC from "../images/Group_Photo.jpg";
import PAPER_BUILD from "../images/Paper_Build.jpg";
import ACTIVITY_FAIR from "../images/Activity_Fair.jpg";
import FANCY from "../images/FANCY.jpg";
import PRESENTATION from "../images/PRESENTATION.jpg";
import W from "../images/W.jpg";
import Intro from '../components/Intro.jsx';


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enables autoplay mode
    autoplaySpeed: 3000,    // Time each slide is displayed
    adaptiveHeight: true
  };

  const [doneTyping, setDoneTyping] = useState(false);

  return (
    <div className="w-full mx-auto m-2 p-4">
      {/* Introduction Section */}
      <section className="text-center p-8">
      <h1 className="text-4xl font-bold mb-2 mb-8">Welcome to {doneTyping? "FLOME!" : <Intro setDoneTyping={setDoneTyping}/>}</h1>
        <p className="text-2xl rounded-lg text-white p-2 m-2 font-bold">{ABOUT.description}</p>
      </section>

      {/* Pillars Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {Object.entries(ABOUT.pillars).map(([pillar, details], index) => (
            <div key={index} className="shadow-lg text-white bg-flome-maroon rounded-lg p-6">
              {details.icon}
              <h3 className="text-2xl font-semibold mt-4">{pillar}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Hope to see you soon!</h2>
      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
        <div>
          <img src={GROUP_PIC} alt="Group Picture" className="rounded-lg w-full object-cover" style={{'height': '500px'}}/>
        </div>
        <div>
          <img src={PAPER_BUILD} alt="Paper Build" className="rounded-lg w-full object-cover" style={{'height': '500px'}}/>
        </div>
        <div>
          <img src={ACTIVITY_FAIR} alt="Activity Fair" className="rounded-lg w-full object-cover" style={{'height': '500px'}}/>
        </div>
        <div>
          <img src={FANCY} alt="fancy" className="rounded-lg w-full object-cover" style={{'height': '500px'}}/>
        </div>
        <div>
          <img src={PRESENTATION} alt="pres" className="rounded-lg w-full  object-cover" style={{'height': '500px'}}/>
        </div>
        <div>
          <img src={W} alt="Activity Fair" className="rounded-lg w-full  object-cover" style={{'height': '500px'}}/>
        </div>
        </Slider>
      </div>
    </section>
    </div>
  );
}
