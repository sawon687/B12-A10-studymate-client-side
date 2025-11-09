import Footer from '../Componets/Footer';
import NavBar from '../Componets/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-screen'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;