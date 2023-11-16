import { Routes, Route } from 'react-router-dom';
import Hero from '../views/Hero';
import NoPageMatch from '../views/NoPageMatch';
import Nav from '../components/Navbar';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route
        path='*'
        element={
          <>
            <Nav />
            <NoPageMatch />
          </>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
