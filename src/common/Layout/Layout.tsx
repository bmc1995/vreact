import { Box } from '@mui/joy';
import NavigationBar from '../../features/navbar/components/NavigationBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box height={'inherit'}>
      <Header>
        <NavigationBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>{'This is a footer'}</Footer>
    </Box>
  );
};
