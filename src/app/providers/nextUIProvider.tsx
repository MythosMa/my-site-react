"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";

const designWidth = 1920; // 设计稿宽度
const designHeight = 945; // 设计稿高度
const designRatio = designWidth / designHeight; // 设计稿宽高比
const designPadding = 0.04; // 设计稿内边距
const mainWidth = designWidth * (1 - designPadding * 2);
const mainHeight = designHeight - designWidth * designPadding * 2;

export function NextUIProviders({ children }: { children: React.ReactNode }) {
  const handleResize = () => {
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.body.clientHeight;
    const clientRatio = clientWidth / clientHeight;
    const scale =
      clientRatio > designRatio
        ? clientHeight / designHeight
        : clientWidth / designWidth;

    document.body.style.setProperty("--mainZoom", `${scale}`);
    document.body.style.setProperty("--mainWidth", `${mainWidth}`);
    document.body.style.setProperty("--mainHeight", `${mainHeight}`);
  };
  useEffect(() => {
    if (window) {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (window) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return <NextUIProvider>{children}</NextUIProvider>;
}
