import { useEffect } from "react";


/* eslint-disable react/no-unknown-property */

// eslint-disable-next-line react/prop-types
const PickCracker = ({ setStage, setColor, color }) => {
  useEffect(() => {
    if (color) {
      setTimeout(() => {
        setStage("cracker picked");
      }, 2500);
    }
  }, [color, setStage]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* WHITE, PURPLE, RED & GREEN CRACKER LOADING BAR */}
      {color === "w" ? (
        <div
          style={{
            position: "absolute",
            zIndex: 12000,
            left: "20%",
            top: "32.5%",
          }}
          id="candy"
        >
          <div id="candy-loader"></div>
        </div>
      ) : color === "p" ? (
        <div
          style={{
            position: "absolute",
            zIndex: 12000,
            left: "20%",
            top: "12.5%",
          }}
          id="candy"
        >
          <div id="candy-loader"></div>
        </div>
      ) : color === "r" ? (
        <div
          style={{
            position: "absolute",
            zIndex: 12000,
            left: "45%",
            top: "17.5%",
          }}
          id="candy"
        >
          <div id="candy-loader"></div>
        </div>
      ) : color === "g" ? (
        <div
          style={{
            position: "absolute",
            zIndex: 12000,
            left: "75%",
            top: "15%",
          }}
          id="candy"
        >
          <div id="candy-loader"></div>
        </div>
      ) : null}

      {/* GREEN HOVER */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("g");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-8deg)",
            left: "59%",
            top: "43.5%",
            width: "15%",
            height: "26%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      {/* RED HOVER */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("r");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-25deg)",
            left: "46.5%",
            top: "48.5%",
            width: "5%",
            height: "18%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("r");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-25deg)",
            left: "51.5%",
            top: "47.5%",
            width: "2.5%",
            height: "18%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("r");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-25deg)",
            left: "52.5%",
            top: "47.5%",
            width: "2.5%",
            height: "13%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("r");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-25deg)",
            left: "53%",
            top: "47.5%",
            width: "2.5%",
            height: "8%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("r");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-35deg)",
            left: "56.25%",
            top: "65%",
            width: "2.5%",
            height: "6%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("r");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-35deg)",
            left: "57.5%",
            top: "65%",
            width: "2.5%",
            height: "3%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("r");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-35deg)",
            left: "58.5%",
            top: "65%",
            width: "2.5%",
            height: "1%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>

      {/* PURPLE HOVER */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("p");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-33.5deg)",
            left: "28.5%",
            top: "41%",
            width: "15%",
            height: "36%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      {/* WHITE HOVER */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("w");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-55deg)",
            left: "22%",
            top: "61.5%",
            width: "7%",
            height: "21%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("w");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-55deg)",
            left: "24%",
            top: "58.5%",
            width: "6%",
            height: "19%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("w");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-55deg)",
            left: "25.75%",
            top: "57.5%",
            width: "2%",
            height: "15%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!color) {
            setColor("w");
          }
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: "rotate(-55deg)",
            left: "42.75%",
            top: "73.5%",
            width: "2%",
            height: "5%",
            backgroundColor: "transparent",
            zIndex: 9999,
          }}
        ></div>
      </a>

      <img
        src={"/RC_stage1.png"}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default PickCracker;

{
  /* <map name="image-map">
  <area
    target="_self"
    alt=""
    title=""
    href=""
    coords="82,1290,418,1529,654,1462,835,1311,777,943,729,939,729,929,772,911,759,828,597,852,612,933,647,939,661,948,617,971,625,1034,618,1015,565,1014,570,1002,605,977,583,906,422,952,448,1027,482,1026,495,1031,485,1044,457,1064,468,1103,331,891,283,907,281,898,314,862,269,795,131,887,172,952,206,940,218,943,211,963,189,983,399,1309,275,1221,233,1232,242,1202,180,1156"
    shape="poly"
    onClick={() => {
      console.log("image LCICKED!");
    }}
  />
</map> */
}
