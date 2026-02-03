"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { Word, WordCloud, WordCloudProps } from "@isoterik/react-word-cloud";
import { useRequest } from "@/hooks/useRequest";
import {
  getWordCloudsApi,
  getWorksApi,
  isWordCloudDto,
  isWorkDto,
} from "@/api/work";

const Work = () => {
  const isWordCloudFetch = useRef(false);
  const {
    loading: wordCloudLoading,
    data: wordCloudDatas,
    error: wordCloudError,
    fetchData: fetchWordClouds,
  } = useRequest(getWordCloudsApi);

  useEffect(() => {
    if (!isWordCloudFetch.current) {
      fetchWordClouds();
      isWordCloudFetch.current = true;
    }
  }, [fetchWordClouds]);

  const isWorkFetch = useRef(false);
  const {
    loading: workLoading,
    data: workDatas,
    error: workError,
    fetchData: fetchWorks,
  } = useRequest(getWorksApi);

  useEffect(() => {
    if (!isWorkFetch.current) {
      fetchWorks();
      isWorkFetch.current = true;
    }
  }, [fetchWorks]);

  const [hoverInDotIndex, setHoverInDotIndex] = useState<number>(-1);

  const renderInfo = () => {
    if (
      hoverInDotIndex === -1 ||
      !isWorkDto(workDatas) ||
      workDatas.length === 0 ||
      hoverInDotIndex >= workDatas.length
    ) {
      return null;
    }
    const item = workDatas[hoverInDotIndex];
    return (
      <>
        <div className="markdown-body">
          <Markdown rehypePlugins={[remarkGfm]}>{item.description}</Markdown>
        </div>
      </>
    );
  };

  const rotationWeights: number[] = [0, 0, 90, 270];
  const resolveRotate: WordCloudProps["rotate"] = () => {
    return rotationWeights[Math.floor(Math.random() * rotationWeights.length)];
  };
  const renderWordCloud = () => {
    return (
      <div className={styles["info-word-cloud"]}>
        <WordCloud
          words={
            isWordCloudDto(wordCloudDatas)
              ? wordCloudDatas.map((item) => {
                  return { text: item.text, value: item.value };
                })
              : []
          }
          width={700}
          height={200}
          fill={"white"}
          transition="all .3s ease"
          timeInterval={1}
          rotate={resolveRotate}
          random={Math.random}
        />
      </div>
    );
  };

  return (
    <>
      <div className={styles["timeline-container"]}>
        <div className={styles["line"]}></div>
        <div className={styles["dot-container"]}>
          {isWorkDto(workDatas) &&
            workDatas.map((item, index) => (
              <div key={index} className={styles["dot-wrapper"]}>
                <div
                  className={styles["dot"]}
                  onMouseEnter={() => setHoverInDotIndex(index)}
                ></div>
                <span className={styles["year"]}>{item.year}</span>
              </div>
            ))}
        </div>
        {renderWordCloud()}
        <div className={styles["info-background"]}>
          <div className={styles["info-container"]}>{renderInfo()}</div>
        </div>
      </div>
    </>
  );
};

export default Work;
