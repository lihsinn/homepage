import React from "react";

import GalleryView from "../pages/GalleryView.js";

import CommunityDAO from "../pages/CommunityDAO.js";
import GreenCommute from "../pages/GreenCommute.js";
import VerticalCity from "../pages/VerticalCity";
import EquityWithoutZoning from "../pages/EquityWithoutZoning.js";

import Livingline from "../pages/Livingline.js";
import LivinglineCam from "../pages/LivinglineCam.js";
import SpatialEquity from "../pages/SpatialEquity.js";
import CrowdCounting from "../pages/CrowdCounting.js";
import EventCamera from "../pages/EventCamera.js";

import DAOSim from "../pages/DAOSim.js"
import MPAVSim from "../pages/MPAVSim.js"

import Olika from "../pages/Olika.js"
import ElderDesign from "../pages/ElderDesign.js"
import Sandtray from "../pages/Sandtray.js"

import TEDAnother from "../pages/TEDAnother.js"
import TEDReturn from "../pages/TEDReturn.js"

import AboutPage from "../pages/AboutPage.js";

const ContentMenu = {
  0: {
    path: "/",
    element: <GalleryView />,
    title: "",
    thumbnail: "",
    displayInGallery: false,
  },
  1: {
    // path: "/communitydao",
    path: "/syntheticBoxSegmentation",
    element: <CommunityDAO />,
    title: "Synthetic Data For Unversal Box Segmentation AI Model",
    thumbnail: "/assets/syntheticBoxSegmentation/0.jpg",
    displayInGallery: true,
  },
  2: {
    // path: "/greencommute",
    path: "/syntheticFactoryWorkpiece",
    element: <GreenCommute />,
    title: "Synthetic Data For Factory Workpiece Model",
    thumbnail: "/assets/syntheticFactoryWorkpiece/0.jpg",
    displayInGallery: true,
  },
  3: {
    // path: "/verticalcity",
    path: "/syntheticiRexNvidiaBooth",
    element: <VerticalCity />,
    title: "Synthetic Data For iRex NVIDIA Booth",
    // thumbnail: "/assets/verticalcity/1.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  4: {
    // path: "/ewz",
    path: "/omniverseExtension",
    element: <EquityWithoutZoning />,
    // title: "Equity WITHOUT Zoning",
    title: "Omniverse Extension -for-practice-",
    // thumbnail: "/assets/ewz/1.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  5: {
    // path: "/livingline_wifi",
    path: "/taiwanIsland",
    element: <Livingline />,
    // title: "Livingline Shanghai - WiFi",
    title: "Taiwan Island",
    // thumbnail: "/assets/Livingline/1.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  6: {
    // path: "/spatialequity",
    path: "/taipeiMetro",
    element: <SpatialEquity />,
    title: "Taipei Metro daily entry / exit",
    // title: "Spatial Equity NYC",
    // thumbnail: "/assets/spatialequity/0.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  7: {
    // path: "/livingline_cam",
    path: "/taiwanIsland",
    element: <LivinglineCam />,
    title: "Taiwan Island",
    // thumbnail: "/assets/LivinglineCam/0.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  8: {
    // path: "/crowdcounting",
    path: "/rebuildKharkiv",
    element: <CrowdCounting />,
    // title: "Drone Video Crowd Counting",
    title: "Rebuild Kharkiv",
    // thumbnail: "/assets/crowd/1.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  9: {
    // path: "/eventcamera",
    path: "/taiwanDashboard",
    element: <EventCamera />,
    // title: "Neuromorphic Camera Encryption",
    title: "TaiwanIsland Dashboard",
    // thumbnail: "/assets/eventcamera/1.jpg",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
//   10: {
//     path: "/eventcamera",
//     element: <CrowdCounting />,
//     title: "Urban Translator",
//     thumbnail: "/assets/crowd/1.png",
//     displayInGallery: false,
//   },
  10: {
    // path: "/daosim",
    path: "/dedupeWork",
    element: <DAOSim />,
    title: "Dedupe the data in Enterprise information system",
    // title: "DAO Simulation",
    // thumbnail: "/assets/daosim/2.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  11: {
    // path: "/mpavsim",
    path: "/maintainWork",
    element: <MPAVSim />,
    // title: "MPAV Simulation",
    title: "Maintain data quality in Enterprise information system",
    // thumbnail: "/assets/mpavsim/4.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  12: {
    // path: "/olika",
    path: "/mailRequest",
    element: <Olika />,
    // title: "Olika",
    title: "Mail Request",
    // thumbnail: "/assets/olika/0.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  13: {
    // path: "/elderdesign",
    path: "/kimToolWebsite",
    element: <ElderDesign />,
    // title: "Elder-Friendly Design Evaluation",
    title: "KIM Tool Website",
    // thumbnail: "/assets/elder/0.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  14: {
    // path: "/sandtray",
    path: "/kimToolExcel",
    element: <Sandtray />,
    // title: "Digital Sandtray Therapy",
    title: "KIM Tool Excel Macro",
    // thumbnail: "/assets/sand/1.png",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  15: {
    // path: "/another",
    path: "/realTimeAnno",
    element: <TEDAnother />,
    // title: "Another",
    title: "Real-time image annotation of tennis matches",
    // thumbnail: "/assets/ted2018/0.jpg",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  16: {
    // path: "/returnexpedition",
    path: "/openHCI2021",
    element: <TEDReturn />,
    // title: "Return and Expedition",
    title: "OpenHCI 2021 Workshop",
    // thumbnail: "/assets/ted2019/1.jpg",
    thumbnail: "/assets/temp/1.png",
    displayInGallery: true,
  },
  17: {
    path: "/gallery",
    element: <GalleryView />,
    title: "Projects",
    thumbnail: "",
    displayInGallery: false,
  },
  18: {
    path: "/about",
    element: <AboutPage />,
    title: "About",
    thumbnail: "",
    displayInGallery: false,
  },
};

export default ContentMenu;
