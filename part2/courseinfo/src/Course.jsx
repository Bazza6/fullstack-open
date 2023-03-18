import Content from "./Content";
import Header from "./Header";

export default function Course({ course }) {
  return (
    <>
      <Header title={course.name} />
      <Content content={course.parts} />
    </>
  );
}
