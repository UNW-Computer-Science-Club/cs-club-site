import Link from "next/link";
import Image from "@/components/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-4 text-center text-3xl font-bold">
        This is Andrew&apos;s Page!
      </h1>
      {/*<p className="mb-6 text-center">Welcome to this empty page.</p>*/}

      {/* Add the image here */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/images/andrew/ahayeswatermark.jpg"
          alt="Andrew leaning against a wall"
          width={300}
          height={450}
          className="rounded shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex justify-center">
        {/* GitHub logo button */}
        <Link
          href="https://github.com/andytheroo13"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          <Image
            src="/images/andrew/GitHubLogo.png"
            alt="GitHub Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </div>

      {/*  quote box  */}
      <div className="mb-6 rounded-lg bg-gray-800 p-4 text-center shadow-md">
        <p className="text-lg text-green-300 italic">
          “Bugs are like diamonds — the impurities make your program shine.”
        </p>
        <p className="mt-2 text-sm text-gray-400">– Andrew, probably</p>
      </div>

      <section className="mb-6 rounded-lg border-4 border-amber-600 bg-gray-800 p-4 transition-transform duration-300 ease-in-out hover:scale-110">
        <Link
          href="https://www.youtube.com/watch?v=C12rXla0uuo&pp=ygUOY2xvbmUgd2FycyBzZm0%3D"
          className="block text-center text-blue-500 hover:underline"
        >
          Click Here for a funny video I enjoy
        </Link>
        <p className="mt-4 text-center">
          Here are some projects I&apos;m working on:
        </p>
        <div className="flex flex-col justify-around gap-8 text-left md:flex-row">
          <ul className="list-inside list-disc pl-6 text-cyan-500">
            <li>The Last Crewman</li>
            <li>Image sorter for personal use</li>
          </ul>
        </div>
      </section>

      <section className="rounded-lg border-4 border-amber-600 bg-gray-800 p-4">
        <p className="mb-4 text-center text-lg font-bold text-blue-400">
          Im not just a software engineer, I also have a life outside of coding!
          I enjoy a varity of things that I feel like sharing with you!
        </p>
        <div className="flex flex-col justify-around gap-8 text-left md:flex-row">
          {/* Games Section */}
          <div>
            <p className="text-center text-red-500 md:text-left">
              I am a fan of the following games:
            </p>
            <ul className="list-inside list-disc pl-6">
              <div className="flex gap-2">
                <Image
                  src="/images/andrew/Fallout4.jpg"
                  alt="Fallout 4 Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <Image
                  src="/images/andrew/minecraft2.jpg"
                  alt="Minecraft Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <li>Fallout 4</li>
              <li>Minecraft</li>
              <li>Slay the Princess</li>
              <li>Hollow Knight</li>
              <li>Terria</li>
            </ul>
          </div>
          {/* Shows Section */}
          <div>
            <p className="text-center text-red-500 md:text-left">
              I am also a fan of the following shows:
            </p>
            <ul className="list-disc pl-6">
              <li>Star Trek</li>
              <li>Star Wars</li>
              <li>Doctor Who</li>
              <li>Goblin Slayer</li>
              <li>Frieren: Beyond Journey&apos;s End</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
