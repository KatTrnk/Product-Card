import { ImageList } from '../ImageList/ImageList';
import './ProductCard.css';
import { useState } from 'react';
import { Carousel } from '../Carousel/Carousel';
import { slides } from '../../data/carouselData.json';

export const ProductCard = () => {
  const [button, setButton] = useState('Koupit');
  // const [photo, setPhoto] = useState([]);
  // const [photoDetail, setPhotoDetail] = useState(img2);

  const handleClick = () => {
    setButton('Koupeno');
    if (button === 'Koupeno') {
      setButton('Koupit');
    }
  };

  return (
    <div className="card">
      <h1>IdeaPad Slim 3i</h1>
      <div className="card-carousel">
        <Carousel data={slides} />
      </div>
      <ImageList />
      <div className="card-description">
        <div className="card-photo-list"></div>
      </div>
      <div className="card-details">
        <ul className="card-details-list">
          <li>Tenký a lehký notebook pro snadné přenášení</li>
          <li>Poháněný procesory Intel® Core™ i7 13. generace</li>
          <li>Velký, barevně bohatý displej</li>
          <li> velký 16" displej s technologií IPS </li>
        </ul>
        <div className="card-details-price-info">
          <p className="card-details-price">Cena: 20 000 Kč</p>
          <p className="card-details-stock">skladem ihned k odběru</p>
          <button
            onClick={handleClick}
            className={
              button === 'Koupeno'
                ? 'card-details-button--koupeno'
                : 'card-details-button'
            }
            type="button"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};
