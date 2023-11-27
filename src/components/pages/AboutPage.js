import React, { useState, useEffect } from "react";
import "../../App.css";
import styles from "./AboutPage.module.css";

import CopyrightSection from "../Copyright";
import Spline from "@splinetool/react-spline";
import { stateStore } from "../../stores";

const AwardsSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Awards</div>
      <ul className={"page_content_content"}>
        <li>The 29th Ergonomics Society of Taiwan Annual Meeting and Conference, Best paper award Apr. 2022</li>
        <li>Taipei Tech Creative Ceramic Coaster Design Competition, NTUT (first place) Jun. 2019</li>
        <li>Award of Outstanding Student for the Academic Achievement, NTUT (first place) Dec. 2020</li>
        <li>Award of Outstanding Student for the Academic Achievement, NTUT (2nd) Dec. 2019</li>
        <li>Award of Outstanding Student for the Academic Achievement, NTUT (2nd) Jun. 2019</li>
        <li>Award of Outstanding Student for the Academic Achievement, NTUT (2nd) Dec. 2018</li>
        <li>Award of Outstanding Student for the Academic Achievement, NTUT (2nd) Jun. 2018</li>
        <li>Academic Excellence Award, NTUT 2020, 2019, 2018</li>
      </ul>
    </div>
  );
};

const DomainSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Certificate</div>
      <ul className={"page_content_content"}>
        <li>
        Udemy - Python Data Structures & Algorithms + LEETCODE Exercise (progress: 200/229)
        </li>
        <li>
        NVIDIA Develop, Customize, and Publish in Omniverse With Extensions
        </li>
        <li>
        PADI Open Water Diver scuba Certificate
        </li>
        <li>
        Road to off-road 9KM Certificate
        </li>
        <li>
        NVIDIA Deep Learning Foundation-Computer Vision
        </li>
        <li>
        New Taipei City Street Artists, Portrait Sketch
        </li>
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Technical Skills</div>
      <ul className={"page_content_content"}>
        <li >
          <span className={"highlight"}>Sythetic data generation: Omniverse Replicator</span>
        </li>
        <li>
          Data Analysis and Visualization: Python, SQL,
          Deck.gl, Mapbox,
        </li>
        <li>
          Full-stack Web Development: React, HTML, CSS, JavaScript, Node.js
        </li>
        {/* ASP.NET, Node.js */}
        <li>
          Design: Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma
        </li>
        <li>Data Extraction: Selenium</li>
        <li>Database: MySQL, PostgreSQL</li>
        <li>Tools: Git,Linux</li> 
        {/* Docker */}
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Full Time Job Experience</div>
      <ul className={"page_content_content"}>
        <li>
         Techman Robot, June. 2023~ Dec. 2023
        </li>
      </ul>
    </div>
  );
};

const EmploymentSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Internship Experience</div>
      <ul className={"page_content_content"}>
        <li>Parexel, Jul. 2022 ~ May. 2023</li>
        <li>City Science Lab @MIT x Taipei Tech, Apr. 2022 ~  Jun. 2022</li>
        <li>Botrista Technology, Jul. 2021 ~ Aug. 2021</li>
        <li>Build School, Oct. 2020 ~ Apr. 2021</li>
        <li>Taipei Rapid Transit Corporation, Feb. 2020 ~ Jun. 2020</li>
        <li>Department of Rapid Transit Systems, Taipei City Government, Jul. 2019 ~ Aug. 2019</li>
      </ul>
    </div>
  );
};

const PublicationSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>
        Publications and Working Papers
      </div>
      <ul className={"page_content_content"}>
        <li>
          Understanding Street-Level Urban Vibrancy via Spatial-Temporal Wi-Fi
          Data Analytics: Case LivingLine Shanghai: 2022,{" "}
          <em>Environment and Planning B</em>, Under Review, Co-author
        </li>
        <li>
          BDI Model for Simulating Governance in Decentralized Autonomous
          Organization: 2022, <em>GAMA Days 2022</em>, First Author
        </li>
        <li>
          Simulating Multi-Purpose Autonomous Vehicles: Shared Mobility between
          People and Goods in Kendall Square: 2022, <em>GAMA Days 2022</em>,
          First Author
        </li>
        <li>
          Usability Evaluation of Elder-Friendly Design: Application to Take
          Alipay App: 2022,{" "}
          <em>
            The 29th International Society of Transdisciplinary
            Engineering(ISTE)
          </em>
          , Co-author
        </li>
        <li>
          Event Encryption for Neuromorphic Vision Sensors: Framework,
          Algorithm, and Evaluation: 2021, <em>IEEE Sensors</em>, Co-author
        </li>
        <li>
          PHNet: Parasite-Host Network for Video Crowd Counting: 2020,{" "}
          <em>International Conference on Pattern Recognition(ICPR)</em>, Joint
          First Author & Corresponding Author
        </li>
        <li>
          Identifying Human Interactions in Built Environment: Deep Learning
          Analytics on Camera Data for Urban Vibrancy Evaluation: 2020,{" "}
          <em>
            International Conference on Urban Studies: “Celebrations,
            Aspirations and Expectations”
          </em>
          , Co-author
        </li>
        <li>
          Cross-City Transfer Learning for Anti-epidemic Policies and Traffic
          Flow Prediction: Working Paper, First Author
        </li>
      </ul>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Education</div>
      <ul className={"page_content_content"}>
        <li>
        Sept. 2021 ~ Feb. 2023, M.S., Industrial Engineering and Management,{" "}
          <b>National Taipei University of Technology(NTUT)</b>, Taipei, Taiwan. <br/> <span> (<em>Cumulative GPA:</em> 4.0/4.0</span>)
        </li>
        <li>
        Sept. 2017 ~ Jun. 2021, B.S. , Industrial Engineering and Management,{" "}
          <b>National Taipei University of Technology(NTUT)</b>, Taipei, Taiwan <br/> <span> (<em>Cumulative GPA:</em> 3.89/4.0</span>)
        </li>
      </ul>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className={"page_container"}>
      <div className={"page_content_title"}>About</div>

      {/* ---------- Divider ---------- */}
      <div className={"row " + styles.about_container}>
        <div className={"col"}>
          <div className={"page_content_content"}>
             Hi! I'm Lily Chen (陳莉心), currently working as an Omniverse Software Engineer at Techman Robot, a collaborative robot manufacturer in Taiwan. I am a hard-working person. My role is to focus on NVIDIA Omniverse development, specifically in NVIDIA Omniverse Isaac Sim and Replicator, with a specialization in creating synthetic data.
            <br />
            Outside of work, I have a passion for various interests. 
            <br />
            I'm a pasta lover and can happily eat pasta every day.
            <br />
            I also enjoy cooking, scuba diving, working out, and indulging in mysteries and clever plot dramas.
            <br />
            I once traveled to London alone for a week! I love London, and my dream is to live and work there for at least a year!
          </div>
          <div className={"page_content_content"}>
            Email: <a href="mailto:lihsinn.88@gmail.com">lihsinn.88@gmail.com</a>
            <br />
            Github: <a href="https://github.com/lihsinn">github.com/lihsinn</a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/lily-chen-8a8102187/">
              linkedin.com/lilychen
            </a>
          </div>
          <div className={"page_content_content"}>
              Feel free to reach out to me if you're interested in connecting. I welcome any inquiries or opportunities. Looking forward to hearing from you!
          </div>
        </div>
        <div className={styles.avatar_container} alt={""}>
          <img className={styles.avatar} src={process.env.PUBLIC_URL +`/avatar.jpg`} alt={""} />
        </div>
        {/*  */}
      </div>
      <div className={"row"}>
        <EducationSection />
      </div>
      <div className={"row"}>
        <DomainSection />
      </div>
      <div className={"row"}>
        <SkillsSection />
      </div>
      <div className={"row"}>
        <ExperienceSection />
      </div>
      <div className={"row"}>
        <EmploymentSection />
      </div>
      {/* <div className={"row"}>
        <PublicationSection />
      </div> */}
      <div className={"row"}>
        <AwardsSection />
      </div>
      {/* <div className={"row"}>
        <Spline
          // style={{position: 'relative' ,right:'300px' }}
          // className="fade-in"
          scene="https://prod.spline.design/w-l7RyhPVGLl8tHz/scene.splinecode"
        />

      </div> */}

      <CopyrightSection />
    </div>
  );
};

export default AboutPage;
