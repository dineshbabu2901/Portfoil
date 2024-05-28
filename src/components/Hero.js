import React from "react";
import HeroImg from "../assects/hero.png";
import videoSource from "../assects/123.mp4";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";


export default function Hero() {
  const config = {
    subtitle: "I'm a Full-stack developer and Designer ,Front End Developer,Back End Developer,Software Engineer",
    social: {
      twitter: "https://x.com/DineshB00373118?t=EparODC0jwFiuJAf0ap_pw&s=09",
      facebook:
        "https://www.facebook.com/people/Dinesh/pfbid02fqTZtCjeeUq3zcyA9CabdQJwceLBR6wU6x6BpCt8nro452JTK9ZCogoUmWasZAs3l/?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/dineshbabu2001",
      github: "https://github.com/dineshbabu2901",
      instagram:
        "https://www.instagram.com/silent_smile_2901?igsh=b2lnY2UyNnduYnZj",
    },
  };

  return (
    <section className="relative flex flex-col md:flex-row px-5 py-32  justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0  blur"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="md:w-1/2 relative z-10 flex flex-col">
        <h1 className="text-white text-6xl font-hero-font">
          Hi, <br /> I'm <span className="text-black">S</span> Dinesh
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10 ">
          <a href={config.social.twitter} className="pr-5 hover:text-white text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a
            href={config.social.facebook}
            className="  hover:bg-black text-white pr-5"
          >
            <AiOutlineFacebook size={40} />
          </a>
          <a href={config.social.linkedin} className="pr-5 hover:text-white text-white">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href={config.social.github} className="pr-5 hover:text-white text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href={config.social.instagram} className="hover:text-white text-white">
            <AiOutlineInstagram size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3 z-10" src={HeroImg} alt="Hero" />
    </section>
  );
}
