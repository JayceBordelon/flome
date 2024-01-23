import React from 'react';
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


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enables autoplay mode
    autoplaySpeed: 2000,    // Time each slide is displayed
    adaptiveHeight: true
  };

  return (
    <div className="w-full mx-auto m-2 p-4">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">{ABOUT.intro}</h1>
        <p className="text-lg">{ABOUT.description}</p>
      </section>

      {/* Pillars Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {Object.entries(ABOUT.pillars).map(([pillar, details], index) => (
            <div key={index} className="shadow-lg rounded-lg p-6">
              {details.icon}
              <h3 className="text-xl font-semibold mt-4">{pillar}</h3>
              <p>{details.explination}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Hope to see you soon!</h2>
      <div className="w-1/4 sm:w-3/4 mx-auto">
        <Slider {...settings}>
        <div>
          <img src={GROUP_PIC} alt="Group Picture" className="rounded-lg w-full  object-cover" style={{'maxHeight': '500px'}}/>
        </div>
        <div>
          <img src={PAPER_BUILD} alt="Paper Build" className="rounded-lg w-full  object-cover" style={{'maxHeight': '500px'}}/>
        </div>
        <div>
          <img src={ACTIVITY_FAIR} alt="Activity Fair" className="rounded-lg w-full  object-cover" style={{'maxHeight': '500px'}}/>
        </div>
        <div>
          <img src={FANCY} alt="fancy" className="rounded-lg w-full  object-cover" style={{'maxHeight': '500px'}}/>
        </div>
        <div>
          <img src={PRESENTATION} alt="pres" className="rounded-lg w-full  object-cover" style={{'maxHeight': '500px'}}/>
        </div>
        <div>
          <img src={W} alt="Activity Fair" className="rounded-lg w-full  object-cover" style={{'maxHeight': '500px'}}/>
        </div>
        </Slider>
      </div>
    </section>
    </div>
  );
}
