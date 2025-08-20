import React from "react";
import styles from "./Title.module.css";
import { Htag, Label } from "@/shared/ui";
import type { ITitleProps } from "./Title.props";

const Title = ({ title, tag, link }: ITitleProps): React.JSX.Element => {
  return (
    <div className={styles.title}>
      <Htag color="black" tag={tag} size="medium">
        {title}
      </Htag>
      {!!link && <Label link={link}>All {title}</Label>}
    </div>
  );
};

export default Title;
