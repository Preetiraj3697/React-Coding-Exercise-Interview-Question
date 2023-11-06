import { useState } from "react";
import Star from "./Star";

const StarRating = ({ value }) => {
    const [rating, setRating] = useState(parseInt(value) || 0);
    const [selection, setSelection] = useState(0);
  
    const hoverOver = event => {
      let val = 0;
      if (event && event.target && event.target.getAttribute('data-star-id'))
        val = event.target.getAttribute('data-star-id');
      setSelection(val);
    };
    console.log(rating);
    return (
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
        onMouseOver={hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
          <h2 id="count">Rating Count: {rating}</h2>
      </div>
    );
  };

  export default StarRating;