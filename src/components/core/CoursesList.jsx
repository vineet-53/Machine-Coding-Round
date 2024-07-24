import { useEffect, useRef, useState } from "react";
import CourseCard from "../common/courses/CourseCard";
import toast from "react-hot-toast";

export default function CoursesList({ data }) {
  const startId = useRef(null);
  const lastId = useRef(null);
  const [courses, setCourses] = useState(data);
  const [drag, setDrag] = useState(false);
  function handleUpdateList(fromIndex, toIndex) {
    const copyCoursesList = courses.filter((item, index) => {
      if (index != fromIndex) {
        return item;
      }
    });
    copyCoursesList.splice(toIndex, 0, courses[fromIndex]);
    setCourses(copyCoursesList);
  }

  function dragend() {
    const fromIndex = parseInt(startId.current.attributes.id.value);
    const toIndex = parseInt(lastId.current.attributes.id.value);
    if (lastId.current) {
      handleUpdateList(fromIndex, toIndex);
    }
  }
  function moveCardup(id) {
    let newIndex = id - 1;
    if (id > 0) {
      handleUpdateList(id, newIndex);
    }
  }
  function moveCarddown(id) {
    let newIndex = id + 1;
    if (id < courses.length) {
      handleUpdateList(id, newIndex);
    }
  }
  function removeCard(id) {
    setCourses(
      courses.filter((item, index) => {
        if (index != id) {
          return item;
        }
      }),
    );
    toast.success("Removed Card");
  }
  return (
    <div className="flex flex-col gap-y-3 px-4 md:px-4 py-4">
      {courses?.map((course, index) => {
        return (
          <CourseCard
            id={index}
            key={index}
            startId={startId}
            lastId={lastId}
            title={course.title}
            category={course.category}
            price={course?.price}
            imgSrc={course.img}
            dragend={dragend}
            drag={drag}
            setDrag={setDrag}
            moveCardup={moveCardup}
            moveCarddown={moveCarddown}
            removeCard={removeCard}
          />
        );
      })}
    </div>
  );
}
