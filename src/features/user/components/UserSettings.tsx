import { Sheet } from '@mui/joy';
import { UserSettingsForm } from './UserSettingsForm';

export default function UserSettings() {
  return (
    <Sheet sx={{ xs: { justifyContent: 'center' } }}>
      <UserSettingsForm />
    </Sheet>
  );
}
