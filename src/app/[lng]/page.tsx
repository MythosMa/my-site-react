import { useTranslation } from "@/app/i18n";
import Link from "next/link";

const Home = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, "home");
  return (
    <div className="pl-[5%] pr-[20%] pt-[2%] flex flex-col w-full h-full">
      <div className="text-[18px] text-[#cccccc]">{t("welcome")}</div>
      <div className="mt-6 text-[36px] text-[#ffffff] font-extrabold">
        {t("content")}
      </div>
      <div className="mt-6 flex flex-row items-center text-[#cccccc]">
        <div className="text-[18px] ">{t("buildTip")}</div>
        <Link href={"/projects/run-game/"}>
          <div className="ml-4 text-[18px]  hover:text-[#ffffff]">Run Game</div>
        </Link>
        <div className="mx-2 text-[18px] ">|</div>
        <Link href={"/projects/mess-game/"}>
          <div className="ml-4 text-[18px]  hover:text-[#ffffff]">
            Mess Game
          </div>
        </Link>
        <div className="mx-2 text-[18px] ">|</div>
        <Link href={"/projects/a-star/"}>
          <div className="ml-4 text-[18px]  hover:text-[#ffffff]">A Star</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
