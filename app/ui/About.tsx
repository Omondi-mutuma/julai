import Image from "next/image";
import React from "react";
import Button from "./Button";
import { ArrowLeftCircle } from "lucide-react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="min-h-screen relative pl-0 flex flex-col-reverse justify-center items-center gap-6  md:flex-row md:items-center md:py-16 ">
      <div className=" h-full">
        <Image
          src={"/markus-spiske-rNn_TU8dvoY-unsplash.jpg"}
          alt=""
          width={640}
          height={427}
          className="block md:hidden"
        />
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1679002174170-93de5abcae97?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={1920}
          height={1281}
          className="hidden h-full w-full md:block"
        />
      </div>
      <div className="h-full flex flex-col items-center gap-4 p-8 justify-center md:items-start">
        <h2 className="font-semibold text-slate-950">About us</h2>
        <p className="text-slate-600 text-center text-3xl md:text-start md:text-5xl">
          We are a team of{" "}
          <span className="text-slate-950 font-medium">passionate</span>{" "}
          individuals dedicated to promoting{" "}
          <span className="text-slate-950 font-medium">sustainable energy</span>{" "}
          solutions that benefit both the{" "}
          <span className="text-slate-950 font-medium">environment</span> and{" "}
          <span className="text-slate-950 font-medium">society</span> as a whole
        </p>
        <Button
          type={"button"}
          label={"Learn More"}
          variant={"btn-outline"}
          icon={BsArrowRightCircleFill}
        />
      </div>
    </section>
  );
};

export default About;
