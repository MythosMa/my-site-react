"use client";

import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

const LightButton = ({
  buttonColor,
  textColor,
  lightColor,
  text,
}: {
  buttonColor: string;
  textColor: string;
  lightColor: string;
  text: string;
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (button) {
        // const x = e.offsetX;
        // const y = e.offsetY;
        const mainZoom = parseFloat(
          document.body.style.getPropertyValue("--mainZoom")
        );
        const x = e.offsetX / mainZoom;
        const y = e.offsetY / mainZoom;
        button.style.setProperty("--left", `${x}px`);
        button.style.setProperty("--top", `${y}px`);
      }
    };

    if (button) {
      button.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (button) {
        button.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <a
      ref={buttonRef}
      href="#"
      style={
        {
          "--buttonColor": buttonColor,
          "--textColor": textColor,
          "--lightColor": lightColor,
        } as React.CSSProperties
      }
      className={styles["custom-button"]}
    >
      <span>{text}</span>
    </a>
  );
};

export default LightButton;
