import Image from "next/image";
import type { Metadata } from "next";
import { Organization } from "schema-dts";
import { JsonLd } from "react-schemaorg";

const clubDescription =
  "We are dedicated to fostering a community of innovation and" +
  " collaboration in computer science. We aim to empower students of all" +
  " skill levels through collaborative projects and mentorship while" +
  " promoting the development of technical skills and critical thinking." +
  " Our goal is to inspire and prepare members for future leadership in technology.";

function JsonLdMetadata() {
  return (
    <JsonLd<Organization>
      item={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "University of Northwestern - St. Paul - Computer Science Club",
        url: "https://unwcsclub.dev",
        description: clubDescription,
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: "University of Northwestern - St. Paul",
          url: "https://www.unwsp.edu",
        },
      }}
    />
  );
}

export const metadata: Metadata = {
  title: "Home - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

export default function Home() {
  return (
    <div className="p-10">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="flex items-center justify-center">
        <Image
          className="items-center rounded-lg shadow-md transition-transform duration-300"
          width={300}
          height={300}
          src="/images/general/csc-logo.png"
          alt="CS Club Logo"
        />
      </div>
      <h1 className="pt-10 pb-5 text-center text-6xl">
        Welcome to the CS Club Site!
      </h1>
      <p className="pt-5 text-center text-2xl">
        We are the Computer Science Club at the University of Northwestern-St.
        Paul in Roseville, Minnesota.
      </p>
      <p className="pb-5 text-center text-2xl">{clubDescription}</p>
      <h2 className="pt-10 text-center text-4xl">Our Club Members</h2>
      <div className="flex items-center justify-center pt-5">
        <Image
          className="rounded-lg shadow-md transition-transform duration-300 hover:scale-102"
          width={700}
          height={300}
          src="/images/general/club-fall24.png"
          alt="Our Club Members"
        />
      </div>
      <JsonLdMetadata />
    </div>
  );
}
