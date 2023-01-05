import React from "react";
import { faRocket, faGem, faBoxesStacked, faBriefcase, faSignal, faPlaneDeparture, faGlobe, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { InvestCard, AboutCard } from "../../components";

import Carousel from "../../components/carousel/carousel";
import "./home.css";
import Layout from "../../components/Layout/layout";


const invest_card = [
  {
    id: 1,
    icon: faRocket,
    title: "Trial plan",
    subtitle: "3% daily for 3 days",
    minimum_deposit: "$50",
    maximum_deposit: "$500",
    active_investor: "2435+",
    duration: "3 days",
  },
  {
    id: 2,
    icon: faBriefcase,
    title: "SHALLOW DRILLING PLAN",
    subtitle: "5.5% daily",
    minimum_deposit: "$1000",
    maximum_deposit: "$6000",
    active_investor: "4549+",
    duration: "Weekly/Monthly",
  },
  {
    id: 3,
    icon: faGem,
    title: "DEEPWATER DRILLING PLAN",
    subtitle: "8% Monthly",
    minimum_deposit: "$5100",
    maximum_deposit: "$10000",
    active_investor: "3985+",
    duration: "Long Term",
  }
]

const about_card = [
  {
    id:1,
    icon: faBoxesStacked,
    title: "Sector & Geographical Expertise",
    details: "Established principally invests in middle market companies Digitalbull energy Market with a global customer base. We understand that businesses face unique challenges within their operations and the international nature of the energy complex global supply chains",
  },
  {
    id: 2,
    icon: faBriefcase,
    title: "Execution & Value Creation Focus",
    details: "We provide the capital to fund long term business plans that can be incrementally deployed. We strive to achieve operational excellence through growth in our businesses and pursue a proactive buy-and-build model. We are focused on pre-driving organic growth and acquisition opportunities through expanding footprints",
  },
  {
    id: 3,
    icon: faSignal,
    title: "Strong Network Of World-Class Investment Team",
    details: "We have one of the most experienced middle-market teams in the energy space. The Bluewater team of highly experienced leaders and young professionals who work collectively possess a mix of insight. energy, drive and talent to help deliver on the market's net-zero goals and build lasting value enhanced businesses. ",
  },
  {
    id: 4,
    icon: faPlaneDeparture,
    title: "Proven strategies and repeated",
    details: "A ten-driven strategy focusing returns the technological advancements, market development, sustainability and energy across the lifecycle. Digitalbull believes in deploying proven Market strategies, management teams often repeat, where links lead to significant growth and unlock the full potential experience and insight into the energy business.",
  },
  {
    id: 5,
    icon: faGlobe,
    title: "Teams Repeat & Repeat ' Models",
    details: "Seasoned founders and management teams we partner with and work alongside them to develop and grow their businesses.",
  },
  {
    id: 6,
    icon: faBoxOpen,
    title: "Seasoned management teams with a partner",
    details: "We invest in partnerships with experienced management teams that have a track record of value creation and wish to grow their businesses alongside value-adding partners.",
  }
]

const Home = () => {
  return (
<Layout>
<div className="home">
      <Carousel />
      <div className="invest_container">
        <div className="invest_top">
          <h5>investments</h5>
          <h1><span>Investment</span> Plans</h1>
          <p>Digitalbull Market provides growth capital to everyone across the entire oil energy spectrum - and gives you detailed information for each plans to the make right choice.</p>
        </div>
        <div className="invest_cards">
          {invest_card.map((item) => {
            const{id,icon, title, subtitle, minimum_deposit, maximum_deposit,active_investor, duration} = item;
            return <InvestCard key={id} plan={title} planTime={subtitle} minimumAmt={minimum_deposit} maximumAmt={maximum_deposit} activeInvestorsCount={active_investor} Term={duration} icon={icon} />
          })}
        </div>
      </div>
      <div className="referral">
        <h5>partner program</h5>
        <h2><span>Referral</span> <br/> Commission</h2>
        <p>Digitalbull Market provide referral commission 5% from deposit for our investors who invite their friends & family members.</p>
        <div className="referral_bottom">
          <h2>5</h2>
          <h5>Commission</h5>
        </div>
      </div>
      <div className="home_about">
        <div className="home_about_top">
          <h5>what are we doing</h5>
          <h1><span>Results</span> in Numbers</h1>
        </div>
        <div className="figures">
          <div className="figure_count">
            <p>1291</p>
            <p>Running Days</p>
          </div>
          <div className="figure_count">
            <p>6543237</p>
            <p>Total Account</p>
          </div>
          <div className="figure_count">
            <p>92439774</p>
            <p>Total Deposit($)</p>
          </div>
          <div className="figure_count">
            <p>61436603</p>
            <p>Total Withdrawal($)</p>
          </div>
        </div>
        <div className="why_us">
          <div className="why_us_top">
            <div className="why_us_left">
              <h5>Value Trading</h5>
              <h1>Why choose <span>Us?</span></h1>
            </div>
            <div className="see_button">
              <button>see all</button>
            </div>
          </div>
          <div className="about_cards">
            {about_card.map((item) => {
              const{id, icon, title, details} = item;
              return <AboutCard key={id} title={title} icon={icon} details={details} />
            })}
          </div>
        </div>
        <div className="newsletter">
          <div className="newsletter_left">
            <h5>newsletter</h5>
            <h1><span>Know</span> First</h1>
            <p>And closely Follow the news about the content of our company and receive the current market prices.</p>
          </div>
          <div className="newsletter_right">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button className="subscribe_button">subscribe</button>
          </div>
        </div>
      </div>
      <div className="brands">
        
      </div>
    </div>
    </Layout>
  );
}

export default Home;