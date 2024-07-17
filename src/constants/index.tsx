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
    icon: <DashboardIcon stroke="#343638" />,
    activeIcon: <DashboardIcon stroke="#214528" />,
  },
  {
    label: "Users",
    url: "/users",
    icon: <UsersIcon stroke="#343638" />,
    activeIcon: <UsersIcon stroke="#214528" />,
  },
  {
    label: "Vehicles",
    url: "/vehicles",
    icon: <VehiclesIcon stroke="#343638" />,
    activeIcon: <VehiclesIcon stroke="#214528" />,
  },
  {
    label: "Drivers",
    url: "/drivers",
    icon: <DriversIcon stroke="#343638" />,
    activeIcon: <DriversIcon stroke="#214528" />,
  },
  {
    label: "Fleet Owners",
    url: "/fleet-owners",
    icon: <FleetIcon stroke="#343638" />,
    activeIcon: <FleetIcon stroke="#214528" />,
  },
  {
    label: "Payment",
    url: "/payment",
    icon: <PaymentIcon stroke="#343638" />,
    activeIcon: <PaymentIcon stroke="#214528" />,
  },
  {
    label: "Ratings and Reviews",
    url: "/ratings-reviews",
    icon: <RatingsIcon stroke="#343638" />,
    activeIcon: <RatingsIcon stroke="#214528" />,
  },
  {
    label: "Promotions",
    url: "/promotions",
    icon: <PromotionIcon stroke="#343638" />,
    activeIcon: <PromotionIcon stroke="#214528" />,
  },
  {
    label: "User Management",
    url: "/user-mgt",
    icon: <UserMgtIcon stroke="#343638" />,
    activeIcon: <UserMgtIcon stroke="#214528" />,
  },
  {
    label: "Settings",
    url: "/settings",
    icon: <SettingsIcon stroke="#343638" />,
    activeIcon: <SettingsIcon stroke="#214528" />,
  },
];
