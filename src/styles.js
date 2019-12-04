import bg from "./Assets/Speedback-bg.png";
export const allRadius = 35;
export const colors = {
  indigo: "#26324B",
  aqua: "#42C8C2",
  hovergreen: "#3bb1ac",
  orange: "#f8a339",
  coral: "#f42948",
  grey: "#00000040"
};

// Feedback

export const submitButtonStyle = {
  borderRadius: allRadius,
  height: 50,
  position: "absolute",
  bottom: "4%",
  width: "87%"
};

export const formStyle = {
  height: "100%",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "column"
};

// Pairs

export const stationStyle = {
  height: "fit-content",
  textAlign: "center",
  marginTop: 10,
  textTransform: "capitalize"
};

export const pairContentStyle = {
  padding: 10,
  borderRadius: 4,
  flexWrap: "wrap",
  overflow: "auto",
  margin: "auto",
  width: "100%",
  height: "80%",
  textAlign: "center"
};

export const stationInnerStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

// Question

export const oddOneBodyStyle = {
  height: 190,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

export const questionBodyStyle = {
  height: 220,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: 10
};

// Round

export const titleStyle = {
  fontWeight: 400,
  textAlign: "center",
  margin: "auto",
  width: "100%"
};

// Settings

export const radioStyle = {
  width: "33%",
  textAlign: "center",
  height: 50,
  display: "inline-grid"
};

export const selectStyle = {
  overflow: "auto",
  textTransform: "capitalize",
  width: "100%"
};

export const captionStyle = {
  color: colors.aqua,
  fontSize: 12,
  lineHeight: 3
};

// App

export const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "linear-gradient(to top right, #f8a339, #f42948)"
};

export const linesStyle = {
  width: "100%",
  height: "100vh",
  marginTop: "-80%",
  position: "fixed"
};

export const appStyle = {
  height: "100vh",
  maxHeight: 750,
  width: "100%",
  maxWidth: 420,
  margin: "0px auto",
  padding: "2% 2% 3%",
  fontFamily: "Gotham Rounded Medium"
};

export const mainStyle = {
  height: "85%",
  borderRadius: allRadius
};

export const innerStyle = {
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

export const topRowStyle = { height: "10%", textAlign: "center" };
