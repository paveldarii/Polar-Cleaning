import homeHero from "../assets/images/home-hero.jpeg";
var themeColor = "white";

const style = {
  themeColor: { backgroundColor: themeColor },
  navBarTextStyle: {
    fontFamily: "Fira Sans, sans-serif",
  },
  homeHero: {
    //backgroundImage: `url(${homeHero})`,
    fontFamily: "",
    backgroundColor: "#bcd7ec",
    backgroundSize: "cover",
    margin: "50px 0 0 0 ",
    height: "60vh",
    color: "#515151",
  },
};
export const centerText = {
  textAlign: "center",
};
export const secondaryTheme = {
  backgroundColor: "#27bbdc",
};
export const tertialTheme = {
  backgroundColor: "#354a5d",
};
export const quaternaryTheme = {
  backgroundColor: "#f4f2f2",
};
export const titleColor = {
  color: "#e49038",
};
export default style;
