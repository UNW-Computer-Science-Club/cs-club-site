import Link from "next/link";
import Image from "next/image";
export default function Josiah() {
  return (
    <div>
      
      <h1 className="m-10 text-center text-[60px]">
        <b>Josiah Paul</b>
      </h1>
      <p className="text-center text-[30px]">
        Computer Science student and CSC member!
      </p>
      <div id="about" className="px-180 pt-30 pl-1 text-[25px]">
        <p className="pl-37 font-bold">About</p>
        <p>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;I have been a CSC member since 2024 and a Comp
          Sci student since 2022.
          <br></br>So far, I would say python has been the most fun language to
          learn.
        </p>
        <Link href="https://github.com/JP-STHS" target="_blank">
        
          <Image
            className="pt-6 invert-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/960px-Octicons-mark-github.svg.png"
            width={100}
            height={100}
            alt="Github"
          />
        </Link>
      </div>

      {/* Java Script in React */}
      <script></script>
    </div>
  );
}
// explain a bit about urself, projects u worked on with club, projects u worked on in general
