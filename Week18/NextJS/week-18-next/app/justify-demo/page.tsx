"use client";

import { useState } from "react";

type JustifyType =
  | "justify-start"
  | "justify-center"
  | "justify-end"
  | "justify-between"
  | "justify-around"
  | "justify-evenly";

const JUSTIFY_OPTIONS: {
  value: JustifyType;
  label: string;
  description: string;
}[] = [
  {
    value: "justify-start",
    label: "justify-start",
    description: "Items are packed at the start of the main axis (default).",
  },
  {
    value: "justify-center",
    label: "justify-center",
    description: "Items are grouped and centered along the main axis.",
  },
  {
    value: "justify-end",
    label: "justify-end",
    description: "Items are packed at the end of the main axis.",
  },
  {
    value: "justify-between",
    label: "justify-between",
    description:
      "First item at start, last at end, space distributed between items.",
  },
  {
    value: "justify-around",
    label: "justify-around",
    description:
      "Equal space around each item; edge space is half of middle space.",
  },
  {
    value: "justify-evenly",
    label: "justify-evenly",
    description:
      "Equal spacing between items and edges (most visually balanced).",
  },
];

export default function JustifyDemo() {
  const [justify, setJustify] = useState<JustifyType>("justify-start");

  const current = JUSTIFY_OPTIONS.find(j => j.value === justify)!;

  return (
    <div className="min-h-screen bg-gray-500 p-10 space-y-8">
      <h1 className="text-3xl font-bold">Flexbox Justify Demo</h1>

      {/* Dropdown */}
      <div className="max-w-sm">
        <label className="block mb-2 font-semibold">Select justify option</label>
        <select
          value={justify}
          onChange={(e) => setJustify(e.target.value as JustifyType)}
          className="w-full rounded-md bg-gray-950 border p-2"
        >
          {JUSTIFY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="bg-gray-950 p-4 rounded-md shadow">
        <p className="font-semibold">{current.label}</p>
        <p className="text-gray-100">{current.description}</p>
      </div>

      {/* Visual Demo */}
      <div className="bg-gray-950 p-6 rounded-md shadow">
        <p className="mb-4 font-semibold">Live Layout Preview</p>

        <div
          className={`flex ${justify} border-2 border-dashed border-gray-400 p-4 h-32`}
        >
          <Box label="1" />
          <Box label="2" />
          <Box label="3" />
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Dashed border = flex container (main axis is horizontal)
        </p>
      </div>
    </div>
  );
}

function Box({ label }: { label: string }) {
  return (
    <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center font-bold rounded">
      {label}
    </div>
  );
}
