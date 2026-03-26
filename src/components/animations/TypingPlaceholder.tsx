"use client";
import { useState, useEffect, useCallback } from "react";

const PROMPTS = [
  "Design a seamless payment flow for a fintech app...",
  "Build an interactive video experience with shoppable moments...",
  "Create a live commerce platform that converts viewers into buyers...",
  "Simplify a complex enterprise dashboard into something people actually use...",
];

export default function TypingPlaceholder() {
  const [displayText, setDisplayText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  const currentPrompt = PROMPTS[promptIndex];

  const nextPrompt = useCallback(() => {
    setPromptIndex((prev) => (prev + 1) % PROMPTS.length);
    setCharIndex(0);
    setDisplayText("");
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase === "typing") {
      if (charIndex < currentPrompt.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentPrompt[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 45 + Math.random() * 25);
        return () => clearTimeout(timeout);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("deleting"), 2000);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        nextPrompt();
      }
    }
  }, [charIndex, phase, displayText, currentPrompt, nextPrompt]);

  return (
    <span className={`text-gray-400 ${phase !== "pausing" ? "typing-cursor" : ""}`}>
      {displayText}
    </span>
  );
}
