import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center mb-6">

      <div className="flex items-center gap-3 bg-[#1A1A22] px-4 py-2 rounded-lg">
        <SearchIcon />
        <input
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <NotificationsIcon className="text-2xl cursor-pointer" />

        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-600"
        />
      </div>
    </div>
  );
}
