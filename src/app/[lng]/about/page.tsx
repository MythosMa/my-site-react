"use client";

import { useTranslation } from "@/app/i18n/client";
import { Params } from "@/types/common";
import { use } from "react";

const About = ({ params }: { params: Params }) => {
  const { lng } = use(params);
  const { t } = useTranslation(lng, "about");
  return <div>{t("about")}</div>;
};

export default About;
