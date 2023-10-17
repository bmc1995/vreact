import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Person from "@mui/icons-material/Person";
import viteLogo from "/vite.svg";
import { useColorScheme } from "@mui/joy";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <ListItemButton
      color="neutral"
      variant="plain"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      <h3>{mode === "dark" ? "☀️" : "🌙"}</h3>
    </ListItemButton>
  );
}

export default function NavigationBar() {
  return (
    <Box
      component="nav"
      aria-label="Vreact Template"
      sx={{
        flexGrow: 1,
      }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        sx={{ padding: 0, marginRight: ".75rem", height: "75px" }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#NavHomeBtn"
            aria-label="Home"
          >
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <ListItemButton role="menuitem" component="a" href="#NavBtn">
            Products
          </ListItemButton>
        </ListItem>
        <ListDivider sx={{ margin: 0 }} />
        <ListItem role="none" sx={{ minWidth: "100px" }}>
          <ListItemButton
            role="menuitem"
            component="a"
            sx={{ justifyContent: "center" }}
            href="#NavBtn"
          >
            Blog
          </ListItemButton>
        </ListItem>
        <ListDivider sx={{ margin: 0 }} />
        <ListItem role="none" sx={{ padding: 0 }}>
          <ModeToggle />
          <ListItemButton
            role="menuitem"
            component="a"
            href="#NavBtn"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
