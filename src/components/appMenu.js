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
        url: "/personal",
        name: "Personal",
        type: "text",
      },
      {
        url: "/health",
        name: "Health",
        type: "text",
      },
      {
        url: "/vehicles",
        name: "Vehicles",
        type: "text",
      },
      {
        url: "/cadaster",
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
