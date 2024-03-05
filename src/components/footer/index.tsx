import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-[10vh]">
      <div className="flex items-center justify-center text-[#c0c0c0] hover:text-[#000000]">
        <Link href="https://beian.miit.gov.cn">
          备案号：湘ICP备2023009573号-1
        </Link>
      </div>
    </div>
  );
}
