import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rate: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rate }) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} color="#f5a623" />
      ))}
      {halfStar && <FaStarHalfAlt color="#f5a623" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} color="#f5a623" />
      ))}
    </div>
  );
};

export default StarRating;