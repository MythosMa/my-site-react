import { useTranslation } from "@/app/i18n";

const Home = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, "home");
  return (
    <div className="pl-[5%] pr-[20%] pt-[2%] flex flex-col w-full h-full">
      <div className="text-[18px] text-[#cccccc]">{t("welcome")}</div>
      <div className="mt-6 text-[36px] text-[#ffffff] font-extrabold">
        {t("content")}
      </div>
    </div>
  );
};

export default Home;
