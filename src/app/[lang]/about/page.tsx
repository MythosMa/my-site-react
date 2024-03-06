import { useTranslation } from "@/app/i18n";

export default async function About({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang);
  return <div>{t("about")}</div>;
}
