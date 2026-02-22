import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default  function RatingStars({ rating }) {
  // console.log(rating)
  const stars = [];

  for (let i = 1; i <= 5; i++) {

    if (rating.rate >= i) {
      stars.push(<FaStar key={i} className="w-[0.6rem] h-[0.6rem] lg:h-[1rem] lg:w-[1rem]"/>);
    }

    else if (rating.rate >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="w-[0.6rem] h-[0.6rem] lg:h-[1rem] lg:w-[1rem]"/>);
    }

    else {
      stars.push(<CiStar key={i} className="w-[0.6rem] h-[0.6rem] lg:h-[1rem] lg:w-[1rem]"/>);
    }
  }

  return <div className="flex">{stars}</div>;
}