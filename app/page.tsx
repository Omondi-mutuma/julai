import Image from "next/image";
import GridBg from "./ui/GridBg";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-between ">
        <GridBg />
      </main>
    </>
  );
}
