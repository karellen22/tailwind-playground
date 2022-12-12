import MenuButtonType from "../../constants/MenuButtonType";
import CalendarIcon from "../icons/CalendarIcon";
import ChartPieIcon from "../icons/ChartPieIcon";
import FilmIcon from "../icons/FilmIcon";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import TvIcon from "../icons/TvIcon";

export const navbarItems = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    className: "mt-4",
    menuButtonType: MenuButtonType.Home,
  },
  {
    id: 1,
    icon: <SearchIcon />,
    text: "Search",
    menuButtonType: MenuButtonType.Search,
  },
  {
    id: 2,
    icon: <TvIcon />,
    text: "TV Shows",
    menuButtonType: MenuButtonType.TvShows,
  },
  {
    id: 3,
    icon: <FilmIcon />,
    text: "Movies",
    menuButtonType: MenuButtonType.Movies,
  },
  {
    id: 4,
    icon: <CalendarIcon />,
    text: "Calendar",
    menuButtonType: MenuButtonType.Calendar,
  },
  {
    id: 5,
    icon: <ChartPieIcon />,
    text: "Statistics",
    menuButtonType: MenuButtonType.Statistics,
  },
];
