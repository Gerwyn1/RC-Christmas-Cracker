import { useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";

import SvgStageOne from "./SvgStageOne";

/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor }) => {
  const crackerPicked = useRef();

  const crackerAnimation = {
    animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    transform: "rotate(-10deg) translate3d(0, 0, 0)",
    backfaceVisibility: "hidden",
    perspective: "1000px",
  };

  // onClick={() => {
  //   setStage("cracker picked");
  //   setColor("g");
  // }}

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <SvgStageOne />
    </div>

    // style={{width: '210mm', height: '297mm'}}

    // <svg
    //   width="210mm"
    //   height="297mm"
    //   version="1.1"
    //   viewBox="0 0 210 297"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    // >
    //   <g>
    //     <image
    //       x="-691.5"
    //       y="-272.4"
    //       width="381.4"
    //       height="677.7"
    //       style={{ stroke: "#000000" }}
    //       preserveAspectRatio="none"
    //       xlinkHref={imageSrc}
    //     />
    //     <path
    //       d="m-544 268-85.66-61.28 5.911-16.7-1.492-1.306-14.55 10.63-22.71-16.14 33.91-47.85 22.2 15.11 0.8141 0.8148-4.254 11.84-0.2638 5.079 0.7585 0.7255 0.6926-0.0989 0.3298 0.0989 13.32-10.39 8.476 6.002 7.058 5.112 5.145 3.232 11.02 8.179 13.01 9.281 14.78 22.81 16.32-5.13 0.9794 1.492-0.7929 0.9794-0.8862 2.239-0.9794 2.892-7.369 8.115 15.46 23.6 22.25-14.48 19.28 13.69-27.84 8.304-0.2447-0.3562-43.57 13.8-0.7462 0.0816z"
    //       style={{ fillOpacity: 0, strokeWidth: 0.2646, stroke: "#000" }}
    //     />
    //   </g>
    // </svg>
    // </div>
  );
};

export default PickCracker;

{
  /* <img
       src={"/public/RC_stage1.png"}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      /> */
}

{
  /* GREEN CRACKER */
}
{
  /* <img
  style={{
    position: "absolute",
    maxWidth: "16.5%",
    right: "25%",
    bottom: "18%",
    zIndex: 9998,
    transform: "rotate(-10deg)",
    cursor: "pointer",
    //
  }}
  src="/Images/WebP/pop_g.webp"
  onClick={() => {
    setStage("cracker picked");
    setColor("g");
  }}
/> */
}
{
  /* RED CRACKER */
}
{
  /* <img
  style={{
    position: "absolute",
    maxWidth: "16.5%",
    bottom: "10%",
    right: "36%",
    zIndex: 9995,
    transform: "rotate(-18.5deg)",
    cursor: "pointer",
  }}
  src="/Images/WebP/pop_r.webp"
  onClick={() => {
    setStage("cracker picked");
    setColor("r");
  }}
/> */
}
{
  /* PURPLE CRACKER */
}
{
  /* <img
  style={{
    position: "absolute",
    maxWidth: "16.5%",
    bottom: "20%",
    right: "59%",
    zIndex: 9999,
    transform: "rotate(-30.5deg)",
    cursor: "pointer",
  }}
  src="/Images/WebP/pop_p.webp"
  onClick={() => {
    setStage("cracker picked");
    setColor("p");
  }}
  useMap="#image-map"
/> */
}
{
  /* WHITE CRACKER */
}
{
  /* <img
  style={{
    position: "absolute",
    maxWidth: "16.5%",
    bottom: "5%",
    right: "54%",
    zIndex: 9998,
    transform: "rotate(-47.5deg)",
    cursor: "pointer",
  }}
  src="/Images/WebP/pop_w.webp"
  onClick={() => {
    setStage("cracker picked");
    setColor("w");
  }}
/> */
}

{
  /* <ReactSVG src={<SvgStageOne />} /> */
}
