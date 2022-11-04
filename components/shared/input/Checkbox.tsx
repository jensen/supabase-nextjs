"use client";

import { useState } from "react";
import classnames from "classnames";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="cursor-pointer">
      <span aria-hidden="true" className="flex items-center p-0.5">
        <input
          className="hidden"
          type="checkbox"
          onChange={(event) => setChecked(event.target.checked)}
          checked={checked}
        />
        <span
          className={classnames("relative border w-4 h-4 rounded text-black", {
            "border-white bg-white": checked === true,
            "border-stone-500": checked === false,
          })}
        >
          {checked && (
            <svg
              className="absolute top-[-1px] left-[-1px]"
              viewBox="0 0 20 20"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M14 7L8.5 12.5L6 10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          )}
        </span>
      </span>
    </label>
  );
}
