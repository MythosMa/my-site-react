import TabText from "./tab";

export default function Header() {
  return (
    <div className="flex flex-row w-full h-[10vh]">
      <div className="w-1/6 flex items-center justify-center">
        <TabText text="LEFT" />
      </div>
      <div className="w-5/6  flex items-center justify-center">
        <TabText className="mr-4" text="MIDDLE" />
        <TabText className="mr-4" text="MIDDLE" />
        <TabText className="mr-4" text="MIDDLE" />
        <TabText text="MIDDLE" />
      </div>
      <div className="w-1/6  flex items-center justify-center">
        <TabText text="RIGHT" />
      </div>
    </div>
  );
}
