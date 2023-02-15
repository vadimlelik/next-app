import React from "react";
import { ReviewProps } from "./ReviewProps";

const Review = ({ className, ...props}: ReviewProps): JSX.Element => {
  return (
    <p
      {...props}
    >
    </p>
  );
};

export default Review;
