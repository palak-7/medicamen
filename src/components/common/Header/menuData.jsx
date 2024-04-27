const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Company",
    path: "/about",
    newTab: true,
    submenu: [
      {
        id: 42,
        title: "Our Story",
        path: "/our-story",
        newTab: false,
      },
      {
        id: 43,
        title: "Our Values",
        path: "/our-values",
        newTab: false,
      },
      {
        id: 44,
        title: "Our Vision",
        path: "/our-vision",
        newTab: false,
      },
      {
        id: 45,
        title: "Leadership",
        path: "/leadership",
        newTab: false,
      },
      {
        id: 46,
        title: "Diversity Inclusion",
        path: "/diversity-inclusion",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Expertise",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Income Tax",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "GST",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Events",
    path: "/events",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "University Chapters",
        path: "/events/university-chapters",
        newTab: false,
      },
      {
        id: 42,
        title: "School Chapters",
        path: "/events/school-chapters",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Resources",
    path: "/resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Financial Tools",
        path: "/resources/financial-tools",
        newTab: false,
        submenu: [
          {
            id: 33,
            title: "SIP Calculator",
            path: "/sip-calculator",
            newTab: false,
          },
          {
            id: 34,
            title: "EMI Calculator",
            path: "/emi-calculator",
            newTab: false,
          },
        ],
      },
      {
        id: 42,
        title: "Glossary",
        path: "/resources/glossary",
        newTab: false,
      },
      {
        id: 42,
        title: "Insights",
        path: "/resources/insights",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Career",
    path: "/career",
    newTab: false,
  },
  {
    id: 33,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
