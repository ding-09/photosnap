import React from 'react';

const Picture = ({ imgs }) => {
  return (
    <picture>
      <source media='(min-width: 768px)' srcSet={imgs.tablet} />
      <source media='(min-width: 1024px)' srcSet={imgs.desktop} />
      <img src={imgs.mobile} alt='' />
    </picture>
  );
};

export default Picture;
