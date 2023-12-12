import { useEffect, useRef } from "react";

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
      <img
        src={"/public/RC_stage1.png"}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
    </div>

    // <div
    //   style={{
    //     position: "relative",
    //     height: "100vh",
    //     overflow: "hidden",
    //   }}
    // >
    //   <img
    //     src={"/Images/WebP/cover_bg.webp"}
    //     style={{
    //       position:'relative',
    //       height: "100%",
    //       width: "100%",
    //     }}
    //   />

    //     {/* PRESENT */}
    //     <img
    //       className="cropped-present"
    //       style={{
    //         position: "absolute",
    //         bottom: "0%",
    //         right: "6%",
    //         width: "58.5%",
    //         zIndex: 9999,
    //       }}
    //       src="/Revised RC images/popper_cover.webp"
    //     />

    //     {/* PRESENT BACK*/}
    //     <img
    //       // className="cropped-bag"
    //       style={{
    //         position: "absolute",
    //         bottom: "18.25%",
    //         right: "20%",
    //         width: "45.25%",
    //         zIndex: 5,
    //       }}
    //       src="/Revised RC images/box_back.webp"
    //     />

    // </div>
  );
};

export default PickCracker;

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
