import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";


export default function Hero() {
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 md:py-40">
      <div className="text-center">
        <RoughNotationGroup show={true}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
                <RainbowHighlight color={colors[1]}>
                    Welcome to My Portfolio
                </RainbowHighlight>
            </h1>
        </RoughNotationGroup>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                    I&apos;m Sergio Lissanou, a Software Engineer specializing in full-stack development.
                </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </div>
    </div>
  );
}