const menuData = [
  {
    id: 1,
    title: "Home",
    newTab: true,
    path: "/",
  },
  {
    id: 2,
    title: "Who We Are",
    newTab: true,
    submenu: [
      {
        id: 21,
        title: "The Corporate",
        newTab: true,
        submenu: [
          {
            id: 211,
            title: "Key MileStones",
            path: "/who-we-are/corporate/key-milestones",
            newTab: false,
          },
          {
            id: 212,
            title: "Chairman's Desk",
            path: "/who-we-are/corporate/chairman-desk",
            newTab: false,
          },
          {
            id: 213,
            title: "Overview",
            path: "/who-we-are/corporate/overview",
            newTab: false,
          },
          {
            id: 214,
            title: "Our Board of Directors",
            path: "/who-we-are/corporate/board-of-directors",
            newTab: false,
          },
          {
            id: 215,
            title: "Our Leadership and Team",
            path: "/who-we-are/corporate/leadership",
            newTab: false,
          },
          {
            id: 216,
            title: "CSR",
            path: "/who-we-are/corporate/csr",
            newTab: false,
          },
        ],
      },
      {
        id: 22,
        title: "Global Presence",
        newTab: true,
        submenu: [
          {
            id: 221,
            title: "Global Footprints",
            path: "/who-we-are/global-presence/global-footprints",
            newTab: false,
          },
          {
            id: 222,
            title: "Global Accreditation",
            path: "/who-we-are/global-presence/global-accreditation",
            newTab: false,
          },
          {
            id: 223,
            title: "Awards and Recognitions",
            path: "/who-we-are/global-presence/awards-and-recognitions",
            newTab: false,
          },
        ],
      },
      {
        id: 23,
        title: "Corporate Governance",
        newTab: false,
        submenu: [
          {
            id: 231,
            title: "Code of Conduct BMID",
            path: "/pdfs/pdf1.pdf",
            newTab: false,
          },
          {
            id: 232,
            title: "Code of conduct for Disclosure",
            path: "/pdfs/pdf2.pdf",
            newTab: false,
          },
          {
            id: 233,
            title: "Code of Conduct",
            path: "/pdfs/pdf3.pdf",
            newTab: false,
          },
          {
            id: 234,
            title: "Familiarization Programme For Independent Directors",
            path: "/pdfs/pdf4.pdf",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Infrastructure",
    newTab: true,
    submenu: [
      {
        id: 31,
        title: "The Corporate",
        newTab: true,
        submenu: [
          {
            id: 311,
            title: "Bhiwadi Plant",
            path: "/infrastructure/corporate/bhiwadi-plant",
            newTab: false,
          },
          {
            id: 312,
            title: "Haridwar Unit-I",
            path: "/sickelcell/defination/complications",
            newTab: false,
          },
          {
            id: 313,
            title: "Haridwar Unit-II",
            path: "/sickelcell/defination/treatments",
            newTab: false,
          },
          {
            id: 314,
            title: "FACILITY TOUR",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
        ],
      },
      {
        id: 32,
        title: "Global Presence",
        newTab: true,
        submenu: [
          {
            id: 321,
            title: "API DAHEJ PLANT",
            path: "/sickelcell/defination/types",
            newTab: false,
          },
        ],
      },
      {
        id: 33,
        title: "Corporate Governance",
        newTab: false,
        submenu: [
          {
            id: 331,
            title: "Corporate Research and Development",
            path: "/sickelcell/defination/types",
            newTab: false,
          },
          {
            id: 332,
            title: "Facility Tour R&D",
            path: "/sickelcell/defination/complications",
            newTab: false,
          },
          {
            id: 333,
            title: "Quality",
            path: "/sickelcell/defination/treatments",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Product and Therapy",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Therapy",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "Cancer Care",
            path: "/sickelcell/defination/types",
            newTab: false,
          },
          {
            id: 412,
            title: "Cardiology",
            path: "/sickelcell/defination/complications",
            newTab: false,
          },
          {
            id: 413,
            title: "CNS",
            path: "/sickelcell/defination/treatments",
            newTab: false,
          },
          {
            id: 414,
            title: "Diabetology",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
          {
            id: 415,
            title: "Anti-Infective",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
          {
            id: 416,
            title: "Anti-Malarial",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
          {
            id: 417,
            title: "Vitamins and Supplements",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
          {
            id: 418,
            title: "Pain Management",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
        ],
      },
      {
        id: 42,
        title: "Products",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "Cancer Care",
            path: "/sickelcell/defination/types",
            newTab: false,
          },
          {
            id: 412,
            title: "Cardiology",
            path: "/sickelcell/defination/complications",
            newTab: false,
          },
          {
            id: 413,
            title: "CNS",
            path: "/sickelcell/defination/treatments",
            newTab: false,
          },
          {
            id: 414,
            title: "Diabetology",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
          {
            id: 415,
            title: "Other Generics",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
          {
            id: 416,
            title: "Pain Management",
            path: "/sickelcell/defination/glossary",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Investor",
    newTab: false,
    path: "/news",
  },
  {
    id: 6,
    title: "News",
    newTab: false,
    path: "/news",
  },
  {
    id: 7,
    title: "Career",
    newTab: false,
    path: "/news",
  },
  {
    id: 8,
    title: "Contact Us",
    newTab: false,
    path: "/news",
  },
];
export default menuData;
