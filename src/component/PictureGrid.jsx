import React from "react";
import "./PictureGrid.css";

const PictureGrid = ({ pictures }) => {

    
  const getImageSize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      return 'regular'; // Large screen - use 'regular' size
    } else if (width >= 768) {
      return 'small'; // Medium screen - use 'small' size
    } else {
      return 'thumb'; // Small screen - use 'thumb' size
    }
  };


  return (
    <div className="picture-grid">
      {pictures.map((picture) => (
        <div key={picture.id} className="picture-item">
         <div className="image-wrapper">
              <img src={picture.urls[getImageSize()]} alt={picture.description} />
            </div>
          <div className="details">
            <p>Author: {picture.user.name}</p>
            <p>
              Description: {picture.description || "No description available"}
            </p>
            <p>
              <a
                href={picture.links.html}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Unsplash
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;
