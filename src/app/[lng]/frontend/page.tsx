"use client";

import { useTranslation } from "@/app/i18n/client";
import Slider from "react-slick";

import TwitterHeart from "./twitter-heart";

const Frontend = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, "frontend");

  return (
    <div className="p-4 w-full h-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className=" text-white text-[24px] font-bold">{t("title")}</div>
        <div className="text-[#c8c8c8] text-[14px] font-bold">{t("tip")}</div>
      </div>
      <div className="mt-2 w-full flex-1 text-white">
        <Slider
          className="h-full"
          adaptiveHeight={false}
          infinite={false}
          autoplay={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <TwitterHeart lng={lng} />
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Slider>
      </div>
      {/* <TwitterHeart size={10}></TwitterHeart> */}
    </div>
  );
};

export default Frontend;
