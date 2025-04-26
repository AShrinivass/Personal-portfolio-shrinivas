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
      <div className="grid grid-cols-3 gap-4 min-h-[400px] mt-10 mx-10">
        {bentoItems.map((item) => (
          <div
            className={`font-bold border-8 border-white rounded-md bg-[#f5f5f7] rounded-lg backdrop-blur-lg shadow-xl ${item.className}`}
            key={item.id}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
}
export default BentoGrid;
