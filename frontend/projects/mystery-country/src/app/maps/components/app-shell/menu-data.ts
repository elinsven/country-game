import { MenuItem } from "projects/lib/models/menuItem";

export const menuData: MenuItem[] = [
  {
    path: "/maps/how-to-play",
    icon: "help",
    ariaLabel: "Navigates to how to play page"
  },
  {
    path: "/maps/applications",
    icon: "apps",
    ariaLabel: "Navigates to applications page"
  },
  {
    path: "/maps",
    title: "MAPS"
  },
  {
    path: "/maps/leaderboard",
    icon: "leaderboard",
    ariaLabel: "Navigates to leaderboard page"
  },
  {
    path: "/maps/settings",
    icon: "settings",
    ariaLabel: "Navigates to settings page"
  }
]