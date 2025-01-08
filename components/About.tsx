import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16 " id="about">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          {" "}
          I am a <b>Lucknow-based full-stack developer </b>specializing in{" "}
          <b>Web and Cloud-based solutions</b>, currently pursuing a B.Tech in
          Computer Science and Engineering at Jaypee University of Engineering
          and Technology (CGPA: <b>8.7/10</b>). Skilled in{" "}
          <b>React, Next.js, TypeScript, Python, Node.js, and MongoDB</b>, I
          create scalable, user-friendly web applications. My projects include
          WanderWave (interactive travel diary), Home Away (hotel management
          system), and SavorServe (food ordering app).
          <br />
          During my internship at <b>FnMoney</b>, I developed full-stack
          platforms with optimized performance, built LLM-powered form
          automation, and created a chatbot for financial queries integrated
          with Twilio and WhatsApp, automating processes and improving user
          engagement. Passionate about innovation and problem-solving, I combine
          technical expertise and creativity to build impactful solutions.{" "}
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
