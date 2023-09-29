import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star full-star">&#9733;</span>);
  }
  if (halfStar) {
    stars.push(<span key="half" className="star half-star">&#9733;</span>);
  }
  while (stars.length < 5) {
    stars.push(<span key={stars.length} className="star empty-star">&#9734;</span>);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
