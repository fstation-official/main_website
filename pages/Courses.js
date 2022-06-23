import React from "react";
import { getPosts } from "../Services/courses";

function Courses({ courses }) {
  return (
    <>
      <div className="course-con">
        {courses.map((course) => (
          <div className="container px-4 mx-auto my-12 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      className="block w-full h-auto"
                      src={course.image.url}
                      key={course.image}
                    />
                  </a>

                  <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                    <h1 className="text-lg">
                      <a
                        className="text-black no-underline hover:underline"
                        key={course.title}
                      >
                        {course.title}
                      </a>
                    </h1>
                  </header>
                  <p
                    className="ml-5 text-sm text-grey-darker"
                    key={course.description}
                  >
                    {course.description}
                  </p>
                  <button className="justify-center px-5 py-4 mb-5 ml-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    <a key={course.link} href={course.link}>
                      Button
                    </a>
                  </button>
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Courses;

export async function getStaticProps() {
  const courses = (await getPosts()) || [];

  return {
    props: { courses },
    revalidate: 5,
  };
}
