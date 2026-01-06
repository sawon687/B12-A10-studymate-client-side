
import { useEffect, useState } from "react";
import HomeSkeleton from "../Componets/SkeletonBox";
import HeroSection from "../Componets/HeroSection"; 
import FesureSection from "../Componets/FesureSection"; 
import TopstudyPartners from "../Componets/TopstudyPartners"; 
import Testimonials from "../Componets/Testimonials"; 
import Newsletter from "../Componets/Newsletter"; 
import Highlights from "./Highlights"; 
import Categories from "../Componets/Categories";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // fake loading
  }, []);

  if (loading) return <HomeSkeleton />;

  return (
    <div className="space-y-32  px-4 md:px-0 mx-auto transition-colors overflow-hidden duration-500">
      <HeroSection />
      <Highlights />
      <Categories />
      <FesureSection />
      <TopstudyPartners />
      {/* How it works */}
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
