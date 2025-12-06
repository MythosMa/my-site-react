import { Params } from "@/types/common";
import { use } from "react";

const Page = async ({ params }: { params: Params }) => {
  const { lng } = use(params);
  return <></>;
};

export default Page;
