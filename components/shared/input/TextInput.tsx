"use client";

import React, { useState } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput({ label, ...props }: TextInputProps) {
  return (
    <label className="flex flex-col">
      <span className="uppercase text-zinc-500 font-bold text-sm mb-2">
        {label}
      </span>
      <input type="text" className="h-10" {...props} />
    </label>
  );
}
