import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

import Courses from "./Courses";
const Home = () => {
  return (
    <>
      <div className="overflow-hidden App">
        <div className="grid sm:grid-cols-2 ">
          <Fade bottom>
            <div className="container mt-24">
              <h1 className="text-5xl font-bold text-center font-Monoub">
                Improve Your Coding Skills With{" "}
                <div className="inline-block text-red-600"></div>
              </h1>
              <p className="mt-5 ml-10 mr-5 font-medium text-center sm:text-left sm:ml-3 font-Monoub">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more{" "}
              </p>

              <button
                type="button"
                className="px-6 py-4 mt-5 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ml-36 sm:ml-48 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get Started
              </button>

              <div className="hidden mb-2 ml-2 overflow-x-auto sm:block lg:ml-20">
                <img
                  className="inline-block h-10 mt-5 sm:mt-10 lg:mt-2"
                  src="data:image/png;base64,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"
                />
                <img
                  className="inline-block h-10 mt-5 ml-3 sm:mt-10 lg:mt-2"
                  src="data:image/png;base64,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"
                />
                <img
                  className="inline-block h-10 mt-5 ml-3 sm:mt-10 lg:mt-2"
                  src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                />
                <img
                  className="inline-block h-10 mt-5 ml-3 sm:mt-10 lg:mt-2"
                  src="data:image/jpeg;base64,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"
                />
                <img
                  className="inline-block h-10 mt-5 ml-3 rounded-md sm:mt-10 lg:mt-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                />
                <img
                  className="inline-block h-10 mt-5 ml-3 sm:mt-10 lg:mt-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
                />
              </div>
            </div>
          </Fade>

          <div className="">
            <Flip bottom>
              <img className=" sm:mt-10 lg:mt-2" src="../code1.gif" />
            </Flip>
          </div>
          <div></div>
        </div>
        <div className="visible mt-16 ml-5 overflow-x-auto sm:float-right md:hidden sm:hidden lg:hidden xl:hidden lg:ml-20">
          <div>
            <img
              className="inline-block h-10 mt-5 sm:mt-10 lg:mt-2"
              src="https://png2.cleanpng.com/sh/b1a0f7530791d7bb6cbc5fd67fff1c1d/L0KzQYm3VcE5N5p6R91yc4Pzfri0kvVia6UyhNHwbz3tccfokBNzcaF5Rdh7b373PbL1hL1jaZRwRdd3ZIOwhcTskr1qdqUyTdNvZXa4R4bqUMk3bWIzUKI6NUG2SYO4VcI3PmY9TKQ6N0i7SXB3jvc=/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1.8015139215266584217889.png"
            />
            <img
              className="inline-block h-10 mt-5 ml-5 sm:mt-10 lg:mt-2"
              src="data:image/png;base64,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"
            />
            <img
              className="inline-block h-10 mt-5 ml-5 sm:mt-10 lg:mt-2"
              src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
            />
            <img
              className="inline-block h-10 mt-5 ml-5 sm:mt-10 lg:mt-2"
              src="data:image/jpeg;base64,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"
            />
            <img
              className="inline-block h-10 mt-5 ml-5 rounded-md sm:mt-10 lg:mt-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            />
            <img
              className="inline-block h-10 mt-5 ml-5 sm:mt-10 lg:mt-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 shadow-2xl bg-gray-50">
        <div data-aos="fade-left">
          <div className="grid gap-5 md:grid-cols-2 bg-white-800 md:ml-10 ">
            <div className="relative">
            <Fade left>
              <iframe
                className="relative inset-0 w-full mt-5 mb-5 h-72 sm:rounded-md"
                src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
              ></iframe>
              </Fade>
            </div>
            <Fade right>
            <div className="relative mt-5 ml-2 mr-2 sm:mt-16">
              <h1 className="pb-2 text-2xl font-medium text-gray-800">
                About Us
              </h1>
              <p className="mt-2 text-left text-gray-800 ">
                We are the Premium Cyber security and Future Technologies
                Training Center in Kerala. Take a look at the reviews and
                stories about us here.
              </p>
              <button
                type="button"
                className="px-6 py-4 mb-5 text-sm font-medium text-white transition bg-blue-700 rounded-lg hover:shadow-2xl mt-7 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get Started
              </button>
              <button
                type="button"
                className="px-6 py-4 mb-5 ml-2 text-sm font-medium text-white transition bg-blue-700 rounded-lg hover:shadow-2xl mt-7 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get Started
              </button>
            </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="py-16 overflow-hidden bg-gray-50">
        <div className="container px-6 m-auto space-y-8 text-gray-500 md:px-12">
          <div>
          <Fade bottom>
            <span className="text-lg font-semibold text-gray-600">
              Main features
            </span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-4xl">
              A technology-first approach to payments{" "}
              <br className="lg:block" hidden /> and finance
            </h2>
            </Fade>
          </div>
          <div className="grid mt-16 overflow-hidden border divide-x divide-y rounded-xl sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white transition  hover:z-[1] hover:shadow-2xl">
            <Fade bottom>
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                    First feature
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
              </div>
              </Fade>
            </div>
            <Fade bottom>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                    Second feature
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
              </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                    Third feature
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
              </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                    Third feature
                  </h5>
                  <p className="text-sm text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
