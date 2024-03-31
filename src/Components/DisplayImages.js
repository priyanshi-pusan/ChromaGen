import React from "react";
import styles from "../styles/Home.module.css";
import ListItem from "./ListItem";

function DisplayImages({ uploadedImage, colorPalette }) {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  return (
    <div className={styles.content}>
      <div className="image">
        {uploadedImage ? (
          <img src={uploadedImage} alt="Uploaded" />
        ) : (
          <h2>Upload an Image Here...</h2>
        )}
      </div>

      {colorPalette && (
        <ul className={styles.colors}>
          {colorPalette.map((color, index) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;

            console.log(rgb, hex);

            return <ListItem key={index} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
}
export default DisplayImages;
