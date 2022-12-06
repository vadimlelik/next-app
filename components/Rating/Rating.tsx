import React, { KeyboardEvent, useEffect, useState } from "react";
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

  const chengeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRaiting(i);
  };
  const onClick = (index: number) => {
    if (!isEditable || !setRaiting) {
      return;
    }
    setRaiting(index);
  };
  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space" || !setRaiting) {
      return;
    }
    setRaiting(i);
  };

  useEffect(() => {
    constructRaiting(raiting);
  }, [raiting]);

  const constructRaiting = (currentRaiting: number) => {
    const upadtedArray = raitingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          onMouseEnter={() => chengeDisplay(i + 1)}
          onMouseLeave={() => chengeDisplay(raiting)}
          onClick={() => {
            onClick(i + 1);
          }}
          className={cn(styles.star, {
            [styles.filled]: i < currentRaiting,
            [styles.editable]: isEditable,
          })}
        >
          <StarsIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
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
