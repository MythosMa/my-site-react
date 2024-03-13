"use client";

import { useTranslation } from "@/app/i18n/client";
import Slider from "react-slick";

import styled from "styled-components";
import styles from "./page.module.scss";

import SlickItem from "./components/slick-item";
import TiwtterHeart from "./twitter-heart";
import React from "react";

const StyledSlider = styled(Slider)`
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }
`;

const Frontend = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, "frontend");

  const Items: {
    component: React.ReactNode;
    content: { title: string; list: string[] };
  }[] = [
    {
      component: <TiwtterHeart size={100} />,
      content: {
        title: t("twitter-heart.title"),
        list: [
          t("twitter-heart.description.1"),
          t("twitter-heart.description.2"),
          t("twitter-heart.description.3"),
          t("twitter-heart.description.4"),
        ],
      },
    },
  ];

  const renderSlickItem = (key: string, children: React.ReactNode) => {
    return (
      <div key={key} className={"w-full h-full p-4"}>
        <div
          className={[styles["slick-item-container"], "w-full h-full"].join(
            " "
          )}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 w-full h-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className=" text-white text-[24px] font-bold">{t("title")}</div>
        <div className="text-[#c8c8c8] text-[14px] font-bold">{t("tip")}</div>
      </div>
      <div className="mt-2 w-full flex-1 text-white">
        <StyledSlider
          className="h-full"
          infinite={false}
          autoplay={false}
          responsive={[
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              },
            },
          ]}
          slidesToShow={4}
          slidesToScroll={1}
        >
          {Items &&
            Items.length &&
            Items.map((item, index) => {
              return renderSlickItem(
                `slick-item-` + index,
                <SlickItem {...item}></SlickItem>
              );
            })}
        </StyledSlider>
      </div>
    </div>
  );
};

export default Frontend;
