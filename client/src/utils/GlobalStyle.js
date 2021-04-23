import homeHero from "../assets/images/home-hero.jpeg";
var themeColor = "#3c99dc";
var whiteText = "white";

const style = {
  themeColor: { backgroundColor: themeColor },
  navBarTextStyle: {
    color: whiteText,
    fontFamily: "Times New Roman",
  },
  homeHero: { backgroundImage: `url(${homeHero})`, backgroundSize: "cover" },
};

export default style;
