export default {
  profile: {
    name: "Marcos Rivas",
    onClick: () => {
      console.log("asdasd");
    },
  },
  items: [
    {
      id: 0,
      title: "Home",
      icon: "fa-house-user",
      onClick() {
        console.log("Home");
      },
    },
    {
      id: 1,
      title: "Reports",
      icon: "fa-screwdriver-wrench",
      onClick() {
        console.log("reports");
      },
    },
    {
      id: 2,
      title: "About",
      icon: "fa-fire",
      onClick() {
        console.log("about");
      },
    },
  ],
};
