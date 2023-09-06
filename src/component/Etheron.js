import React, { useCallback, useState } from "react";
import "./Etheron.css"; // Make sure to import the CSS file
import pp from '../Images/Purple Planet big.png';
import space from '../Images/Space.png';  
import BP from '../Images/Blue Planet big.png';
import YP from '../Images/Yellow Planet big.png';
import GP from '../Images/Green Planet big.png';

import PPSmall from '../Images/Purple Planet.png';
import BPSmall from '../Images/Blue Planet.png';
import YPSmall from '../Images/Yellow Planet.png';
import GPSmall from '../Images/Green Planet.png';

import starIcon from '../Images/Star Animate.png'; 

const PlanetFun = () => {
  const planetOrder = ["ETHERON", "LUMENARA", "THERONIX", "ORIONIS"];
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  

  const handlePlanetClick = useCallback(() => {
    setCurrentPlanetIndex((currentPlanetIndex + 1) % planetOrder.length);
  }, [currentPlanetIndex]);

  const planetInfo = [
    {
      name: "ETHERON",
      background: space, // Using the 'space' background
      planetImage: pp,
      galaxy: "Andromeda-IV",
      diameter: "16,400 km",
      dayLength: "26 Earth hours",
      avgTemperature: "-20°C to 0°C",
      climate: "Polar",
      prevArrowImage: BPSmall,
      nextArrowImage: YPSmall,
      starIconImage: starIcon,
    },
    {
      name: "LUMENARA",
      background: space, // Using the same 'space' background as 'ETHERON'
      planetImage: YP,
      galaxy: "Andromeda-IV",
      diameter: "11,540 km",
      dayLength: "56 Earth hours",
      avgTemperature: "10°C to 30°C",
      climate: "Tropical",
      prevArrowImage: PPSmall,
      nextArrowImage: GPSmall,
      starIconImage: starIcon,
    },
    {
      name: "THERONIX",
      background: space,
      planetImage: GP,
      galaxy: "Sombrero",
      diameter: "56,780 km",
      dayLength: "12 Earth hours",
      avgTemperature: "60°C to 90°C",
      climate: "Tropical",
      prevArrowImage: YPSmall,
      nextArrowImage: BPSmall,
      starIconImage: starIcon,
    },
    {
      name: "ORIONIS",
      background: space,
      planetImage: BP,
      galaxy: "Virgo A",
      diameter: "120,780 km",
      dayLength: "4 Earth hours",
      avgTemperature: "10°C to 40°C",
      climate: "Temperate",
      prevArrowImage: GPSmall,
      nextArrowImage: PPSmall,
      starIconImage: starIcon,
    },
  ];
  

  const currentPlanet = planetInfo[currentPlanetIndex];

  // ... previous code ...

return (
  <div className="planet-fun">
    
    <div className="planet-container etheron">
      <img className="space-icon" alt="" src={currentPlanet.background} />
      <div className="rectangle">
      <img className="purple-planet-icon" alt="" src={currentPlanet.planetImage}  />
      </div>
      <div className="frame-parent">
        <div className="galaxy-parent">
          <div className="galaxy">GALAXY</div>
          <div className="andromeda-iv">{currentPlanet.galaxy}</div>
        </div>
        <div className="galaxy-parent">
          <div className="diameter">Diameter</div>
          <div className="andromeda-iv">{currentPlanet.diameter}</div>
        </div>
        <div className="galaxy-parent">
          <div className="diameter">Day Length</div>
          <div className="andromeda-iv">{currentPlanet.dayLength}</div>
        </div>
        <div className="galaxy-parent">
          <div className="diameter">Avg Temperature</div>
          <div className="andromeda-iv">{currentPlanet.avgTemperature}</div>
        </div>
        <div className="galaxy-parent">
          <div className="diameter">Climate</div>
          <div className="andromeda-iv">{currentPlanet.climate}</div>
        </div>
      </div>
     
      <div className="star-animate-icon">
        <img src={currentPlanet.starIconImage} alt="Star Icon" />
      </div>
      <div className="planet-name">{currentPlanet.name}</div>
      <div className="arrow left-arrow" onClick={() => handlePlanetClick("prev")}>
        <img src={currentPlanet.prevArrowImage} alt="Previous Planet" />
      </div>
      <div className="arrow right-arrow" onClick={() => handlePlanetClick("next")}>
        <img src={currentPlanet.nextArrowImage} alt="Next Planet" />
      </div>
    </div>
    <div className="header">
        <div className="meteora">METEORA</div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="home">About</div>
          <div className="home">Contact</div>
        </div>
      </div>
      <div className="galaxies-parent">
        <div className="home">Galaxies</div>
        <div className="home">Solar System</div>
        <div className="home">Earth</div>
      </div>
  </div>
);

// ... rest of the code ...

};

export default PlanetFun;
