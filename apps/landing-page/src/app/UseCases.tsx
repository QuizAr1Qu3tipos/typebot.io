"use client";

import { Button } from "@/components/button";
import { Progress } from "@/components/progress";
import { motion } from "framer-motion";
import Image from "next/image";
import builderDndSrc from "public/images/builder-dnd.png";
import builderScreenshotSrc from "public/images/builder-screenshot.png";
import nativeFeelingSrc from "public/images/native-feeling.png";
import { useEffect, useState } from "react";

const useCases = [
  {
    value: "marketing",
    label: "Marketing",
    imageSrc: builderScreenshotSrc,
  },
  {
    value: "support",
    label: "Support & Product",
    imageSrc: nativeFeelingSrc,
  },
  {
    value: "sales",
    label: "Sales",
    imageSrc: builderDndSrc,
  },
] as const;

export const UseCases = () => {
  const [isAutoProgressEnabled, setIsAutoProgressEnabled] = useState(true);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [currentUseCase, setCurrentUseCase] = useState<{
    index: number;
    value: number;
  }>({
    index: 0,
    value: 0,
  });
  let interval: NodeJS.Timer;

  useEffect(() => {
    interval = setInterval(() => {
      setPreviousIndex(currentUseCase.index);
      setCurrentUseCase((prev) => {
        if (prev.value < 100) {
          return { ...prev, value: prev.value + 1 };
        } else {
          return {
            index: prev.index === useCases.length - 1 ? 0 : prev.index + 1,
            value: 0,
          };
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const selectUseCase = (index: number) => {
    setPreviousIndex(currentUseCase.index);
    setCurrentUseCase({ index, value: 0 });
    setIsAutoProgressEnabled(false);
    clearInterval(interval);
  };

  const getProgressValue = (index: number) => {
    if (isAutoProgressEnabled) {
      if (currentUseCase.index === index) return currentUseCase.value;
      return;
    }
    if (currentUseCase.index === index) return 100;
    return;
  };

  return (
    <div className="flex flex-col gap-10 px-4 md:pt-10">
      <div className="flex flex-col items-center gap-8 md:12">
        <div className="flex items-end gap-4 md:gap-12">
          {useCases.map((useCase, index) => (
            <UsecaseTitle
              progressValue={getProgressValue(index)}
              onClick={() => selectUseCase(index)}
              key={useCase.value}
            >
              {useCase.label}
            </UsecaseTitle>
          ))}
        </div>
        <motion.div
          key={currentUseCase.index}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.5,
          }}
          initial={{
            opacity: 0,
            x: previousIndex < currentUseCase.index ? 30 : -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <Image
            src={useCases[currentUseCase.index].imageSrc}
            alt="Builder screenshot"
            placeholder="blur"
            className="rounded-md max-w-6xl w-full"
          />
        </motion.div>
      </div>
      <Cta />
    </div>
  );
};

const UsecaseTitle = ({
  children,
  progressValue,
  onClick,
}: {
  children: React.ReactNode;
  progressValue?: number;
  onClick?: () => void;
}) => (
  <button
    className="flex flex-col items-center gap-2 flex-shrink-0"
    onClick={onClick}
  >
    <h3
      className="text-lg md:text-2xl font-medium transition-opacity duration-200 ease-out text-center"
      style={{ opacity: progressValue ? 1 : 0.5 }}
    >
      {children}
    </h3>
    <Progress value={progressValue ?? 0} className="w-12" />
  </button>
);

export const Cta = () => (
  <div className="flex flex-col gap-6 items-center">
    <p className="text-gray-11 text-balance max-w-4xl md:text-center">
      Picture{" "}
      <span className="font-medium">
        a bot that goes beyond answering questions
      </span>
      : it builds relationships, shares content, sparks conversations, and
      reflects your business's personality and values. With over 3 billion
      people on messaging apps,{" "}
      <span className="font-medium">
        it's time to connect with your customers where they are
      </span>
      .
    </p>
    <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
      <Button variant="cta" size="lg">
        Try it out for free
      </Button>
      <Button variant="ctaSecondary" size="lg">
        Book a demo
      </Button>
    </div>
  </div>
);
