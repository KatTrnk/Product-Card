import './ImageList.css';
import slim from './slim.png';
import light from './light.png';
import smart from './smart.png';

export const ImageList = () => {
  return (
    <>
      <div className="image-list">
        <div className="image1">
          <img src={slim} alt="slim laptop"></img>
          <p>slim</p>
        </div>
        <div className="image2">
          <img src={light} alt="light laptop"></img>
          <p>light</p>
        </div>
        <div className="image3">
          <img src={smart} alt="smart laptop"></img>
          <p>smart</p>
        </div>
      </div>
    </>
  );
};
