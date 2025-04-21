import Link from "next/link";

export default function Footer() {
  const linkStyles =
    "hover:text-white hover:font-bold transition-colors duration-300 ease-in-out"

  return (
    <footer className="flex w-full flex-col items-center justify-center border-t border-gray-500 px-4 pt-10">
      <div className="flex w-full max-w-4xl flex-wrap justify-center gap-10 pb-10 text-center text-gray-400">
        <Link href="/" className={linkStyles}>
          Home
        </Link>
        <Link href="/students" className={linkStyles}>
          Students
        </Link>
        <Link href="/alumni" className={linkStyles}>
          Alumni
        </Link>
        <Link href="/competition-scores" className={linkStyles}>
          Competition Scores
        </Link>
        <Link href="/about" className={linkStyles}>
          About
        </Link>
      </div>
      <div className="flex w-full justify-center pb-2 text-gray-400">
        <Link href="/oss-attributions" className={linkStyles}>
          OSS Attributions
        </Link>
      </div>
      <p className="w-full px-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Computer Science Club - University of
        Northwestern-St. Paul
      </p>
    </footer>
  );
}
