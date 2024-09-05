import { section } from "framer-motion/client";
import React from "react";
import Button from "./Button";
import { BsArrowRightCircleFill } from "react-icons/bs";
import CardDemo from "@/components/blocks/cards-demo-1";

const GridBg = () => {
  return (
    <section className="content-container relative min-h-screen bg-default-bg-rgb flex">
      <div className="w-full flex flex-col items-start justify-center z-10 lg:max-w-lg">
        <h1 className="text-6xl lg:text-7xl font-semibold text-gray-50">
          The Future <br></br>
          <span className="text-slate-950">of Sustainable</span> Energy
        </h1>
        <p className="mt-10 mb-6 max-w-xs">
          The future of energy will involve using clean and sustainable soures
          of power instead of relying of non-renewable resources.
        </p>
        <Button
          type={"submit"}
          label={"Learn More"}
          variant={"btn-filled"}
          icon={BsArrowRightCircleFill}
        />
      </div>
      <div className="border hidden absolute right-0 -bottom-0 md:flex  min-w-md overflow-clip">
        <div className=" lg:flex flex-col justify-center z-10">
          <video className="max-w-2xl max-h-[600px]" muted loop autoPlay>
            <source
              src="/8741596-hd_720_1280_30fps.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="lg:flex flex-col justify-center z-10">
          <video className="max-w-2xl max-h-[600px]" muted loop autoPlay>
            <source
              src="/8741596-hd_720_1280_30fps.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
      <div className="absolute -top-[50%] -left-[50%] h-[500px] w-[500px] border border-slate-400 rounded-full lg:-top-[40%] lg:-left-[20%]"></div>
      <div className="absolute -top-[50%] -left-[50%] h-[500px] w-[500px] border border-slate-400 rounded-full lg:-top-[60%] lg:-left-[5%]"></div>
      <div className="absolute -top-[50%] -left-[50%] h-[1000px] w-[500px] border border-slate-400 rounded-full rotate-45 lg:-top-[60%] lg:left-[10%]"></div>
    </section>
  );
};

export default GridBg;
