import { useEffect, useRef } from "react";

/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor }) => {
  const crackerPicked = useRef()
  // const beforeStyles = {
  //   content: '""',
  //   background: 'url("/newImages/spear-sword.png")',
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "contain",
  //   position: "absolute",
  //   bottom: "-10%",
  //   right: "-20%",
  // };

  // useEffect(() => {

  // }, [])

  const crackerAnimation = {
    animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    transform: "rotate(-10deg) translate3d(0, 0, 0)",
    backfaceVisibility: "hidden",
    perspective: "1000px",
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={"/Images/WebP/cover_bg.webp"}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
      {/* PRESENT */}
      <img
        className="cropped-bag"
        style={{
          position: "absolute",
          bottom: "0%",
          right: "6%",
          height: "30%",
          zIndex: 9999,
        }}
        src="/public/Images/Webp/popper_cover.webp"
      />

      {/* GREEN CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          right: "26%",
          bottom: "15%",
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
      />
      {/* RED CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          bottom: "10%",
          right: "37.5%",
          zIndex: 9995,
          transform: "rotate(-18.5deg)",
          cursor: "pointer",
        }}
        src="/Images/WebP/pop_r.webp"
        onClick={() => {
          setStage("cracker picked");
          setColor("r");
        }}
      />
      {/* PURPLE CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          bottom: "20%",
          right: "60%",
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
      />
      {/* WHITE CRACKER */}
      <img
        style={{
          position: "absolute",
          maxWidth: "16.5%",
          bottom: "5%",
          right: "55%",
          zIndex: 9998,
          transform: "rotate(-47.5deg)",
          cursor: "pointer",
        }}
        src="/Images/WebP/pop_w.webp"
        onClick={() => {
          setStage("cracker picked");
          setColor("w");
        }}
      />
    </div>
  );
};

export default PickCracker;
