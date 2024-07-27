import Image from "next/image";
import Link from "next/link";
import Skills from "./skills";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Education from "./education";

const BasicInfo = () => {
  return (
    <div className="p-5 border shadow-lg rounded-xl flex flex-col md:flex-row gap-2">
      <Image
        src="/image.png"
        width={150}
        height={150}
        className="rounded-full self-center md:self-start"
      />
      <div className="text-xl p-2 flex flex-col gap-1">
        <span className="font-bold">Raiyna Anwar</span>
        <span>Software Developer</span>
        <span className="font-extralight">MERN | Next.js</span>
        <div className="flex gap-3">
          <Link href="https://www.linkedin.com/in/raiyan-anwar/">
            <CiLinkedin size={30} />
          </Link>
          <Link href="https://github.com/Raiyan03">
            <FaGithub size={30} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <Skills />
        <Education />
      </div>
    </div>
  );
};

export default BasicInfo;
