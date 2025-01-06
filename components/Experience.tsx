import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          Experience
        </h2>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              FnMoney
            </h3>
            <p className="sm:text-lg italic">Full Stack Developer Intern</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              August 2024 – January 2025
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
          I developed a full-stack platform using React, Express.js, and
          MongoDB, designing authentication flows, dashboards, and modular
          components that improved feature delivery by 40%. I optimized server
          performance, reducing response times by 15%, and implemented an
          LLM-powered module to automate form processing. Additionally, I built
          a chatbot for financial queries using Milvus DB and LangGraph,
          integrating it with Twilio and WhatsApp to automate over 500 monthly
          invoices and notifications, enhancing user engagement and reducing
          manual effort by 40%.
        </p>
      </WobbleCard>
    </div>
  );
};

export default Experience;
