import TabText from "./tab";
import Link from "next/link";

export default function Header({ lng }: { lng: string }) {
  return (
    <div className="flex flex-row items-center justify-center w-full h-[10vh]">
      <div className="w-1/6 flex items-center justify-center">
        <Link href="/">
          <TabText text="Mythos Ma" />
        </Link>
      </div>
      <div className="w-1/6 flex items-center justify-center">
        <Link href="/about">
          <TabText text="Mythos Ma的小简介" />
        </Link>
      </div>
      <div className="w-4/6  flex items-center justify-end">
        <div className="w-1/5">123123123</div>
      </div>
    </div>
  );
}
