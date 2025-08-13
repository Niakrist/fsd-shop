import { BannerSlide } from "@/entities";
import { Subscribe } from "@/features";
import { CategoryList } from "@/widgets";

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
