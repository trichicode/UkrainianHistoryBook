import { FC } from 'react';
import { slideData } from '../../../types/book';
import './ImagePage.scss';

const ImagePage: FC<{ data: slideData }> = ({ data }) => {
  return (
    <div className="wrapper__page">
      <div className="wrapper__img">
        <img src={data.img.url} alt={data.img.alt} />
      </div>

      <div className="wrapper__content">
        <div className="content__title">{data.title}</div>
        <div className="content__description">{data.description}</div>
      </div>
    </div>
  );
};

export default ImagePage;
