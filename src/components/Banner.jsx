import React, { useState } from "react";
import banners from "../banners.json";

function Banner({ currentPage }) {
  // State to track the current banner index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter banners based on the current page
  const filteredBanners = banners.filter((banner) => banner.page === currentPage);
  // Function to go to the previous banner
  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredBanners.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next banner
  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredBanners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="w-full banner-container">
        <ul className="flex w-full h-full">
          {filteredBanners.map((banner, index) =>
            index === currentIndex ? (
              <li key={banner.id} className="w-full h-full">
                <img src={banner.img} className="about_banner" alt={banner.title} />
              </li>
            ) : null
          )}
        </ul>
        <div className="w-full flex justify-between items-center toggle h-full">
          <div className="w-1/6 h-full flex items-center" onClick={slideLeft}>
            <a href="#">
              <i className="fa-solid fa-angle-left"></i>
            </a>
          </div>
          <div className="w-1/6 h-full flex justify-end items-center" onClick={slideRight}>
            <a href="#">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
