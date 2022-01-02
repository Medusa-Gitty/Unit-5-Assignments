import { TimerDisplay } from "./TimerDisplay";
import { TimerForm } from "./TimerForm";
import { useState } from "react";
import { useEffect } from "react";

export const Timer = () => {
  const [times, setTimes] = useState({});
  const [counter, setCounter] = useState();

  useEffect(() => {
    console.log(`render from useeffect`);
    const id = setInterval(() => {
      setCounter((p) => {
        console.log(p);
        console.log(times.end);
        if (p === times.end) {
          clearInterval(id);
          return 0;
        }
        return p + 1;
      });
    }, 1000);
    return () => {
      console.log("Unmounting from useeffect");
      clearInterval(id);
    };
  }, [times]);

  const handleClick = (data) => {
    setTimes(data);
    let payload = {
      start: +data.initTime,
      end: +data.endTime,
    };
    setTimes(payload);
    setCounter(payload.start);
  };

  // console.log("Render");

  return (
    <>
      <TimerForm getData={handleClick} />
      <TimerDisplay start={times.start} end={times.end} counter={counter} />
    </>
  );
};
