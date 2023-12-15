/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars

import { useState, useEffect } from "react";

import { jokes } from "../constants/jokesData.js";
import { Modal } from "react-bootstrap";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import QRCode from "react-qr-code";
import useScreenOrientation from "../@hooks/useOrientation.js";

const jokesIdx = Math.floor(Math.random() * jokes.length) + 1;
const CrackerPicked = ({ setStage, color }) => {
  const [scaleX, setSetScaleX] = useState(1);
  const [scaleY, setSetScaleY] = useState(1);
  const [crackerTop, setCrackerTop] = useState("23.6%");
  const [crackerBottom, setCrackerBottom] = useState("50%");
  const [pull, setPull] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (pull === 5) {
      setCrackerTop((position) => position.replace("%", "") - 22.5 + "%");
      setCrackerBottom(
        (position) => Number(position.replace("%", "")) + 22.5 + "%"
      );
    }
  }, [pull]);

  // const oreintation = useScreenOrientation();
  // console.log(oreintation)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const windowDifference = windowSize.height - windowSize.width;
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial cleanup to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="modal-height"
        // dialogClassName="modal-width"
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: "#B51F1C",
              fontSize: windowDifference >= 250 ? "3rem" : "2.25rem",
            }}
          >
            Share via a link!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WhatsappShareButton url={"www.example.com"}>
            <WhatsappIcon />
          </WhatsappShareButton>
          <TwitterShareButton url={"www.example.com"}>
            <TwitterIcon />
          </TwitterShareButton>
          <FacebookShareButton url={"www.example.com"}>
            <FacebookIcon />
          </FacebookShareButton>
          <TelegramShareButton url={"www.example.com"}>
            <TelegramIcon />
          </TelegramShareButton>
          <EmailShareButton url={"www.example.com"}>
            <EmailIcon />
          </EmailShareButton>
        </Modal.Body>
        <Modal.Body>
          <Modal.Title
            style={{
              color: "#B51F1C",
              fontSize: windowDifference >= 250 ? "3rem" : "2.25rem",
            }}
          >
            Scan QR Code!
          </Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              // maxWidth: 64,
              display: "block",
              marginRight: "auto",
              height: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "80%", width: "100%" }}
              value="https://www.gardensbythebay.com.sg/en.html"
              viewBox={`0 0 256 256`}
            />
          </div>
        </Modal.Footer>
      </Modal>
      <img
        id="joke-img"
        onMouseMove={(event) => {
          const image = event.target;
          const boundingRect = image.getBoundingClientRect();

          const relativeX =
            ((event.clientX - boundingRect.left) / image.width) * 100;
          const relativeY =
            ((event.clientY - boundingRect.top) / image.height) * 100;
          // console.log("Relative Coordinates:", { x: relativeX, y: relativeY  });
          if (
            relativeX >= 37 &&
            relativeX <= 62 &&
            relativeY >= 81 &&
            relativeY <= 94.8
          ) {
            image.style.cursor = "pointer";
          } else {
            image.style.cursor = "default";
          }
        }}
        onClick={(event) => {
          const image = event.target;
          const boundingRect = image.getBoundingClientRect();

          const relativeX =
            ((event.clientX - boundingRect.left) / image.width) * 100;
          const relativeY =
            ((event.clientY - boundingRect.top) / image.height) * 100;

          console.log("Relative Coordinates:", { x: relativeX, y: relativeY });

          if (
            relativeX >= 37 &&
            relativeX <= 62 &&
            relativeY >= 81 &&
            relativeY <= 94.8
          ) {
            handleShow();
          }
        }}
        style={{
          position: "absolute",
          width: "90%",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: pull === 5 ? 10 : -1,
        }}
        src={`/rcJokesPng/joke_${jokesIdx}.png`}
      />

      <img
        src={
          pull === 5
            ? "/Images/WebP/joke_bg.webp"
            : "/Images/WebP/popping_bg.webp"
        }
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          filter: pull === 5 ? "brightness(.6)" : "brightness(1)",
          // transition: "filter 3s cubic-bezier(.01,1,.32,.75)",
        }}
      />
      <div
        style={{
          position: "relative",
          transform: `translate(-2.5%, -105%) rotate(-22.5deg) scale(${
            pull >= 5 ? 1 : scaleX
          }, ${pull >= 5 ? 1 : scaleY})`,
          height: "100%",
        }}
        onClick={(e) => {
          if (
            (e.target.id === "top_cracker" ||
              e.target.id === "bottom_cracker") &&
            pull < 5
          ) {
            setPull((pull) => {
              pull += 1;
              if (pull < 5) {
                setSetScaleX((x) => (x -= 0.05));
                setSetScaleY((y) => (y += 0.05));
                setCrackerTop(
                  (position) => position.replace("%", "") - 0.1 + "%"
                );
                setCrackerBottom(
                  (position) => Number(position.replace("%", "")) + 0.1 + "%"
                );
              }
              return pull;
            });
          }
        }}
      >
        <img
          id="top_cracker"
          src={`/public/RC_SPLIT/pop_top_${color}.webp`}
          alt="cracker top"
          style={{
            top: crackerTop,
            left: "37.5%",
            position: "absolute",
            width: "20%",
            height: "35%",
            cursor: "pointer",
            transition: "top .4s cubic-bezier(.01,1,.32,.75)",
          }}
        />
        <img
          id="bottom_cracker"
          src={`/public/RC_SPLIT/pop_btm_${color}.webp`}
          alt="cracker bottom"
          style={{
            top: crackerBottom,
            left: "37.5%",
            position: "absolute",
            width: "20%",
            height: "35%",
            cursor: "pointer",
            transition: "top .4s cubic-bezier(.01,1,.32,.75)",
          }}
        />
      </div>

      <img src="joke_1.png" useMap="#image-map" />
      {/* <img src="joke_2.png" useMap="#image-map" />
      <img src="joke_3.png" useMap="#image-map" />
      <img src="joke_4.png" useMap="#image-map" />
      <img src="joke_5.png" useMap="#image-map" />
      <img src="joke_6.png" useMap="#image-map" />
      <img src="joke_7.png" useMap="#image-map" />
      <img src="joke_8.png" useMap="#image-map" />
      <img src="joke_9.png" useMap="#image-map" />
      <img src="joke_10.png" useMap="#image-map" />
      <img src="joke_11.png" useMap="#image-map" />
      <img src="joke_12.png" useMap="#image-map" />
      <img src="joke_13.png" useMap="#image-map" />
      <img src="joke_14.png" useMap="#image-map" />
      <img src="joke_15.png" useMap="#image-map" />
      <img src="joke_16.png" useMap="#image-map" />
      <img src="joke_17.png" useMap="#image-map" />
      <img src="joke_18.png" useMap="#image-map" />
      <img src="joke_19.png" useMap="#image-map" />
      <img src="joke_20.png" useMap="#image-map" /> */}

      <map name="image-map">
        <area
          target="_self"
          alt="facebook"
          title="facebook"
          href="#"
          coords="365,515,24"
          shape="circle"
        />
        <area
          target="_self"
          alt="twitter"
          title="twitter"
          href="#"
          coords="437,514,23"
          shape="circle"
        />
        <area
          target="_self"
          alt="instagram"
          title="instagram"
          href="#"
          coords="511,514,27"
          shape="circle"
        />
        <area
          target="_self"
          alt="whatsapp"
          title="whatsapp"
          href="#"
          coords="587,514,26"
          shape="circle"
        />
      </map>
    </div>
  );
};

export default CrackerPicked;

// animation: "crackerAnimation 2s infinite"
