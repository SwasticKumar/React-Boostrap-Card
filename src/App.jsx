import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
import "./App";
const cardData = [
  {
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    image: "/cyber/cyber-hack.png",
    description:
      "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    date: "27 December 2023",
    comments: "No Comments",
  },
  {
    title:
      "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    image: "/cyber/bug.png",
    description:
      "Look around today, you will witness that we are more reliant on technology and devices",
    date: "18 November 2023",
    comments: "224 Comments",
  },
  {
    title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    image: "/cyber/hack.png",
    description:
      "Did you know that according to the University of Maryland hackers attack every 39 seconds",
    date: "21 October 2023",
    comments: "651 Comments",
  },
  {
    title: "8 Different Types of Cybersecurity and Threats Involved",
    image: "/cyber/sec.png",
    description:
      "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
    date: "9 August 2023",
    comments: "734 Comments",
  },
  {
    title:
      "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    image: "/cyber/data1.png",
    description:
      "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    date: "22 July 2023",
    comments: "2523 Comments",
  },
  {
    title: "Top 7 Cyber Security Attacks in Real Life",
    image: "/cyber/team.png",
    description:
      "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
    date: "10 June 2023",
    comments: "1982 Comments",
  },
];

export default function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="container">
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {cardData.map((card, index) => (
            <div className="col-lg col-md-6" key={index}>
              <div className="card h-100">
                <div>
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt="swasticblog"
                  />
                </div>
                <div className="card-body mt-2">
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "21px",
                      lineHeight: "21px",
                      fontWeight: "400",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {card.title}
                  </h5>
                  <p
                    className="card-text text-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    {card.description}
                  </p>
                  <p
                    style={{
                      color: "#007dfe",
                      fontWeight: "bold",
                      fontSize: "12px",
                      lineHeight: "12px",
                    }}
                  >
                    READ MORE »
                  </p>
                </div>
                <div
                  className="card-footer bg-secondary"
                  style={{ lineHeight: "15px" }}
                >
                  <small className="text-white d-inline-flex w-100 text-align-left">
                    {card.date}{" "}
                    <ul>
                      <li>{card.comments}</li>
                    </ul>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
