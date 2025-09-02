import React, { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 3000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = Math.floor((window.innerWidth * window.innerHeight) / 50000);
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 2,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="star-background-container">
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.y + "%",
            left: star.x + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor"
          style={{
            width: meteor.size * 20 + "px",
            height: meteor.size  + "px",
            top: meteor.y + "%",
            left: meteor.x + "%",
            opacity: meteor.opacity,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
