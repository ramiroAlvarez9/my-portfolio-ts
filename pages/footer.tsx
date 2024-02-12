"use client";
import Image from "next/image";
import Logo from "../src/img/logo.png";
import Link from "next/link";
import TikTokIcon from "@/components/Icons/TikTokIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";
import SoundcloudIcon from "@/components/Icons/SoundcloudIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";

export default function Footer() {
  return (
    <>
      <section id="footer">
        <div className="footer__container flex items-center justify-between ">
          <div className="footer__containerLogo ">
            {/* <Image src={Logo} width={75} height={75} alt="logo" / > */}
            <p style ={{fontSize: '8px'}}> Golden Dragon Beats, All rights reserved </p>
          </div>

          <div className="footer__socialMediaContaner flex justify-between">
            <a
              href="https://www.tiktok.com/@goldendragonbeats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <SoundcloudIcon />
            </a>

            <a
              href="https://www.youtube.com/@GoldenDragonBeats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}