import {
  DashboardIcon,
  DriversIcon,
  FleetIcon,
  PaymentIcon,
  PromotionIcon,
  RatingsIcon,
  SettingsIcon,
  UserMgtIcon,
  UsersIcon,
  VehiclesIcon,
} from "./images";

export const navigations = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: <DashboardIcon fill="#343638" />,
    activeIcon: <DashboardIcon fill="#214528" />,
  },
  {
    label: "Users",
    url: "/users",
    icon: <UsersIcon fill="#343638" />,
    activeIcon: <UsersIcon fill="#214528" />,
  },
  {
    label: "Vehicles",
    url: "/vehicles",
    icon: <VehiclesIcon fill="#343638" />,
    activeIcon: <VehiclesIcon fill="#214528" />,
  },
  {
    label: "Drivers",
    url: "/drivers",
    icon: <DriversIcon fill="#343638" />,
    activeIcon: <DriversIcon fill="#214528" />,
  },
  {
    label: "Fleet Owners",
    url: "/fleet-owners",
    icon: <FleetIcon fill="#343638" />,
    activeIcon: <FleetIcon fill="#214528" />,
  },
  {
    label: "Payment",
    url: "/payment",
    icon: <PaymentIcon fill="#343638" />,
    activeIcon: <PaymentIcon fill="#214528" />,
  },
  {
    label: "Ratings and Reviews",
    url: "/ratings-reviews",
    icon: <RatingsIcon fill="#343638" />,
    activeIcon: <RatingsIcon fill="#214528" />,
  },
  {
    label: "Promotions",
    url: "/promotions",
    icon: <PromotionIcon fill="#343638" />,
    activeIcon: <PromotionIcon fill="#214528" />,
  },
  {
    label: "User Management",
    url: "/user-mgt",
    icon: <UserMgtIcon fill="#343638" />,
    activeIcon: <UserMgtIcon fill="#214528" />,
  },
  {
    label: "Settings",
    url: "/settings",
    icon: <SettingsIcon fill="#343638" />,
    activeIcon: <SettingsIcon fill="#214528" />,
  },
];
