"use client";

import { useTranslation } from "@/app/i18n/client";
import { Params } from "@/types/common";
import { use } from "react";

export default function About({ params }: { params: Params }) {
  const { lng } = use(params);
  const { t } = useTranslation(lng, "about");
  return <div>{t("about")}</div>;
}
