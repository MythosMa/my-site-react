"use client";

import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "@/app/i18n/client";

import { languages } from "@/app/i18n/config";
import { Dropdown, MenuProps } from "antd";

import styles from "./index.module.scss";

export default function LanguageSwitcher({ lng }: { lng: string }) {
  const { t, i18n } = useTranslation(lng, "language");

  const onSelectChange = (e: any) => {
    if (languages.includes(e) && window && window.location.pathname) {
      const pathArray = window.location.pathname.split("/");
      if (pathArray.length >= 2 && languages.includes(pathArray[1])) {
        pathArray[1] = e;
        window.location.pathname = pathArray.join("/");
      }
    }
  };

  const menuItems: MenuProps["items"] = languages
    .filter((item) => item !== lng)
    .map((item) => {
      return {
        key: item,
        label: (
          <div
            className="flex items-center justify-center"
            onClick={() => {
              onSelectChange(item);
            }}
          >
            {t(item)}
          </div>
        ),
      };
    });

  return (
    <Dropdown
      overlayClassName={styles["custom-dropdown"]}
      menu={{ items: menuItems }}
      getPopupContainer={(node) => node.parentNode as HTMLElement}
    >
      <div className="flex items-center cursor-pointer">
        <GlobeAltIcon className="w-4 h-4" />
        <div className="ml-2">{t(lng)}</div>
      </div>
    </Dropdown>
  );
}
