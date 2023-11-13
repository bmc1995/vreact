import { Tab, TabList, TabPanel, Tabs } from '@mui/joy';
import UserSettings from './UserSettings';
import UserProfile from './UserProfile';
import UserUploads from './UserUploads';

export default function UserDashboard() {
  return (
    <Tabs defaultValue={0} aria-label='User dashboard tabs' sx={{ minHeight: '100vh' }}>
      <TabList variant='soft' underlinePlacement='bottom'>
        <Tab indicatorPlacement='bottom' aria-label='User profile tab'>
          Profile
        </Tab>
        <Tab indicatorPlacement='bottom' aria-label='User settings tab'>
          Settings
        </Tab>
        <Tab indicatorPlacement='bottom' aria-label='User uploads tab'>
          Uploads
        </Tab>
      </TabList>
      <TabPanel aria-label='User profile panel' value={0}>
        <UserProfile />
      </TabPanel>
      <TabPanel aria-label='User settings panel' value={1}>
        <UserSettings />
      </TabPanel>
      <TabPanel aria-label='User uploads panel' value={2}>
        <UserUploads />
      </TabPanel>
    </Tabs>
  );
}
