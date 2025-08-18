import React, { useState } from "react";
import cn from "classnames";
import styles from "./ReadMore.module.css";

interface IReadMoreProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const ReadMore = ({ children }: IReadMoreProps): React.JSX.Element => {
  const [isHowMore, setIsShowMoew] = useState(false);

  const handleClick = () => {
    setIsShowMoew((prev) => !prev);
  };

  return (
    <div className={styles.readmore}>
      <div
        className={cn(styles.content, {
          [styles.showMore]: isHowMore === true,
        })}>
        {children}
      </div>
      <button onClick={handleClick} className={styles.button}>
        {isHowMore ? "Hidden" : "Read more"}
      </button>
    </div>
  );
};

export default ReadMore;
