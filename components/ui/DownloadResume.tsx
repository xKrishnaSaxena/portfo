import Link from "next/link";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

const DownloadResume: React.FC = () => {
  return (
    <Link
      href="https://docs.google.com/document/d/156Oul0fQql7xLAaLEhxlSLUfv3ZydPSP/edit?usp=drive_link&ouid=102411327152717586779&rtpof=true&sd=true"
      className="flex items-center justify-center px-3 py-2 bg-white/20 backdrop-blur-md text-white rounded-md border border-white/10 shadow-lg transition-transform duration-300 hover:bg-white/30 hover:scale-105 hover:cursor-pointer font-medium"
      target="_blank"
    >
      <div className="flex items-center text-sm lg:text-base 3xl:text-lg">
        <IoCloudDownloadOutline className="mr-2 " />
        <span>View CV</span>
      </div>
    </Link>
  );
};

export default DownloadResume;
