"use client";

import { useTranslation } from "@/app/i18n/client";

const TwitterHeart = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "frontend");
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-1/2 h-full flex flex-col justify-center text-white">
        <div className="text-[14px] font-bold">{t("twitter-heart.title")}</div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default TwitterHeart;
