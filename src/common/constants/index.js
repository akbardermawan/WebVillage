const NAVBAR = [
  { id: 1, name: "HOME", url: "/" },
  { id: 2, name: "ABOUT", url: "/about" },

  {
    id: 3,
    name: "INFORMATION",
    url: "/infomation",
    children: [
      { id: 1, name: "Profile", url: "" },
      { id: 1, name: "Staff Member", url: "" },
      { id: 1, name: "Population", url: "" },
      { id: 2, name: "Development Report", url: "" },
      { id: 3, name: "Cash Report", url: "" },
    ],
  },
  {
    id: 4,
    name: "PRODUCT",
    url: "/product",
    children: [
      { id: 1, name: "Agriculture", url: "" },
      { id: 2, name: "Fisheries", url: "" },
      { id: 3, name: "Tourism", url: "" },
      { id: 4, name: "Industry", url: "" },
    ],
  },
  {
    id: 5,
    name: "SERVICE",
    url: "/service",
    children: [
      { id: 1, name: "Recruitment", url: "" },
      { id: 2, name: "Complaint", url: "" },
    ],
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

export { NAVBAR, ImgSliderHome };
