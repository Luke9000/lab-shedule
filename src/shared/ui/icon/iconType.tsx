import {
    CalendarIcon,
    HomeIcon,
    MapIcon,

  } from "../../assets/icons";
  
  export type IconType =
    | "Calendar"
    | "Home"
    | "Map";
  
  export const iconTypes = new Map([
    ["Calendar", <CalendarIcon key="CalendarIcon" />],
    ["Home", <HomeIcon key="HomeIcon" />],
    ["Map", <MapIcon key="MapIcon" />],
  ]);