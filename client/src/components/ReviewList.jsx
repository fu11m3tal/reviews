import React from 'react';
import ReviewEntry from './ReviewEntry.jsx'

const ReviewList = (props) => {
  return (
    <div>
      {props.reviews.map(review => 
        <ReviewEntry 
          key={review._id} 
          review={review} 
          totalReviews={props.reviews.length}
        />
      )}
    </div>
  );
};

export default ReviewList;
