import React, { useCallback, useState, memo } from "react";
import ReactStars from "react-rating-stars-component";
import { ReactComponent as StarIcon } from "../../images/icon-star-fill.svg";
import RatingStarStyled from "./RatingStar.styles";

const RatingStar = props => {
  /* prettier-ignore */
  const { starSize, starActiveColor, isStarHalf, starColor, isStarEditable, starCount, attendantCount, FilledIcon, EmptyIcon, isShowAttendantCount, attendantColor, ratingTextColor, isVertical, isRatingInteger, isShowRatingTotal, ratingTextSize, rowStarGutter, ratingCurrentTextColor, ratingTotalTextColor } = props;
  const [rating, setRating] = useState(isRatingInteger ? parseInt(props.rating, 10) : parseFloat(props.rating).toFixed(1));

  const onRatingChanged = useCallback(
    newRating => {
      setRating(newRating);
      props.onRatingChanged && props.onRatingChanged(newRating);
    },
    [props.onRatingChanged],
  );

  const RatingInfo = useCallback(() => {
    return (
      <p className="rating_info">
        <span className="rating_count">
          <span className="rating_count_current">{rating}점</span>
          <span className="rating_count_total">{isShowRatingTotal && ` / ${starCount}점`}</span>
        </span>
        {isShowAttendantCount && <span className="rating_attendant_count">({attendantCount}명 참여)</span>}
      </p>
    );
  }, [isShowAttendantCount, isShowRatingTotal, starCount, attendantCount, rating]);

  return (
    <RatingStarStyled
      attendantColor={attendantColor}
      ratingCurrentTextColor={ratingCurrentTextColor}
      ratingTotalTextColor={ratingTotalTextColor}
      ratingTextSize={ratingTextSize}
      isVertical={isVertical}
      rowStarGutter={rowStarGutter}
    >
      <div className="rating_area">
        <ReactStars
          count={starCount}
          value={Number(rating)}
          edit={isStarEditable}
          size={starSize}
          color={starColor}
          activeColor={starActiveColor}
          isHalf={isStarHalf}
          onChange={onRatingChanged}
          emptyIcon={<EmptyIcon />}
          filledIcon={<FilledIcon />}
        />
      </div>
      <RatingInfo />
    </RatingStarStyled>
  );
};

RatingStar.defaultProps = {
  rating: 4.5,
  ratingCurrentTextColor: "#ccc",
  ratingTotalTextColor: "#222",
  ratingTextSize: 12,
  starCount: 5,
  starSize: 30,
  starColor: "#f0f0f0",
  starActiveColor: "#ffbb44",
  isStarHalf: false,
  isStarEditable: true,
  isShowAttendantCount: true,
  isShowRatingTotal: false,
  isRatingInteger: false,
  isVertical: false,
  attendantCount: 0,
  attendantColor: "#ccc",
  rowStarGutter: 0,
  EmptyIcon: () => <StarIcon width={24} height={24} style={{ color: "#f0f0f0" }} />,
  FilledIcon: () => <StarIcon width={24} height={24} style={{ color: "#ffbb44" }} />,
};

export default memo(RatingStar);
