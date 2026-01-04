import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Fastar = ({ rating }) => {
  const stars = [];
 

  [...Array(5).keys()].map(i=>{
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  })

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default Fastar;
