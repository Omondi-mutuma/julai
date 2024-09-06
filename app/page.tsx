import Image from "next/image";
import GridBg from "./ui/GridBg";
import About from "./ui/About";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen  flex-col items-center justify-center ">
        <GridBg />
        <About />
      </main>
    </>
  );
}
