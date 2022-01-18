const menu = [
  {
    url: "/home",
    name: "Home",
    type: "text",
  },
  {
    url: "/categories",
    name: "Categories",
    type: "text",
    subitems: [
      {
        url: "/categories/personal",
        name: "Personal",
        type: "text",
      },
      {
        url: "/categories/health",
        name: "Health",
        type: "text",
      },
      {
        url: "/categories/vehicles",
        name: "Vehicles",
        type: "text",
      },
      {
        url: "/categories/cadaster",
        name: "Cadaster",
        type: "text",
      },
    ],
  },
  {
    url: "/about",
    name: "About Us",
    type: "text",
  },

  {
    url: "/login",
    name: "Log Out",
    type: "text",
  },
];
export default menu;
