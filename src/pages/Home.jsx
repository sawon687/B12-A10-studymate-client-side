
import { useContext } from 'react';
import TopstudyPartners from '../Componets/TopstudyPartners';
import Loading from './Loading';
import AuthContex from '../Contex/AuthContex';
import HeroSection from '../Componets/HeroSection';
import HowitWork from '../Componets/HowitWork';
import Testimonials from '../Componets/Testimonials';

const Home = () => {
    const { loading } = useContext(AuthContex)
    if (!loading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <title>Home</title>
             <HeroSection></HeroSection>
            <TopstudyPartners></TopstudyPartners>
            <HowitWork></HowitWork>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;