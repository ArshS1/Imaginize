"use client";

import fetchImagination from "@/lib/fetchImagination";
import React, { useState } from "react";
import useSWR from "swr";

function Prompt() {
  const [input, setInput] = useState("");

  // use swr
  const { data: suggestion, isLoading, mutate, isValidating } = useSWR(
    "/api/suggestion",
    fetchImagination,
    {
      revalidateOnFocus: false,
    }
  ); 

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          placeholder="* prompt goes here *"
          className="flex-1 p-4 outline-none rounded-md"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className={`p-4 ${
            input
              ? "bg-violet-500 text-white transition-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
          disabled={!input}
        >
          Imagine
        </button>
        <button
          className="p-4 bg-violet-400 text0white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
          type="submit"
        >
          Help w/ Imagination
        </button>
        <button
          className="p-4 text-violet-400 text0white transition-colors duration-200 font-bold rounded-b-md md:rounded-r-md md:rounded-bl-none border-none"
          type="submit"
        >
          Help w/ Imagination
        </button>
      </form>
    </div>
  );
}

export default Prompt;
