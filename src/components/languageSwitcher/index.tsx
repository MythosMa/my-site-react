"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "@/app/i18n/client";

import { languages } from "@/app/i18n/config";

export default function LanguageSwitcher({ lng }: { lng: string }) {
  const { t, i18n } = useTranslation(lng, "language");

  const onSelectChange = (e: any) => {
    if (
      languages.includes(e.currentKey) &&
      window &&
      window.location.pathname
    ) {
      const pathArray = window.location.pathname.split("/");
      if (pathArray.length >= 2 && languages.includes(pathArray[1])) {
        pathArray[1] = e.currentKey;
        window.location.pathname = pathArray.join("/");
      }
    }
  };

  const renderSelectItems = () => {
    return languages
      .filter((item) => item !== lng)
      .map((language) => {
        return <DropdownItem key={language}>{t(language)}</DropdownItem>;
      });
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex items-center">
          <GlobeAltIcon className="w-4 h-4" />
          <div className="ml-2">{t(lng)}</div>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language Switch"
        variant="flat"
        selectionMode="single"
        onSelectionChange={onSelectChange}
      >
        {renderSelectItems()}
      </DropdownMenu>
    </Dropdown>
  );
}
