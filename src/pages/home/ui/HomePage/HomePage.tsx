import { BannerSlide } from "@/entities";
import { CategoryList, Subscribe } from "@/widgets";

import React from "react";

const HomePage = (): React.JSX.Element => {
  return (
    <>
      <BannerSlide />
      <CategoryList />
      <Subscribe />
    </>
  );
};

export default HomePage;
