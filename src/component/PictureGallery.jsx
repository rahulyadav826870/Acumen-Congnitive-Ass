import React, { useState } from 'react';
import SearchInput from './SearchInput';
import PictureGrid from './PictureGrid';
import "./PictureGallery.css"

const API_KEY =import.meta.env.VITE_UNSPLASH_API_KEY;


const PictureGallery = () => {
  const [pictures, setPictures] = useState([]);

  const handleSearch = async (inputText) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?query=${inputText}&client_id=${API_KEY}`
      );
      const data = await response.json();
    //   console.log("data: ", data);
      setPictures(data.results);
    } catch (error) {
      console.error('Error fetching pictures:', error);
    }
  };

  return (
    <div>
      <h1>Picture Gallery</h1>
      <SearchInput onSearch={handleSearch} />
      <PictureGrid pictures={pictures} />
    </div>
  );
};

export default PictureGallery;
