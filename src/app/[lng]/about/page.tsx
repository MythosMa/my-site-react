import { useTranslation } from "@/app/i18n";

export default async function About({
  params: { lng },
}: {
  params: { lng: string };
}) {lng
  const { t } = await useTranslation(lng);
  return <div>{t("about")}</div>;
}
