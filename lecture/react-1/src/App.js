import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from "./components/ImgText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts="nexon" />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon", "gray"]} />
        <Card skill={["section", "nexon"]} />
        <Banner skill={["section", "gmarket"]} />
        <Text skill={["section", "nexon"]} />
      </Contents>
      <Footer skill={["section", "nexon", "gray"]} />
    </>
  );
}

export default App;
