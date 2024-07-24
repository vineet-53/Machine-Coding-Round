import { coursesData as courses } from "../data/courses.data.js";
import Container from "../components/common/Container.jsx";
import CoursesList from "../components/core/CoursesList.jsx";
import StickyLogo from "../components/common/StickyLogo.jsx";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ToastMessage from "../components/common/templates/ToastMessage.jsx";
export default function Courses() {
  const [popup, setPopup] = useState(true);
  function showPopup() {
    toast.custom((t) => <ToastMessage t={t} />);
  }
  useEffect(() => {
    setTimeout(() => {
      setPopup(false);
    }, 4000);
  }, []);

  return (
    <div className="flex-col bg-courses-primary justify-center items-center py-10 min-h-screen justify-center max-lg:px-4 items-center flex">
      {popup ? showPopup() : undefined}
      <h1 className="text-center mb-14  text-courses-secondary font-extrabold text-5xl md:text-7xl">
        {courses.heading}
      </h1>
      <Container
        title={courses.title}
        subTitle={courses.subTitle}
        courses={true}
      >
        <CoursesList data={courses?.data ? courses.data : []} />
      </Container>

      <StickyLogo />
    </div>
  );
}
