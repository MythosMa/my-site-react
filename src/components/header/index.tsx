import TabText from "./tab";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row w-full h-[10vh]">
      <div className="w-1/6 flex items-center justify-center">
        <Link href="/">
          <TabText text="Mythos Ma" />
        </Link>
      </div>
      <div className="w-5/6  flex items-center justify-center">
        <TabText className="mr-4" text="MIDDLE" />
        <TabText className="mr-4" text="MIDDLE" />
        <TabText className="mr-4" text="MIDDLE" />
        <TabText text="MIDDLE" />
      </div>
      <div className="w-1/6  flex items-center justify-center">
        <Link href="/about">
          <TabText text="Mythos Ma的小简介" />
        </Link>
      </div>
    </div>
  );
}
