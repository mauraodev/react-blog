import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

function ElasticCarousel() {
  return (
    <div className="App">
      <Carousel
        breakPoints={breakPoints}
        initialFirstItem={1}
        itemPadding={[10, 50]}
        enableAutoPlay={true}
        enableMouseSwipe={true}
      >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
      </Carousel>
    </div>
  );
}

export default ElasticCarousel
