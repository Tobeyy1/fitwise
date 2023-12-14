"use client";
import React, { useEffect, useState, useRef } from "react";
import classes from "./QRCodeScanner.module.scss";
import Webcam from "react-webcam";
import jsQR from "jsqr";
type Props = { onClose: () => void; fetchClientData: () => void };

const QRCodeScanner: React.FC<Props> = ({ onClose, fetchClientData }) => {
  const webcamRef = useRef<Webcam>(null);
  const [isFrontCameraActive, setIsFrontCameraActive] =
    useState<boolean>(false);
  useEffect(() => {
    console.log("Component Mounted");
    let currentWebcamRef = webcamRef.current;
    const setupCamera = async () => {
      let currentWebcamRef = webcamRef.current;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (currentWebcamRef) {
          if (!currentWebcamRef.video) return;
          currentWebcamRef.video.srcObject = stream;
        }

        const scanQRCode = () => {
          if (currentWebcamRef) {
            const videoElement = currentWebcamRef.video;
            console.log("Scanning QR Code");
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            if (!context) {
              return;
            }
            if (!videoElement) return;
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

            const imageData = context.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            );
            const code = jsQR(imageData.data, canvas.width, canvas.height);

            if (code) {
              console.log("QR Code detected:", code.data);
              // Handle the scanned QR code data as needed
              closeHandler();
              fetchClientData();
            }

            requestAnimationFrame(scanQRCode);
          }
        };
        if (!currentWebcamRef || !currentWebcamRef.video) return;
        currentWebcamRef.video.addEventListener("loadedmetadata", () => {
          // Start scanning after metadata is loaded
          requestAnimationFrame(scanQRCode);
          // scanQRCode();
        });
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    setupCamera();
    // Cleanup: Stop the camera stream when the component is unmounted
    return () => {
      console.log("Running Clean up...");
    };
  }, []);
  const closeHandler = () => {
    if (!webcamRef.current || !webcamRef.current.video) return;
    const tracks: MediaStreamTrack[] = (
      webcamRef.current?.video.srcObject as MediaStream
    )?.getTracks();
    tracks[0].stop();
    onClose();
  };
  const videoConstraints = {
    facingMode: { exact: isFrontCameraActive ? "user" : "environment" },
  };
  return (
    <div className={classes.container}>
      {" "}
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <button
        type="button"
        onClick={() => {
          setIsFrontCameraActive(!isFrontCameraActive);
        }}
      >
        Flip Camera
      </button>
      <div className={classes.webcam__container}>
        <Webcam
          ref={webcamRef}
          mirrored
          style={{ maxWidth: "100%" }}
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
};

export default QRCodeScanner;
