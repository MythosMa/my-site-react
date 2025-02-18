"use client";

import { getSubWebApi, isSubWebDto } from "@/api/subWeb";
import { useTranslation } from "@/app/i18n/client";
import { useRequest } from "@/hooks/useRequest";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Home = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, "home");

  const isFetch = useRef(false);
  const { loading, data, error, fetchData } = useRequest(getSubWebApi);

  useEffect(() => {
    if (!isFetch.current) {
      fetchData();
      isFetch.current = true;
    }
  }, [fetchData]);

  const renderSubWeb = () => {
    return isSubWebDto(data) && data.length ? (
      data.map((item, index) => (
        <>
          <Link href={item.url} target="_blank">
            <div className="text-[18px]  hover:text-[#ffffff]">{item.name}</div>
          </Link>
          {index < data.length - 1 ? (
            <div className="mx-4 text-[18px] ">|</div>
          ) : null}
        </>
      ))
    ) : (
      <></>
    );
  };

  return (
    <div className="pl-[5%] pr-[20%] pt-[2%] flex flex-col w-full h-full">
      <div className="text-[18px] text-[#cccccc]">{t("welcome")}</div>
      <div className="mt-6 text-[36px] text-[#ffffff] font-extrabold">
        {t("content")}
      </div>
      <div className="mt-6 flex flex-row items-center text-[#cccccc]">
        <div className="text-[18px] ">{t("buildTip")}</div>
        {renderSubWeb()}
      </div>
    </div>
  );
};

export default Home;
