
import { useContext } from 'react';
import TopstudyPartners from '../Componets/TopstudyPartners';
import Loading from './Loading';
import AuthContex from '../Contex/AuthContex';

const Home = () => {
    const { loading } = useContext(AuthContex)
    if (!loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <TopstudyPartners></TopstudyPartners>

        </div>
    );
};

export default Home;