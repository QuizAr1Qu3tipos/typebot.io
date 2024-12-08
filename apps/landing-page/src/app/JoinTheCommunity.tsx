import { Button } from "@/components/button";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import abhaySrc from "public/images/abhay.jpeg";
import annaFilou from "public/images/annaFilou.jpeg";
import barretta from "public/images/barretta.jpeg";
import joshua from "public/images/joshua.jpg";
import kurnia from "public/images/kurnia.jpeg";
import laszlo from "public/images/laszlo.jpeg";
import lucas from "public/images/lucas.png";
import nicolai from "public/images/nicolai.jpg";
import { discordUrl } from "./constants";

const stats = [
  {
    stat: "2M+",
    label: "monthly chats",
  },
  {
    stat: "1.5M+",
    label: "bots published",
  },
  {
    stat: "3,000+",
    label: "members on Discord",
  },
];

const avatars = [
  {
    src: abhaySrc,
    alt: "Community member 1 avatar",
    position: "top-1 left-36",
  },
  {
    src: laszlo,
    alt: "Community member 2 avatar",
    position: "top-32 left-4 delay-500",
  },
  {
    src: joshua,
    alt: "Community member 3 avatar",
    position: "bottom-8 left-24 delay-300",
  },
  {
    src: lucas,
    alt: "Community member 4 avatar",
    position: "-bottom-7 -left-7 delay-700",
  },
  {
    src: kurnia,
    alt: "Community member 5 avatar",
    position: "top-1 right-36 delay-1000",
  },
  {
    src: nicolai,
    alt: "Community member 6 avatar",
    position: "top-28 right-4 delay-500",
  },
  {
    src: barretta,
    alt: "Community member 7 avatar",
    position: "bottom-12 right-32 delay-300",
  },
  {
    src: annaFilou,
    alt: "Community member 8 avatar",
    position: "bottom-7 -right-7",
  },
];

export const JoinTheCommunity = () => (
  <div className="flex flex-col bg-gray-1 rounded-2xl w-full max-w-7xl">
    <div className="relative flex dark rounded-2xl md:rounded-b-none p-6 pt-12 md:pb-12 justify-center overflow-hidden">
      <FloatingAvatars className="hidden md:block" />
      <div className="flex flex-col gap-12 md:items-center max-w-4xl">
        <div className="flex flex-col gap-6 text-balance md:text-center z-10">
          <h2 className="text-gray-12">
            Together, we&apos;re hacking the future of
            <br className="hidden md:block" />
            conversational AI apps
          </h2>
          <p className="text-gray-11">
            Join the Typebot community to connect with chatbot enthusiasts,
            share insights, and learn together to create advanced automations.
            Get exclusive resources, influence product development, and be part
            of a network that's shaping the future of conversational apps.
          </p>
        </div>
        <Button
          variant="cta"
          size="lg"
          render={<Link href={discordUrl} target="_blank" />}
        >
          Join the community
        </Button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-evenly gap-6 p-6 md:p-8">
      {stats.map(({ stat, label }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <span className="text-4xl font-heading font-medium">{stat}</span>
          <span className="text-gray-11">{label}</span>
        </div>
      ))}
    </div>
  </div>
);

const FloatingAvatars = ({ className }: { className?: string }) => (
  <div className={className}>
    {avatars.map(({ src, alt, position }) => (
      <Image
        key={alt}
        src={src}
        alt={alt}
        className={clsx(
          `rounded-full w-16 h-16 border-4 absolute animate-float`,
          position,
        )}
      />
    ))}
  </div>
);
