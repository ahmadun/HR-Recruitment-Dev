import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sumi from "../../images/img-1.jpg";
import pres from "../../images/presiden.png";

const TentangSBI = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* about */}
      <section
        id="tentang-sbi"
        className="about"
        style={{ textAlign: "justify" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="about-title">
            <h2>ABOUT US</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p>
                PT Sumitomo Wiring Systems Batam Indonesia is a manufacturing
                company based on Batam, for more than 32 Years being successful
                and growth as the largest industry of wire harness. With SWS WAY
                as the main idea to improve every process in production, also
                light up the culture and implemented in every part of SBI.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> Further, with our
                  Professionalism, Team Work, and Challenge, we committed to
                  growing up our labour as a great person and bring the great
                  value value.
                </li>
                <li>
                  <i className="ri-check-double-line" />
                  Our vision is to become a glorious excellent company with full
                  of energy, mobility, and communication with SWS WAY
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <img
                src={sumi}
                width="100%"
                height="auto"
                display="block"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* 
      president direktur */}
      <section
        id="tentang-sbi"
        className="about"
        style={{ textAlign: "justify", marginTop: "50px" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="about-title">
            <h2>PRESIDENT DIRECTOR</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6 pt-4 pt-lg-0">
              <img
                src={pres}
                width="60%"
                height="auto"
                alt=""
                display="block"
              />
            </div>
            <div className="col-lg-6">
              <p>
                PT Sumitomo Corporation Group develops businesses in a wide
                range of industrial fields on a global scale aiming to achieve
                prosperity and realize dreams through sound business activities.
                Our corporate mission statement carries out Sumitomo’s business
                philosophy, represented by one of the credos; “Benefit for self
                and others, private and public interests are one and the same.”*
                Since our foundation in 1919, we have continued to grow through
                enhancing our ability to create new value together with
                stakeholders such as business partners and clients, across
                business networks around the world.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> This credo underscores
                  the importance that Sumitomo’s business activities should not
                  only benefit Sumitomo, but must also benefit society as a
                  whole in order to achieve sustainable growth together. Today,
                  in line with our Medium-Term Management Plan “SHIFT 2023,” we
                  are steadily implementing various measures to enhance
                  sustainability management while working towards the
                  realization of a sustainable society and an enhancement of
                  corporate value. Through the reinforcement and expansion of
                  businesses by leveraging our strengths, as well as the
                  development of next-generation businesses from a medium- to
                  long-term perspective, we will shift to a highly profitable
                  and resilient business portfolioS
                </li>
                <li>
                  <i className="ri-check-double-line" />
                  We believe that our continuous commitment to create value
                  needed by society, will lead to the Group’s sustainable
                  growth. The world is facing some serious social issues such as
                  climate change, which increases the expectations on the
                  private sector toward solving these issues. We will accomplish
                  our goal, as represented by the Group’s corporate
                  message—“Enriching lives and the world”—to further enrich the
                  world, society, and people’s lives. By living up to our
                  principles, we will unite as one to take on the challenge of
                  creating new value get.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tentang-sbi"
        className="services section-bg"
        style={{
          justifyContent: "center",
          background: "#f3f5fa",
          marginTop: "50px",
        }}
      >
        <div className="container" data-aos="fade-up">
          <div className="services-title">
            <h2>SWS WAY</h2>
            <p>
              Action principles for all of us in the Sumitomo harness business
            </p>
          </div>
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item  position-relative">
                <h3>Professionalism</h3>
                <p>Costumer Satisfaction</p>
                <p>Honesty and Integrity</p>
                <p>Pride in what we do</p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-item position-relative">
                <h3>Team Work</h3>
                <p>Mutual communication</p>
                <p>Accountability & Cooperation</p>
                <p>Diversity & Inclusion</p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item position-relative">
                <h3>Challenge</h3>
                <p>Forward Thinking</p>
                <p>Learning from experience</p>
                <p>Ambition & Perseverance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangSBI;
