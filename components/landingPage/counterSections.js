import React from "react";
import CounterSection from "./counterSection";
import { FaTv, FaUserTie, FaUserGraduate } from "react-icons/fa";
import { BiSolidBadgeCheck } from "react-icons/bi";

const COUNTER_DATA = [
  {
    title: "Online Courses",
    count: 10,
    isMoreCount: false,
    containerStyle: "bg-warning bg-opacity-15",
    icon: <FaTv className="display-6 lh-1 text-warning mb-0" />,
    counterRef: "onlineCourses",
  },
  {
    title: "Expert Tutors",
    count: 200,
    isMoreCount: true,
    containerStyle: "bg-blue bg-opacity-10",
    icon: <FaUserTie className="display-6 lh-1 text-blue mb-0" />,
    counterRef: "expertTutors",
  },
  {
    title: "Online Students",
    count: 60,
    isMoreCount: true,
    containerStyle: "bg-purple bg-opacity-10",
    icon: <FaUserGraduate className="display-6 lh-1 text-purple mb-0" />,
    counterRef: "onlineStudents",
  },
  {
    title: "Certified Courses",
    count: 6,
    isMoreCount: true,
    containerStyle: "bg-info bg-opacity-10",
    icon: <BiSolidBadgeCheck className="display-6 lh-1 text-info mb-0" />,
    counterRef: "certifiedCourses",
  },
];

function CounterSections() {
  return (
    <section className="py-0 py-xl-5">
      <div className="container">
        <div className="row g-4">
          {COUNTER_DATA.map((data, index) => {
            return (
              <CounterSection
                key={index}
                containerStyle={data.containerStyle}
                count={data.count}
                isMoreCount={data.isMoreCount}
                title={data.title}
                icon={data.icon}
                counterRef={data.counterRef}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CounterSections;
