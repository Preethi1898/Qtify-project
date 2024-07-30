import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Stack from "@mui/material/Stack";
import { color } from "@mui/system";

const Section = ({ title, data, type }) => {
  const [caroselToggle, setCaroselToggle] = useState();
  console.log(data);
  const handleToggle = () => {
    setCaroselToggle(!caroselToggle);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };
  return (
    <div style={{ bgcolor:"black"}}>
      <div className={styles.header}>
        <h3 style={{color:"white"}}>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {caroselToggle ? "Show all" : "Collapse all"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!caroselToggle ? (
            <div className={styles.wrapper} >
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Slider  {...settings}>
							{data.map((ele, i) => (

									<Card key={i} data={ele} type={type} />
							))}
						</Slider>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;