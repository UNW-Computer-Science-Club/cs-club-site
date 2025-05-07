import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Students - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

const students = [
  { id: "daniel-deutsch", name: "Daniel Deutsch" },
  { id: "ethan-reed", name: "Ethan Reed" },
  { id: "andrew-hayes", name: "Andrew Hayes" },
  { id: "carter-leitch", name: "Carter Leitch" },
  { id: "austin-long", name: "Austin Long" },
  { id: "josie-mellick", name: "Josie Mellick" },
  { id: "josiah-paul", name: "Josiah Paul" },
  { id: "dylan-weakly", name: "Dylan Weakly" },
  { id: "mason-colacicco", name: "Mason Colacicco" },
  // Add more students as needed
];

const StudentsPage: React.FC = () => {
  return (
    <div className="ml-5 md:ml-0">
      <h1 className="pt-10 text-5xl font-extrabold">Students List</h1>
      <ul className="pt-5 text-xl text-gray-300">
        {students.map((student) => (
          <li
            className="mt-3 transition-colors duration-500 ease-in-out hover:font-bold hover:text-white"
            key={student.id}
          >
            <Link href={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;
