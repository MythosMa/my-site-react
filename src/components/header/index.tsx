"use client";

import { useTranslation } from "@/app/i18n/client";

import TabText from "./tab";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import LanguageSwitcher from "@/components/languageSwitcher";

import styles from "./index.module.scss";

const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "header");
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<string>("");

  useEffect(() => {
    const pathnameArray = pathname.split("/");
    if (pathnameArray.length > 2) {
      setCurrentPage(pathnameArray[2]);
    } else {
      setCurrentPage("home");
    }
  }, [pathname]);

  return (
    <div className={["flex flex-row items-center w-full h-[10%]"].join(" ")}>
      <div className="w-1/6 text-white text-[20px] font-bold uppercase">
        {t("name")}
      </div>
      <div className="w-2/3 ">
        <div className="w-full flex flex-row items-center">
          <div className={[""].join(" ")}>
            <Link href="/">
              <TabText isCurrent={currentPage === "home"} text={t("home")} />
            </Link>
          </div>
          <div className={["ml-10"].join(" ")}>
            <Link href="/frontend">
              <TabText
                isCurrent={currentPage === "frontend"}
                text={t("frontend")}
              />
            </Link>
          </div>
          <div className={["ml-10"].join(" ")}>
            <Link href="/project">
              <TabText
                isCurrent={currentPage === "project"}
                text={t("project")}
              />
            </Link>
          </div>
          <div className={["ml-10"].join(" ")}>
            <Link href="/work">
              <TabText
                isCurrent={currentPage === "work"}
                text={t("work")}
              />
            </Link>
          </div>
          <div className={["ml-10"].join(" ")}>
            <Link href="/about">
              <TabText isCurrent={currentPage === "about"} text={t("about")} />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-right w-1/6 flex justify-end text-white">
        <LanguageSwitcher lng={lng} />
      </div>
    </div>
  );
};

export default Header;
