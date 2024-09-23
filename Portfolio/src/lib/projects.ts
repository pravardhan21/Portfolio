import { v4 as uuid } from "uuid"
export const projects = [
  {
    id: uuid(),
    name: "Intrusion Detection using machine learning",
    description:
"Developed a Network Intrusion Detection System (NetIDS) using machine learning to accurately detect and classify malicious activities and anomalies in network traffic",
    image: "/projects/P1.png",
    labels: ["SNORT", "Machine Learning", "Linux"],
    date: "Ongoing",
    sourceCode:null,
    liveUrl: null,
  },
  {
    id: uuid(),
    name: "Cargo Connect",
    description:
      "Cargo Connect is a digital platform designed to link shippers and carriers across India, aiming to enhance logistics operations.",
      image: "/projects/P3.png",
    labels: ["React.js", " Express.js", "MongoDB", "TailwindCSS"],
    date: "January 2024",
    sourceCode: "https://github.com/ranjithkumar404/Cargo-Connect",
    liveUrl: null,
  },

 
 
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
// Sort in descending order based on the recent project
