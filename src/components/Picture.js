import React from 'react';

const Picture = ({ imgs }) => {
  return (
    <picture>
      <source media='(min-width: 769px)' srcSet={imgs.desktop} />
      <source media='(min-width: 768px)' srcSet={imgs.tablet} />
      <img src={imgs.mobile} alt='' />
    </picture>
  );
};

export default Picture;
