import React, { useState } from "react";
import cn from "classnames";
import styles from "./ProductSlider.module.css";

interface IProductSliderProps {
  images: string[];
}

const ProductSlider = ({ images }: IProductSliderProps): React.JSX.Element => {
  const [slid, setSlide] = useState(images[0]);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.bigSlide}>
        <img className={styles.img} src={slid} alt="" />
      </div>
      <ul className={styles.slider}>
        {images.map((img) => (
          <li
            className={cn(styles.smallSlid, {
              [styles.activeSlide]: slid === img,
            })}
            key={img}
            onClick={() => setSlide(img)}>
            <img className={styles.img} src={img} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSlider;
