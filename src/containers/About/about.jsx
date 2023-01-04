import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import { ProfileCard } from "../../components";

import team1 from "../../images/team-1.jpg";
import team2 from "../../images/team-2.jpg";
import team3 from "../../images/team-3.jpg";
import team4 from "../../images/team-4.jpg";
import aboutImage from "../../images/about_right.jpg";

import "./about.css";
import Layout from "../../components/Layout/layout";

const experts = [
  {
    id: 1,
    image: team1,
    expertName: "David Cooper",
    title: "CTO & CO-FOUNDER",
  },
  {
    id: 2,
    image: team2,
    expertName: "Oliver Jones",
    title: "CHIEF MARKETING ",
  },
  {
    id: 3,
    image: team3,
    expertName: "Emma Lopez",
    title: "MANAGER MARKETING",
  },
  {
    id: 4,
    image: team4,
    expertName: "T. Johnson",
    title: "CEO & PRESIDENT",
  },
];

const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="about_top">
          <p>About</p>
          <h1>About Us</h1>
        </div>
        <div className="value_market">
          <div className="value_market_left">
            <h5>Value Trading Market</h5>
            <h1>
              <span>Who we</span> are?
            </h1>
            <p>
              Digitalbull Market is a global private equity firm that
              specialises in the energy transition space.
            </p>
            <p>
              Our team of experienced investment professionals have been helping
              energy companies grow for the last 30+ years. The team currently
              manages a portfolio of 22 companies based in Europe, Asia, Africa,
              Middle East and North & South America.
            </p>

            <p>
              {" "}
              Our investment strategy recognises that the energy transition
              depends on new technologies; on driving improvements in
              sustainability and efficiency.
            </p>

            <p>
              {" "}
              Today , Digitalbull Market has grown to be recognized as the
              leading service and products provider for LPG System, Fuel System
              including Manufacturing of UL 142 and 2085 Aboveground tank ,UL58
              and UL1746 Underground tank, STI-P3 and Fireguard and Fuel Tanks
              and API 650 tanks , Synthetic Natural Gas System, Natural Gas
              System, Laboratory Gas and Medical Gas, Steam and Boilers Piping,
              Toxic and Flammable Gas Detection and Solar Water Heating Systems.{" "}
            </p>
            <h5>
              Digitalbull Market is an officially registered company in the
              United Kingdom. Fit Image
            </h5>
          </div>
          <div className="value_market_right">
            <img src={aboutImage} alt="about_image" />
          </div>
        </div>
        <div className="case_study">
          <div className="case_study_left">
            <h5>case study</h5>
            <h2>
              ESG in action: The transformative approach of Galileo and Edge LNG
            </h2>
            <p>
              Around the world, natural gas is routinely flared as a by-product
              of oil extraction.
            </p>
            <p>
              The gas itself is a valuable fuel, but the economic equation is
              such that it is not viable to invest in gathering capacity to take
              it to market, leaving only the options of burning it off or
              shutting down operations entirely. Taken at a global scale, this
              is an economic and environmental tragedy.
            </p>
            <h2>A technology-led solution</h2>
            <p>
              In 016, Digitalbull Market invested in Argentinian engineering and
              technology company, Galileo Technologies (Galileo). Galileo had
              pioneered a fully mobile LNG solution to make the most of its
              country’s remote and stranded gas assets.
            </p>
            <p>
              The twin imperatives of increased demand for fossil fuels and
              emissions reduction may appear irreconcilable at first glance, but
              the reality is very different. In fact, those companies which can
              bridge the apparent gap will be some of the most valuable leaders
              as we navigate the energy transition.
            </p>
            <p>
              With Edge LNG, operators finally have an economic solution to
              flaring. In fact, natural gas can become an additional revenue
              stream.
            </p>
            <span className="uk">
              <FontAwesomeIcon className="uk_icon" icon={faGraduationCap} />
              <h5>Uk registered</h5>
            </span>
            <button className="check_button">check registration</button>
          </div>
          <div className="case_study_right">
            <img src="" alt="" />
          </div>
        </div>
        <div className="experts">
          <div className="experts_left">
            <h5>we like what we do</h5>
            <h2>
              <span>Team</span>of Experts
            </h2>
            <p>
              Ethics and integrity are the bases on which our professionals
              build their careers.They are fundamentals that become daily
              attitudes.
            </p>
            <div className="expert_cards">
              {experts.map((expert) => {
                const { id, image, expertName, title } = expert;
                return (
                  <ProfileCard
                    key={id}
                    image={image}
                    expert={expertName}
                    title={title}
                  />
                );
              })}
            </div>
          </div>
          <div className="experts_right">
            <div className="focus">
              <h4>Specialised, focused expertise…</h4>
              <p>
                Our team of experts look for strategic acquisitions that we know
                will drive value. The team have executed over 50 transactions to
                grow the current portfolio and upscale oil and gas energy
                globally, and these combined with organic growth initiatives
                have all had a single focus - value creation.
              </p>
              <span>
                <h5>T. Johnson</h5>
                <FontAwesomeIcon className="quote_right" icon={faQuoteRight} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
