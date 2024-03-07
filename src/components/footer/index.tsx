import { useTranslation } from "@/app/i18n";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[10vh] text-[#c0c0c0] ">
      <div className="mb-4 w-full flex flex-row items-center justify-center">
        <div className="w-1/6 text-center hover:text-[#000000]">
          <Link href="https://github.com/MythosMa">GITHUB</Link>
        </div>
        <div className="w-1/6 text-center hover:text-[#000000]">
          <Link href="https://www.cnblogs.com/mythosma-web/">CNBLOG-FRONTEND</Link>
        </div>
        <div className="w-1/6 text-center hover:text-[#000000]">
          <Link href="https://www.cnblogs.com/mythosma/">CNBLOG-GAME</Link>
        </div>
      </div>
      <div className="flex items-center justify-cente hover:text-[#000000]">
        <Link href="https://beian.miit.gov.cn">
          备案号：湘ICP备2023009573号-1
        </Link>
      </div>
    </div>
  );
}
