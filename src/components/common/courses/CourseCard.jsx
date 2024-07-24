import { useRef, useState } from "react";
import {
  GridImage,
  DropdownImage,
} from "../../../assets/images/courses/index.js";
import { FaArrowDown, FaArrowUp, FaTrash } from "react-icons/fa";
import Image from "../Image";
import ListItem from "../ListItem";
export default function CourseCard(props) {
  const {
    title,
    imgSrc,
    price,
    category,
    id,
    dragstart,
    dragenter,
    dragend,
    startId,
    lastId,
    drag,
    setDrag,
    moveCardup,
    moveCarddown,
    removeCard,
  } = props;
  const listRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  function handleDropDown() {
    setDropdown((prev) => !prev);
  }
  return (
    <>
      <li
        id={id}
        ref={listRef}
        draggable
        onDragStart={() => {
          startId.current = listRef.current;
          setDrag(true);
        }}
        onDragEnter={() => {
          lastId.current = listRef.current;
        }}
        onDragEnd={() => {
          setDrag(false);
          dragend();
        }}
        className={`relative hidden select-none list-none  md:flex gap-x-4 lg:gap-x-6 items-center font-bold rounded-lg py-2 px-2 ${drag && startId.current === listRef.current ? "border-dashed border-[#7E7E7E] border-2 bg-courses-tertiary  " : "shadow-sm shadow-[#00000040] "}`}
      >
        <Image icon={GridImage} alt="grid" />
        <img
          src={imgSrc}
          className="select-none max-w-[150px] h-20 rounded-xl"
        />
        <div className="flex-1 text-[#000000] text-sm md:text-xl">{title}</div>
        <div className="text-left text-sm">
          {!price ? "Free" : `Rs. ${price}/- `}
        </div>
        <div className="py-2 rounded-xl max-h-10 flex text-sm justify-center items-center px-3 bg-courses-primary font-normal">
          {category}
        </div>
        <Image icon={DropdownImage} alt="grid" onClick={handleDropDown} />
        {dropdown && (
          <ul className="bg-[#F7F7F7] shadow-[#00000040] shadow-xl cursor-pointer absolute right-0 top-[75%] z-40 rounded-xl">
            <ListItem
              styles=""
              onClick={() => {
                moveCardup(id);
                setDropdown(false);
              }}
            >
              <FaArrowUp />
              <span>Move To Top</span>
            </ListItem>
            <ListItem
              onClick={() => {
                moveCarddown(id);
                setDropdown(false);
              }}
            >
              <FaArrowDown />
              <span>Move To Bottom</span>
            </ListItem>
            <ListItem
              styles="text-[#FA2D2D]"
              onClick={() => {
                removeCard(id);
                setDropdown(false);
              }}
            >
              <FaTrash />
              <span className="text-[#FA2D2D]">Remove</span>
            </ListItem>
          </ul>
        )}
      </li>
      <li
        id={id}
        ref={listRef}
        draggable
        onDragStart={() => {
          startId.current = listRef.current;
          setDrag(true);
        }}
        onDragEnter={() => {
          lastId.current = listRef.current;
        }}
        onDragEnd={() => {
          setDrag(false);
          dragend();
        }}
        className={`md:hidden list-none relative select-none  sm:flex gap-x-4 lg:gap-x-6 items-center font-bold rounded-lg py-2 px-2 ${drag && startId.current === listRef.current ? "border-dashed border-[#7E7E7E] border-2 bg-courses-tertiary" : "shadow-sm shadow-[#7E7E7E] "}`}
      >
        <div className="flex ">
          <div className="grid justify-center items-center px-1"></div>
          <div className="flex flex-col  gap-3">
            <div>
              <img src={imgSrc} className=" rounded-xl" />
            </div>
            <div className="flex gap-2 items-center max-sm:font-bold">
              <div className="flex-1 text-[#000000] text-xl  md:text-xl">
                {title}
              </div>
              <div>
                <span className="w-full text-left text-sm max-sm:font-bold max-sm:text-lg">
                  {!price ? "Free" : `Rs. ${price}/- `}
                </span>
              </div>
              <div className="rounded-xl max-h-10 flex text-sm justify-center items-center px-3 items-center py-2 bg-courses-primary font-normal">
                {category}
              </div>
              <Image
                icon={DropdownImage}
                onClick={handleDropDown}
                styles={"cursor-pointer"}
              />

              {dropdown && (
                <ul className="bg-[#F7F7F7] shadow-[#000000] border-2 border-[#000000] border-opacity-40 shadow-2xl cursor-pointer absolute right-0 top-[95%] z-40 rounded-xl">
                  <ListItem
                    styles=""
                    onClick={() => {
                      moveCardup(id);
                      setDropdown(false);
                    }}
                  >
                    <FaArrowUp />
                    <span>Move To Top</span>
                  </ListItem>
                  <ListItem
                    onClick={() => {
                      moveCarddown(id);
                      setDropdown(false);
                    }}
                  >
                    <FaArrowDown />
                    <span>Move To Bottom</span>
                  </ListItem>
                  <ListItem
                    styles="text-[#FA2D2D]"
                    onClick={() => {
                      removeCard(id);
                      setDropdown(false);
                    }}
                  >
                    <FaTrash />
                    <span className="text-[#FA2D2D]">Remove</span>
                  </ListItem>
                </ul>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
