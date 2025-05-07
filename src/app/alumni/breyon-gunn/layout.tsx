import CustomBackground from "@/components/custom-bg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomBackground color="var(--color-gray-900)" />
      {children}
    </>
  );
}
