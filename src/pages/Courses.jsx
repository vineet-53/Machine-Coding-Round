import { coursesData } from "../data/courses.data.js";
import Container from "../components/common/Container.jsx";
import CoursesList from "../components/core/CoursesList.jsx";
import StickyLogo from "../components/common/StickyLogo.jsx";
export default function Courses() {
  return (
    <div className="flex-col bg-courses-primary min-h-screen justify-center max-lg:px-4 items-center flex">
      <h1 className="text-center mb-14 md:mb-20 text-courses-secondary font-extrabold text-5xl md:text-7xl">
        {coursesData.heading}
      </h1>
      <Container
        title={coursesData.title}
        subTitle={coursesData.subTitle}
        courses={true}
      >
        <CoursesList />
      </Container>

      <StickyLogo />
    </div>
  );
}
