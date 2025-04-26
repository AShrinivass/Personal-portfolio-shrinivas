import React from "react";

function BentoGrid() {
  const bentoItems = [
    {
      id: "1",
      title: "box 1",
      className: "col-span-2 row-span-2",
    },
    {
      id: "2",
      title: "box 1",
      className: "",
    },
    {
      id: "3",
      title: "box 2",
      className: "",
    },
    {
      id: "4",
      title: "box 3",
      className: "",
    },
    {
      id: "5",
      title: "wide box",
      className: "col-span-2",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4 min-h-[400px] mt-10 mx-10 w-[70%]">
          {bentoItems.map((item) => (
            <div
              className={` bg-white/80 dark:bg-[#121826]/10 border border-gray-300 dark:border-white/10 shadow-md dark:shadow-[0_4px_20px_rgba(0,162,255,0.15)] text-gray-800 dark:text-gray-100 rounded-md z-10 ${item.className}`}
              key={item.id}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default BentoGrid;
