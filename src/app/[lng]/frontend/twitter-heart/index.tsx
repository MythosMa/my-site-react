"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const TwitterHeartComponent = ({ size }: { size: number }) => {
  const animDatas = {
    heartAnimationList: [
      "",
      "heart-anim-hidden",
      "heart-anim-show",
      "heart-is-click",
    ],
    ringAnimationList: ["ring-hidden", "ring-anim-hidden", "ring-hidden"],
    circles: [
      {
        size: "20px",
        color: "rgb(166, 223, 211)",
        target: ["20px", "-200px"],
        circleAnimationList: ["circle-hidden", "circle-anim-0"],
      },
      {
        size: "10px",
        color: "rgb(166, 223, 211)",
        target: ["-15px", "-170px"],
        circleAnimationList: ["circle-hidden", "circle-anim-1"],
      },
      {
        size: "20px",
        color: "rgb(210, 225, 164)",
        target: ["170px", "-120px"],
        circleAnimationList: ["circle-hidden", "circle-anim-2"],
      },
      {
        size: "10px",
        color: "rgb(210, 225, 164)",
        target: ["120px", "-120px"],
        circleAnimationList: ["circle-hidden", "circle-anim-3"],
      },
      {
        size: "20px",
        color: "rgb(100, 200, 157)",
        target: ["190px", "60px"],
        circleAnimationList: ["circle-hidden", "circle-anim-4"],
      },
      {
        size: "10px",
        color: "rgb(100, 200, 157)",
        target: ["170px", "10px"],
        circleAnimationList: ["circle-hidden", "circle-anim-5"],
      },
      {
        size: "20px",
        color: "rgb(215, 164, 190)",
        target: ["65px", "180px"],
        circleAnimationList: ["circle-hidden", "circle-anim-6"],
      },
      {
        size: "10px",
        color: "rgb(215, 164, 190)",
        target: ["90px", "140px"],
        circleAnimationList: ["circle-hidden", "circle-anim-7"],
      },
      {
        size: "20px",
        color: "rgb(189, 114, 220)",
        target: ["-110px", "150px"],
        circleAnimationList: ["circle-hidden", "circle-anim-8"],
      },
      {
        size: "10px",
        color: "rgb(189, 114, 220)",
        target: ["-60px", "140px"],
        circleAnimationList: ["circle-hidden", "circle-anim-9"],
      },
      {
        size: "20px",
        color: "rgb(189, 114, 220)",
        target: ["-195px", "15px"],
        circleAnimationList: ["circle-hidden", "circle-anim-10"],
      },
      {
        size: "10px",
        color: "rgb(189, 114, 220)",
        target: ["-160px", "45px"],
        circleAnimationList: ["circle-hidden", "circle-anim-11"],
      },
      {
        size: "20px",
        color: "rgb(156, 133, 203)",
        target: ["-140px", "-150px"],
        circleAnimationList: ["circle-hidden", "circle-anim-12"],
      },
      {
        size: "10px",
        color: "rgb(156, 133, 203)",
        target: ["-135px", "-100px"],
        circleAnimationList: ["circle-hidden", "circle-anim-13"],
      },
    ],
  };

  const [heartAnimationStep, setHeartAnimationStep] = useState(0);
  const [ringAnimationStep, setRingAnimationStep] = useState(0);
  const [circlesAnimationStep, setCirclesAnimationStep] = useState(
    animDatas.circles.map(() => 0)
  );

  const heartAnimRef = useRef<HTMLDivElement>(null);
  const ringAnimRef = useRef<HTMLDivElement>(null);
  const circlesAnimRefs = Array.from({ length: animDatas.circles.length }, () =>
    useRef<HTMLDivElement>(null)
  );

  const animationCallback = (value: AnimationEvent) => {
    value.animationName.includes("heart") &&
      setHeartAnimationStep(heartAnimationStep + 1);
    value.animationName.includes("ring") &&
      setRingAnimationStep(ringAnimationStep + 1);
    animDatas.circles.forEach((circle, index) => {
      if (value.animationName.includes("circle-anim-" + index)) {
        circlesAnimationStep[index] += 1;
      }
    });
    setCirclesAnimationStep(circlesAnimationStep);
  };

  const handleClick = () => {
    if (
      heartAnimationStep === 0 ||
      heartAnimationStep === animDatas.heartAnimationList.length - 1
    ) {
      setHeartAnimationStep(
        heartAnimationStep + 1 >= animDatas.heartAnimationList.length
          ? 0
          : heartAnimationStep + 1
      );
      setRingAnimationStep(
        ringAnimationStep + 1 >= animDatas.ringAnimationList.length
          ? 0
          : ringAnimationStep + 1
      );
      animDatas.circles.map((circle, index) => {
        circlesAnimationStep[index] =
          circlesAnimationStep[index] + 1 >= circle.circleAnimationList.length
            ? 0
            : circlesAnimationStep[index] + 1;
      });
      setCirclesAnimationStep(circlesAnimationStep);
    }
  };
  useEffect(() => {
    if (heartAnimRef.current) {
      heartAnimRef.current.addEventListener("animationend", animationCallback);
    }
    if (ringAnimRef.current) {
      ringAnimRef.current.addEventListener("animationend", animationCallback);
    }
    for (let i = 0; i < animDatas.circles.length; i++) {
      const circleAnimRef = circlesAnimRefs[i];
      if (circleAnimRef.current) {
        circleAnimRef.current.addEventListener(
          "animationend",
          animationCallback
        );
      }
    }

    return () => {
      if (heartAnimRef.current) {
        heartAnimRef.current.removeEventListener(
          "animationend",
          animationCallback
        );
      }
      if (ringAnimRef.current) {
        ringAnimRef.current.removeEventListener("animationend", animationCallback);
      }
      for (let i = 0; i < animDatas.circles.length; i++) {
        const circleAnimRef = circlesAnimRefs[i];
        if (circleAnimRef.current) {
          circleAnimRef.current.removeEventListener("animationend", animationCallback);
        }
      }
    };
  }, [animationCallback]);

  return (
    <div
      className={styles["container"]}
      style={{ "--zoomRate": size / 100 } as React.CSSProperties}
      onClick={handleClick}
    >
      <div
        ref={heartAnimRef}
        className={[
          styles.heart,
          styles[animDatas.heartAnimationList[heartAnimationStep]],
        ].join(" ")}
      >
        <div className={styles["heart-left"]} />
        <div className={styles["heart-right"]} />
        <div className={styles["heart-square"]} />
      </div>
      <div
        ref={ringAnimRef}
        className={[
          styles.ring,
          styles[animDatas.ringAnimationList[ringAnimationStep]],
        ].join(" ")}
      />
      {animDatas.circles.map((circle, index) => {
        return (
          <div
            ref={circlesAnimRefs[index]}
            key={`circle-${index}`}
            className={
              styles[circle.circleAnimationList[circlesAnimationStep[index]]]
            }
            style={{
              width: circle.size,
              height: circle.size,
              borderRadius: "50%",
              backgroundColor: circle.color,
              position: "absolute",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default TwitterHeartComponent;
