import type { Metadata } from "next";
import Image from "@/components/image";
import Link from "next/link";
import CSCLogo from "@/svg/csc-logo.svg";

export const metadata: Metadata = {
  title: "Alumni - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

const students = [{ id: "breyon-gunn", name: "Breyon Gunn" }];

export default function Alumni() {
  return (
    <div className="flex flex-col gap-5 pt-5">
      <h1 className="pt-10 text-5xl font-extrabold">Alumni List</h1>
      <ul className="pt-5 text-2xl text-gray-300">
        {students.map((student) => (
          <li
            className="transition-colors duration-500 ease-in-out hover:font-bold hover:text-white"
            key={student.id}
          >
            <Link href={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center">
        <Link
          href="/students"
          className="mt-15 text-2xl underline decoration-[#d0623b]"
        >
          Check out our current students!
        </Link>
        <Image
          src={CSCLogo}
          alt="CSC Logo"
          width={800}
          height={600}
          className=""
        />
      </div>
    </div>
  );
}
