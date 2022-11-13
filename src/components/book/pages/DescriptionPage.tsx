import { FC } from 'react';
import { slideData } from '../../../types/book';
import './DescriptionPage.scss';

const DescriptionPage: FC<{ data: slideData }> = ({ data }) => {
  return (
    <div className="wrapper__page__descr">
      <div className="wrapper__title__descr">{data.title}</div>
      <div className="wrapper__content__descr">{data.description}</div>
    </div>
  );
};

export default DescriptionPage;
