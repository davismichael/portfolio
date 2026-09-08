"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BatteryFull, CalendarDays, Check, ChevronDown, ChevronRight, Clock, Flame, Home,
  Lock, Minus, Play, Plus, Signal, SlidersHorizontal, Square, Users, Wifi,
} from "lucide-react";

// A tappable mini BreakOff running inside the hero phone. Mirrors the
// current app: protected time, up next, start a break with a duration.
// Fake data, real interactions.

const ORANGE = "#ff983b";
const CARD = "#141414";
const CHIP = "#1e1e1e";

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export default function LivePrototype() {
  const [onBreak, setOnBreak] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(90); // minutes
  const [breaks, setBreaks] = useState(9);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!onBreak) return;
    const id = setInterval(() => setSeconds((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [onBreak]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1500);
    return () => clearTimeout(t);
  }, [toast]);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  const durationLabel = `${Math.floor(duration / 60)}h ${duration % 60 ? `${duration % 60}m` : ""}`.trim();

  function toggleBreak() {
    if (onBreak) {
      setOnBreak(false);
      setSeconds(0);
      setBreaks((b) => b + 1);
      setToast("Break saved");
    } else {
      setOnBreak(true);
      setToast("Apps locked");
    }
  }

  return (
    <div className="absolute inset-0 bg-[#0a0a0a] text-white flex flex-col select-none overflow-hidden" style={{ fontSize: 11 }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold shrink-0">
        <span>9:41</span>
        <span className="flex items-center gap-1"><Signal size={10} /><Wifi size={10} /><BatteryFull size={12} /></span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 shrink-0">
        <span className="font-bold text-[16px] tracking-tight">
          Break<span style={{ color: ORANGE }}>O</span>ff
        </span>
        <span className="rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1" style={{ background: "#3a2312", color: ORANGE }}>
          <Flame size={11} fill={ORANGE} /> 27
        </span>
      </div>

      <div className="px-4 pt-1.5 shrink-0">
        <p className="text-neutral-400 text-[9px]">{greeting}</p>
        <p className="font-semibold text-[11px] leading-tight">Rest is not a reward. It&apos;s a requirement.</p>
      </div>

      {/* Protected time */}
      <div className="mx-4 mt-2 rounded-2xl p-2.5 shrink-0" style={{ background: CARD }}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] tracking-[0.15em] text-neutral-400 uppercase">Protected time</span>
          <span className="rounded-full px-2 py-0.5 text-[9px] flex items-center gap-1" style={{ background: CHIP }}>
            This month <ChevronDown size={9} />
          </span>
        </div>
        <div className="flex items-end justify-between mt-1.5">
          <div>
            <p className="font-bold text-[20px] leading-none tabular-nums">
              {onBreak ? fmt(seconds) : "2d 2hrs"}
            </p>
            <p className="text-neutral-400 text-[9px] mt-1">{onBreak ? "on this break" : "4d 2h less than last month"}</p>
          </div>
          <div className="flex items-end gap-[3px] h-6">
            {[10, 14, 18, 20, 24].map((h, i) => (
              <motion.span
                key={i}
                className="w-[4px] rounded-sm"
                style={{ background: i === 4 ? ORANGE : "#3a3a3a", height: h }}
                animate={{ height: onBreak && i === 4 ? 28 : h }}
              />
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-2 pt-1.5 space-y-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-2 text-neutral-300">
              <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: CHIP }}><Clock size={10} /></span>
              Longest break
            </span>
            <span className="font-semibold">9h</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-2 text-neutral-300">
              <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: CHIP }}><Check size={10} /></span>
              Breaks taken
            </span>
            <motion.span key={breaks} initial={{ scale: 1.3, color: ORANGE }} animate={{ scale: 1, color: "#fff" }} className="font-semibold">
              {breaks}
            </motion.span>
          </div>
        </div>
      </div>

      {/* Up next */}
      <div className="mx-4 mt-1.5 rounded-2xl px-3 py-2 flex items-center justify-between shrink-0" style={{ background: CARD }}>
        <span className="flex items-center gap-2">
          <CalendarDays size={12} className="text-neutral-400" />
          <span className="leading-tight">
            <span className="block text-[8px] tracking-[0.15em] text-neutral-400 uppercase">Up next</span>
            <span className="block text-[11px] font-semibold">Deep work</span>
          </span>
        </span>
        <span className="flex items-center gap-1 text-[10px] text-neutral-300">Tomorrow 8:00 AM <ChevronRight size={10} /></span>
      </div>

      {/* Start a break */}
      <div className="mx-4 mt-1.5 rounded-2xl p-2.5 shrink-0" style={{ background: CARD }}>
        <p className="text-[9px] tracking-[0.15em] text-neutral-400 uppercase">Start a break</p>
        <div className="flex gap-2 mt-1.5">
          <span className="rounded-full px-2 py-1 text-[10px] font-semibold flex items-center gap-1" style={{ background: CHIP }}>
            <Lock size={9} /> Locked <ChevronDown size={9} />
          </span>
          <span className="rounded-full px-2 py-1 text-[10px] font-semibold flex items-center gap-1 flex-1 justify-center" style={{ background: CHIP }}>
            Blocked <span className="text-neutral-400 font-normal">+53</span> <ChevronDown size={9} />
          </span>
        </div>
        <div className="flex items-center justify-between rounded-full mt-1.5 px-1 py-0.5" style={{ background: CHIP }}>
          <button onClick={() => setDuration((d) => Math.max(15, d - 15))} className="w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center" aria-label="Less time">
            <Minus size={10} />
          </button>
          <span className="font-bold text-[12px] flex items-center gap-1">{durationLabel} <ChevronDown size={10} /></span>
          <button onClick={() => setDuration((d) => Math.min(480, d + 15))} className="w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center" aria-label="More time">
            <Plus size={10} />
          </button>
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={toggleBreak}
          className="w-full rounded-full py-1.5 mt-1.5 text-[11px] font-bold flex items-center justify-center gap-1.5"
          style={onBreak ? { background: ORANGE, color: "#111" } : { background: "#fff", color: "#111" }}
        >
          {onBreak ? <Square size={10} fill="#111" /> : <Play size={10} fill="#111" />}
          {onBreak ? "End Break" : "Start Break"}
        </motion.button>
      </div>

      {/* Tab bar */}
      <div className="mt-auto mx-4 mb-2 rounded-full px-3 py-1 flex justify-around text-[8px] text-neutral-400 shrink-0" style={{ background: CARD }}>
        <span className="text-white flex flex-col items-center gap-0.5 rounded-full px-3 py-1" style={{ background: CHIP }}><Home size={12} />Home</span>
        <span className="flex flex-col items-center gap-0.5 px-3 py-1"><SlidersHorizontal size={12} />Rules</span>
        <span className="flex flex-col items-center gap-0.5 px-3 py-1"><Users size={12} />Circles</span>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-16 rounded-full bg-white text-black text-[10px] font-semibold px-3 py-1.5"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
