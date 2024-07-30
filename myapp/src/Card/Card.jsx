import React from "react";
import styles from "./Card.module.css";
import {Chip,Tooltip } from "@mui/material";

const Card=({data,type})=>{
   
    const { image, follows, title, songs } = data;
    return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album"/>
              <div className={styles.banner}>
                <Chip
                  className={styles.chip}
                  label={`${follows} Follows`}
                  Follows
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        
      );
}
export default Card;