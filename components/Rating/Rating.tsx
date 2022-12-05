import React, { useEffect, useState } from "react";
import styles from "./Rating.module.css";
import cn from "classnames";
import { RatingProps } from "./RatingProps";
import StarsIcon from "./star.svg";

const Rating = ({
  raiting,
  isEditable = false,
  setRaiting,
  ...props
}: RatingProps): JSX.Element => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  useEffect(() => {
    constructRaiting(raiting);
  }, [raiting]);

  const constructRaiting = (currentRaiting: number) => {
    const upadtedArray = raitingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarsIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRaiting,
          })}
        />
      );
    });
    setRaitingArray(upadtedArray);
  };

  return (
    <div {...props}>
      {raitingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
