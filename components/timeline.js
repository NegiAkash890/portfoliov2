import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styles from "../styles/timeline.module.css";
function Timeline({ activeIndex, data, setActiveIndex }) {
  const move = (type) => {
    console.log(activeIndex, type);
    if (activeIndex == data?.length - 1 && type === "next") {
      setActiveIndex(0);
    } else if (activeIndex == 0 && type === "prev") {
      setActiveIndex(data?.length - 1);
    } else {
      switch (type) {
        case "prev":
          setActiveIndex(activeIndex - 1);
          return;
        case "next":
          setActiveIndex(activeIndex + 1);
          return;
        default:
          return activeIndex;
      }
    }
  };
  //   useEffect(() => {
  //     setTimeout(() => {
  //         move('next');
  //       }, 4000)
  //   },[activeIndex]);

  return (
    <>
      <div className={styles["timeline_bar"]}>
        <div id={styles["timeline_status_marker"]}>
          <ul id={styles[`timeline_steps_${activeIndex}`]}>
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    activeIndex >= index
                      ? styles["timeline_step"]
                      : styles["timeline_step_disabled"]
                  }
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
      <ul className={styles["cd-timeline-navigation"]}>
        <li>
          <a className={styles["prev"]} onClick={() => move("prev")}>
            &lt;
          </a>
        </li>
        <li>
          <a className={styles["next"]} onClick={() => move("next")}>
            &gt;
          </a>
        </li>
      </ul>
      <div className={styles["events-content"]}>
        <div className={styles["selected"]} data-date="16/01/2014">
          <em>{data[activeIndex].date}</em>
          <Text mt={4} fontSize={"1.2rem"} minH="120px">
            {data[activeIndex].content}
          </Text>

          <Text my={4}>Highlights</Text>
          <Text>+ {data[activeIndex].highlight}</Text>
        </div>
      </div>
    </>
  );
}

export default Timeline;
