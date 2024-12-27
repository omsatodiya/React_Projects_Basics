import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [animateTestimonials, setAnimateTestimonials] = useState(false);
  const [animateCollaborators, setAnimateCollaborators] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      text: "Amazing experience working with this team!",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Developer",
      text: "Best development partner ever!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Designer",
      text: "Incredible attention to detail!",
    },
  ];

  const collaborators = [
    {
      id: 1,
      name: "Company 1",
      logo: "https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Company 2",
      logo: "https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Company 3",
      logo: "https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl">
      <ScrollTrigger
        onEnter={() => setAnimate(true)}
        onExit={() => setAnimate(false)}
      >
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div
              className={`max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto transition-all duration-1000 transform ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl font-bold sm:text-5xl">
                Download Now
                <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
              </h2>

              <Link
                className={`inline-flex text-white items-center px-6 py-3 font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </div>
          </div>

          <div
            className={`absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full transition-all duration-1000 transform ${
              animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <img
              className="w-96"
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="image1"
            />
          </div>
        </aside>
      </ScrollTrigger>

      {/* Testimonials Section */}
      <ScrollTrigger
        onEnter={() => setAnimateTestimonials(true)}
        onExit={() => setAnimateTestimonials(false)}
      >
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ${
                animateTestimonials
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white p-6 rounded-lg shadow-md transition-all duration-1000 delay-${
                    index * 200
                  } ${
                    animateTestimonials
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="font-medium">
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollTrigger>

      {/* Collaborators Section */}
      <ScrollTrigger
        onEnter={() => setAnimateCollaborators(true)}
        onExit={() => setAnimateCollaborators(false)}
      >
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ${
                animateCollaborators
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Our Collaborators
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
              {collaborators.map((collaborator, index) => (
                <div
                  key={collaborator.id}
                  className={`transition-all duration-1000 delay-${
                    index * 200
                  } ${
                    animateCollaborators
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                >
                  <img
                    src={collaborator.logo}
                    alt={collaborator.name}
                    className="h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </div>
  );
}
