import Content from "./Content";
import Header from "./Header";

export default function Course({ courses }) {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header title={course.name} />
            <Content content={course.parts} />
          </div>
        );
      })}
    </>
  );
}
