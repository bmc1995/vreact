import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import { UserSettingsForm } from "./UserSettingsForm";

export default function UserSettings() {
  return (
    <Card title="User Settings Card">
      <CardCover>
        <UserSettingsForm />
      </CardCover>
    </Card>
  );
}
