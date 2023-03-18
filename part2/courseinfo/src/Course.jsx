import Content from "./Content";
import Header from "./Header";

export default function Course({ courses }) {
  return (
    <>
      {courses.map((course) => {
        return (
          <>
            <Header title={course.name} />
            <Content content={course.parts} />
          </>
        );
      })}
    </>
  );
}
