import { useState, useRef } from "react";
import { DropdownImage, GridImage } from "../../../assets/images/courses";
import Image from "../Image";
export default function CourseCard({
  id,
  imgSrc,
  title,
  price = "",
  category,
  dragstart,
  dragenter,
  dragend,
  startId,
  lastId,
}) {
  const listRef = useRef(null);
  return (
    <>
      <li
        id={id}
        ref={listRef}
        draggable
        onDragStart={() => {
          startId.current = listRef.current;
        }}
        onDragEnter={() => {
          lastId.current = listRef.current;
        }}
        onDragEnd={dragend}
        className="hidden select-none  md:flex gap-x-4 lg:gap-x-6 items-center border-2 border-[#7E7E7E] font-bold rounded-lg py-2 px-2"
      >
        <Image icon={GridImage} alt="grid" />
        <img
          src={imgSrc}
          className="select-none max-w-[150px] h-20 rounded-xl"
        />
        <div className="flex-1 text-[#000000] text-sm md:text-xl">{title}</div>
        <div className="text-left text-sm">
          {price == "" ? "Free" : `Rs. ${price}/- `}
        </div>
        <div className="py-2 rounded-xl max-h-10 flex text-sm justify-center items-center px-3 bg-courses-primary font-normal">
          {category}
        </div>
        <Image icon={DropdownImage} alt="grid" />
      </li>
      <li
        id={id}
        onDragStart={dragstart}
        onDragEnd={dragend}
        onDragEnter={dragenter}
        className="select-none gap-x-2 md:hidden flex  items-center border-2 border-[#7E7E7E] rounded-lg py-2 px-2"
      >
        <div className="flex ">
          <div className="grid justify-center items-center px-1">
            <Image icon={GridImage} />
          </div>
          <div className="flex flex-col  gap-3">
            <div>
              <img src={imgSrc} className="max-h-[300px] rounded-xl" />
            </div>
            <div className="flex gap-2 items-center max-sm:font-bold">
              <div className="flex-1 text-[#000000] text-xl  md:text-xl">
                {title}
              </div>
              <div>
                <span className="w-full text-left text-sm max-sm:font-bold max-sm:text-lg">
                  {price == "" ? "Free" : `Rs. ${price}/- `}
                </span>
              </div>
              <div className="rounded-xl max-h-10 flex text-sm justify-center items-center px-3 items-center py-2 bg-courses-primary font-normal">
                {category}
              </div>
            </div>
          </div>
          <div className="grid justify-center items-center px-1">
            <Image icon={DropdownImage} />
          </div>
        </div>
      </li>
    </>
  );
}
