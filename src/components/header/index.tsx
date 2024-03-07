import { useTranslation } from "@/app/i18n";

import TabText from "./tab";
import Link from "next/link";

import LanguageSwitcher from "@/components/languageSwitcher";

import styles from "./index.module.scss";

export default async function Header({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "header");
  return (
    <div
      className={[
        styles["header-border"],
        "flex flex-row items-center justify-center w-full h-[10vh] font-bold text-base",
      ].join(" ")}
    >
      <div className="w-1/6 flex items-center justify-center">
        <Link href="/">
          <TabText text={t("name")} />
        </Link>
      </div>
      <div className="w-2/3">
        <div className="w-full flex flex-row items-center justify-center">
          <div className="w-1/6  flex flex-row items-center justify-center">
            <Link href="/frontend">
              <TabText text={t("frontend")} />
            </Link>
          </div>
          <div className="w-1/6  flex flex-row items-center justify-center">
            <Link href="/project">
              <TabText text={t("project")} />
            </Link>
          </div>
          <div className="w-1/6  flex flex-row items-center justify-center">
            <Link href="/about">
              <TabText text={t("about")} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/6  flex items-center justify-center">
        <div className="w-1/5  flex items-center justify-center">
          <LanguageSwitcher lng={lng} />
        </div>
      </div>
    </div>
  );
}
