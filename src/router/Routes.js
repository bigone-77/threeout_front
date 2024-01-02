import { Route, Routes as ReactRouters } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/MainPage';


const Routes = () => {
  return (
    <ReactRouters>
      <Route element={<Layout />} />
      <Route path='/'
        element={<MainPage />} />
    </ReactRouters>
  );
};

export default Routes;