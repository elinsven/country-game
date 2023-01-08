import { MenuItem } from "projects/lib/models/menuItem";

export const menuData: MenuItem[] = [
  {
    path: "/maps/leaderboard",
    title: "Leaderboard",
    icon: "leaderboard",
    ariaLabel: "To the 'Leaderboard' page"
  },
  {
    path: "/maps/games",
    title: "Other games",
    icon: "apps",
    ariaLabel: "To the 'Other games' page"
  },
  {
    path: "/maps/how-to-play",
    title: "Help",
    icon: "help",
    ariaLabel: "To the 'Help' page",
  },
  {
    path: "/maps/settings",
    title: "Settings",
    icon: "settings",
    ariaLabel: "To the 'Settings' page"
  }
];