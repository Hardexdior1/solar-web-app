import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import { BsArrowDown, BsPercent } from "react-icons/bs";
import ScrollTrigger from "react-scroll-trigger";
const CounterSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      className="hidden md:block"
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="p-3 bg-[#1E1E2F] text-white font-bold text-center ">
        <h1 className="text-3xl"> 2023 AT A GLANCE</h1>
        <p> Here’s a brief overview of our performance in the past year.</p>
      </div>
      <div className="p-5 bg-[#1E1E2F] text-white font-bold flex items-center justify-between px-20 py-2 md:px-20 py-10 mb-8">
        <div>
          <div className="flex gap-1 items-center">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={1700}
                duration={4}
                delay={0}
              />
            )}
            <BsArrowDown className="text-2xl text-[#54A9CE] font-bold" />
          </div>
          <p className=" text-[#fff]">TOTAL SOLAR PANELS INSTALLED</p>
          <p className="font-semibold">Total PV Modules Installed in 2023</p>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={781.3}
                duration={2}
                delay={0}
              />
            )}
            (kWP)
            {/* <BsArrowDown className="text-2xl text-[#54A9CE] font-bold" /> */}
          </div>
          <p className=" text-[#fff]">KILOWATT PEAK (kWP)</p>
          <p className="font-semibold"> Total Solar Power Generated in 2023</p>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={2300}
                duration={4}
                delay={0}
              />
            )}
            {/* <BsArrowDown className="text-2xl text-[#54A9CE] font-bold" /> */}
          </div>
          <p className=" text-[#fff]">BATTERY BACKUP</p>
          <p className="font-semibold">
            {" "}
            Total Backup Storage Capacity Installed in 2023
          </p>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={1580}
                duration={3}
                delay={0}
              />
            )}
            (kVA)
            {/* <BsArrowDown className="text-2xl text-[#54A9CE] font-bold" /> */}
          </div>
          <p className=" text-[#fff]">SYSTEM CAPACITY (kVA)</p>
          <p className="font-semibold"> Total Inverter Capacity in 2023</p>
        </div>

        {/* <div>
          <div className="flex gap-1 items-center">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={98}
                duration={2}
                delay={0}
              />
            )}
            <BsPercent className="text-2xl text-[#54A9CE] font-bold md:text-4xl" />
          </div>
          <p className="font-semibold text-[#fff]">User Satisfaction</p>
        </div> */}

        {/* <div>
          <div className="flex gap-1 items-center">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={184}
                duration={2}
                delay={0}
              />
            )}
            <h1 className="text-2xl text-[#54A9CE] font-semibold md:text-4xl">
              k
            </h1>
          </div>
          <p className="font-semibold text-[#fff]">Nigerians Worldwide</p>
        </div> */}

        {/* <div>
          <div className="flex gap-1 items-center">
            {counterOn && (
              <CountUp
                className="text-2xl md:text-4xl"
                start={0}
                end={600}
                duration={2}
                delay={0}
              />
            )}
            <h1 className="text-2xl text-[#54A9CE] font-semibold md:text-4xl">
              /s
            </h1>
          </div>
          <p className="font-semibold text-[#fff]">Connections Made</p>
        </div> */}
      </div>
    </ScrollTrigger>
  );
};

export default CounterSection;
