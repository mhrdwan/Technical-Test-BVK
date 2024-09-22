"use client";

import React from "react";

const Sidebar = () => (
  <div className="bg-[#1c4f6f] text-white w-64 min-h-screen p-4">
    <h1 className="text-2xl font-bold mb-6">Dashboard BVK</h1>
    <nav>
      <ul>
        <li className="mb-4">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"
              />
            </svg>
            User
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-1a4 4 0 00-5.33-3.8M9 20h6m-6 0v-1a4 4 0 015.33-3.8M9 20H4v-1a4 4 0 015.33-3.8M7 10a4 4 0 110-8 4 4 0 010 8zm10 0a4 4 0 110-8 4 4 0 010 8z"
              />
            </svg>
            User List
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
