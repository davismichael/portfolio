"use client";
import { CHIPS } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "../animations/StaggerContainer";
import ChipButton from "./ChipButton";

export default function ChipRow() {
  return (
    <StaggerContainer className="flex flex-wrap justify-center gap-3">
      {CHIPS.map((chip) => (
        <StaggerItem key={chip.label}>
          <ChipButton icon={chip.icon} label={chip.label} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
