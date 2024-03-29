import { ImageList } from '../ImageList/ImageList';
import './ProductCard.css';
import { useState } from 'react';
import { Carousel } from '../Carousel/Carousel';
import { slides } from '../../data/carouselData.json';

export const ProductCard = () => {
  const [quantity, setQuantity] = useState(15);
  const [count, setCount] = useState(0);

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
          <p className="card-details-stock notStock">
            skladem ihned k odběru: {quantity}
          </p>
          <div className="card-details-pieces">
            <button
              className="piecesRemovedCart"
              type="button"
              disabled={count === 0 ? true : false}
              onClick={() => {
                setCount(count - 1);
              }}
            >
              {' '}
              -{' '}
            </button>
            <p>{count}</p>
            <button
              className="piecesInCart"
              type="button"
              disabled={count === quantity ? true : false}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <button
            className="card-details-button"
            disabled={count === 0 ? true : false}
            type="button"
          >
            <a href=" https://www.lenovo.com/cz/cs/laptops/ideapad/3-series/IdeaPad-Slim-3i-Gen-8-16-inch-Intel/p/LEN101I0085">
              {' '}
              Koupit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
