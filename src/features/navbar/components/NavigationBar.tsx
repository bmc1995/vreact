import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Person from '@mui/icons-material/Person';
import viteLogo from '/vite.svg';
import { ModeToggle } from '../../../common/Buttons/ModeToggle';
import { useLinkClickHandler } from 'react-router-dom';

export default function NavigationBar() {
  const homeClickHandler = useLinkClickHandler('/');
  const personClickHandler = useLinkClickHandler('/dashboard');
  return (
    <Box
      component='nav'
      aria-label='Vreact Template'
      sx={{
        flexGrow: 1,
      }}
    >
      <List role='menubar' orientation='horizontal' sx={{ padding: 0, marginRight: '.75rem', height: '75px' }}>
        <ListItem role='none'>
          <ListItemButton role='menuitem' component='a' href='#NavHomeBtn' onClick={homeClickHandler} aria-label='Home'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </ListItemButton>
        </ListItem>
        <ListDivider sx={{ margin: 0 }} />
        <ListDivider sx={{ margin: 0, marginInlineStart: 'auto' }} />
        <ListItem role='none' sx={{ paddingX: 0 }}>
          <ModeToggle />
          <ListItemButton
            role='menuitem'
            component='a'
            onClick={personClickHandler}
            href='#NavBtn'
            aria-label='Profile'
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
