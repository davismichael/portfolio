"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BatteryFull, CalendarDays, Flame, Home, Play, Plus, Signal, Square, User, Wifi } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

// A tappable mini version of BreakOff running inside the hero phone.
// Fake data, real interactions: start and end a break, add a schedule.
// Proves "I build apps" better than a screenshot can.

const ORANGE = "#ff983b";

type Schedule = { id: number; name: string; time: string };

const STARTERS: Schedule[] = [
  { id: 1, name: "Work", time: "9:00 AM" },
  { id: 2, name: "Dinner", time: "6:30 PM" },
];
const EXTRA = [
  { name: "Gym", time: "7:00 AM" },
  { name: "Reading", time: "9:00 PM" },
  { name: "Family", time: "5:00 PM" },
];

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export default function LivePrototype() {
  const [onBreak, setOnBreak] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutesToday, setMinutesToday] = useState(94);
  const [schedules, setSchedules] = useState<Schedule[]>(STARTERS);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!onBreak) return;
    const id = setInterval(() => setSeconds((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [onBreak]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1600);
    return () => clearTimeout(t);
  }, [toast]);

  const goal = 120;
  const pct = useMemo(() => Math.min(100, Math.round(((minutesToday + seconds / 60) / goal) * 100)), [minutesToday, seconds]);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning." : hour < 18 ? "Good afternoon." : "Good evening.";

  function toggleBreak() {
    if (onBreak) {
      setMinutesToday((m) => m + Math.max(1, Math.round(seconds / 60)));
      setSeconds(0);
      setOnBreak(false);
      setToast("Break saved");
    } else {
      setOnBreak(true);
    }
  }

  function addSchedule() {
    const next = EXTRA[schedules.length - STARTERS.length];
    if (!next) {
      setToast("That's plenty for a demo");
      return;
    }
    setSchedules((s) => [...s, { id: Date.now(), ...next }]);
    setToast(`${next.name} added`);
  }

  return (
    <div className="absolute inset-0 bg-[#0b0b0b] text-white flex flex-col select-none overflow-hidden" style={{ fontSize: 11 }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold">
        <span>9:41</span>
        <span className="flex items-center gap-1"><Signal size={10} /><Wifi size={10} /><BatteryFull size={12} /></span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="font-bold text-[15px] tracking-tight">
          Break<span style={{ color: ORANGE }}>O</span>ff
        </span>
        <span className="rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1" style={{ background: "#3a2312", color: ORANGE }}>
          <Flame size={11} fill={ORANGE} /> 6
        </span>
      </div>

      <div className="px-4 pt-3">
        <p className="font-bold text-[14px] leading-tight">{greeting}</p>
        <p className="text-neutral-400 text-[12px]">You are not a metric.</p>
      </div>

      {/* Stat card */}
      <div className="mx-4 mt-3 rounded-xl bg-[#171717] p-3">
        <div className="flex items-center justify-between text-[10px] text-neutral-400">
          <span>{onBreak ? "On a break" : "Off Phone Today"}</span>
          <span>{pct}%</span>
        </div>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="font-bold text-[20px] tabular-nums">
            {onBreak ? fmt(seconds) : `${(minutesToday / 60).toFixed(1)}`}
          </span>
          <span className="text-neutral-400 text-[10px]">{onBreak ? "elapsed" : "of 2 hrs"}</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-neutral-700 overflow-hidden">
          <motion.div className="h-full" style={{ background: "#fff" }} animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }} />
        </div>
        <p className="mt-1.5 text-[10px] font-semibold" style={{ color: ORANGE }}>
          {pct >= 100 ? "Perfect day complete" : `${goal - Math.round(minutesToday + seconds / 60)} min to go`}
        </p>
      </div>

      {/* Schedules */}
      <div className="px-4 pt-3 flex-1 min-h-0 flex flex-col">
        <p className="text-[10px] text-neutral-400 mb-1.5 shrink-0">Schedules</p>
        <div className="space-y-1.5 overflow-y-auto min-h-0 flex-1 pb-1">
          <AnimatePresence initial={false}>
            {schedules.map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-between rounded-lg bg-[#171717] px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-neutral-800 flex items-center justify-center"><CalendarDays size={11} /></span>
                  <div className="leading-tight">
                    <p className="text-[9px] text-neutral-400">Next break</p>
                    <p className="text-[11px] font-semibold">{s.name}</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold">{s.time}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 pt-2 pb-2 flex gap-2 shrink-0 bg-[#0b0b0b]">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={toggleBreak}
          className="flex-1 rounded-full py-2 text-[11px] font-bold flex items-center justify-center gap-1.5"
          style={onBreak ? { background: ORANGE, color: "#111" } : { background: "#fff", color: "#111" }}
        >
          {onBreak ? <Square size={10} fill="#111" /> : <Play size={10} fill="#111" />}
          {onBreak ? "End Break" : "Start Break"}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={addSchedule}
          className="flex-1 rounded-full py-2 text-[11px] font-semibold bg-[#1f1f1f] flex items-center justify-center gap-1"
        >
          <Plus size={11} /> Add Schedule
        </motion.button>
      </div>

      {/* Tab bar */}
      <div className="flex justify-around border-t border-neutral-800 px-4 py-2 pb-4 text-[9px] text-neutral-400 shrink-0">
        <span className="text-white flex flex-col items-center gap-0.5"><Home size={14} />Home</span>
        <span className="flex flex-col items-center gap-0.5"><User size={14} />Account</span>
      </div>

      {/* Toast */}
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
