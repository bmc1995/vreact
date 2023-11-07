import { useColorScheme, ListItemButton } from "@mui/joy";

export function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <ListItemButton
      title="Theme Toggle"
      color="neutral"
      variant="plain"
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
        console.log("awef");
      }}
    >
      <h3>{mode === "dark" ? "☀️" : "🌙"}</h3>
    </ListItemButton>
  );
}
