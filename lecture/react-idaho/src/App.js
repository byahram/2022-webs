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
        <Slider skill={["nexon", "슬라이드 유형"]} />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon", "gray", "이미지 텍스트 유형"]} />
        <Card skill={["section", "nexon"]} />
        <Banner skill={["section", "gmarket", "배너 영역"]} />
        <Text skill={["section", "nexon"]} />
      </Contents>
      <Footer skill={["section", "nexon", "gray", "푸터 영역"]} />
    </>
  );
}

export default App;
