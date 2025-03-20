import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1 className="p-4 text-center text-6xl font-bold text-red-800 underline">
        McAlvin&apos;s Sigma Page
      </h1>
      <div className="flex justify-center">
        <Image
          src="/images/mcalvin-juasemai/iumui.png"
          width={330}
          height={750}
          alt="Test Image"
          className=""
        />
      </div>
    </>
  );
}
