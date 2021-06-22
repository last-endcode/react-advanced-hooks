import React from 'react';
import PropTypes from 'prop-types';
// import Images
import defaultImages from '../../../assets/default-image.jpeg';

// props here
const Product = ({ image, name, price }) => {
  // checking props
  // console.log(image, name, price);

  // if image true show image.url
  const url = image && image.url;
  return (
    <article className='product'>
      {/* if true show image.url but if not showing defaultImages */}
      <img src={url || defaultImages} alt={name || 'default images'}></img>
      <h4>{name}</h4>
      {/* jika salah satu ada false use 0 as default values */}
      <h4>${price || 3.99}</h4>
    </article>
  );
};

// solution checking props
// component.propTypes
// here this obj
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// here if missing, will change here as default
// Product.defaultProps = {
//   image: defaultImages,
//   name: 'default name',
//   price: 0,
// };

export default Product;

/*
disini akan mengalami big fat error karena ada salah satu image yg undefined

<h4>{name}</h4>
<img src={image.url}></img>
<h4>${price}</h4>

Tuk make sure cek menggunakan log, dan liat apa yg undefined
disini yang error adalah sofa set dia tidak memiliki price, dan juga image

Solusinya adalah menggunakkan PropsTypes from 'prop-types'

Dan selain itu bisa juga menggunakan short circuit ||



*/
