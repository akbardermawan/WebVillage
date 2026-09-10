const NAVBAR = [
  { id: 1, name: "HOME", url: "/" },
  { id: 2, name: "ABOUT", url: "/about" },

  {
    id: 3,
    name: "INFORMATION",
    url: "/information",
    children: [
      {
        id: 1,
        name: "Profile",
        img: "/svg/profile.svg",
        url: "/information/profile",
      },
      {
        id: 2,
        name: "Staff Member",
        img: "/svg/staff.svg",
        url: "/information/staff",
      },
      {
        id: 3,
        name: "Population",
        img: "/svg/population.svg",
        url: "/information/population",
      },
      {
        id: 4,
        name: "Development Report",
        img: "/svg/development.svg",
        url: "/information/development",
      },
      {
        id: 5,
        name: "Cash Report",
        img: "/svg/report.svg",
        url: "/information/cash",
      },
      {
        id: 6,
        name: "Recruitment",
        img: "/svg/report.svg",
        url: "/information/recruitment",
      },
    ],
  },
  {
    id: 4,
    name: "HIGHLIGHTS",
    url: "/highlights",
    children: [
      { id: 1, name: "Agriculture", url: "/highlights/agriculture" },
      { id: 2, name: "Fisheries", url: "/highlights/fisheries" },
      { id: 3, name: "Tourism", url: "/highlights/tourism" },
      { id: 4, name: "Industry", url: "/highlights/industry" },
    ],
  },
  {
    id: 5,
    name: "SERVICE",
    url: "/service",
    children: [{ id: 2, name: "Complaint", url: "/service" }],
  },
  { id: 6, name: "LOGIN", url: "/login" },
];

const ImgSliderHome = [
  { id: 1, name: "1", img: "/image/resilient-4.jpeg" },
  { id: 2, name: "2", img: "/image/resilient.webp" },
  { id: 3, name: "3", img: "/image/resilient-3.jpg" },
  { id: 4, name: "4", img: "/image/resilient-7.jpeg" },
  { id: 5, name: "5", img: "/image/resilient6.webp" },
];

const HeroImgAbout = [
  { id: 1, name: "1", img: "/image/townhall.jpg" },
  { id: 2, name: "2", img: "/image/staf.jpeg" },
  { id: 3, name: "3", img: "/image/resilient-2.jpg" },
];

export { NAVBAR, ImgSliderHome, HeroImgAbout };
