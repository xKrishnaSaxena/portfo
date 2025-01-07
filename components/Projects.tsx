import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Ledger from "@/public/images/Ledger.jpeg";
import SavorServe from "@/public/images/SavorServe.jpeg";
import HomeAway from "@/public/images/Home-Away.jpeg";
import WanderWave from "@/public/images/WanderWave.jpeg";
import Inquiso from "@/public/images/Inquiso.jpeg";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://savorserve.vercel.app/homepage/"}
              target="_blank"
            >
              <Image
                src={SavorServe}
                alt="SavorServe"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">SavorServe</div>
            <Link
              href={"https://github.com/xKrishnaSaxena/SavorServe"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            A food ordering platform with features like user authentication,
            restaurant listings, secure payments via Stripe, and an admin
            dashboard for menu management. Includes responsive design and a
            review system.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Next.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Prisma
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              PostgreSQL
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Cloudinary
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Stripe
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://wanderwave-arfb.onrender.com/"}
              target="_blank"
            >
              <Image
                src={WanderWave}
                alt="WanderWave"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter"> WanderWave</div>
            <Link
              href={"https://github.com/xKrishnaSaxena/WanderWave-prod"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            A responsive travel diary app that allows users to mark visited
            cities on an interactive map, add personalized notes, and view a
            detailed city listing. Features secure authentication, responsive
            design, and seamless data storage.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              MERN
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              JWT
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Cloudinary
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
          </div>
        </div>

        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://home-away21.netlify.app/"} target="_blank">
              <Image
                src={HomeAway}
                alt="HomeAway"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">Home Away</div>
            <Link
              href={"https://github.com/xKrishnaSaxena/Home-Away"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            A streamlined hotel management system with dynamic dashboards for
            managing suites, guest bookings, and hotel policies. Includes
            light/dark mode, data visualizations, and customizable settings.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              React.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Supabase
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Recharts
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Styled Components
            </div>
          </div>
        </div>
        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link
              href={"https://ledger-wallet-six.vercel.app/"}
              target="_blank"
            >
              <Image
                src={Ledger}
                alt="Ledger"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">Ledger</div>
            <Link
              href={"https://github.com/xKrishnaSaxena/Ledger"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            A user-friendly cryptocurrency wallet for generating seed phrases,
            creating Solana and Ethereum wallets, viewing balances, and managing
            transactions. Features a responsive design for seamless use across
            devices.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Next.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Shadcn
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Solana web3.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              TypeScript
            </div>
          </div>
        </div>
        <div className="bg-foreground border-neutral-600 border-2 rounded-xl p-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={"https://inquiso.onrender.com/"} target="_blank">
              <Image
                src={Inquiso}
                alt="Inquiso"
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
            <div className="text-2xl font-bold font-inter">Inquiso</div>
            <Link
              href={"https://github.com/xKrishnaSaxena/Inquiso"}
              target="_blank"
            >
              <FaGithub className="hover:scale-110 size-6" />
            </Link>
          </div>
          <div className="px-3 text-neutral-400 italic">
            {" "}
            Inquiso is a dynamic platform that combines a Reddit-like tech forum
            and real-time Q&A rooms to foster collaboration and knowledge
            sharing. Users can explore and vote on categorized posts in dev,
            devops, and web3, while the live Q&A rooms allow admins to manage
            questions, respond in real-time, and enable participants to upvote
            or ask new questions. Built with WebSockets for seamless real-time
            interactions, Inquiso ensures a smooth and engaging experience.
          </div>
          <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Next.js
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Tailwind CSS
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Shadcn
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Socket.io
            </div>
            <div className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
              Radix UI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
