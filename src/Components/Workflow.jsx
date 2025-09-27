import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";

export const Workflow = () => {
  return (
    <div id="workflow" className="mt-5">
      <p className="text-center capitalize text-orange-600">workflow</p>
      <h1
        className="text-center text-4xl lg:text-6xl sm:text-5xl tracking wide lg:mt-10 sm:mt-20"
      >
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          coding workflow
        </span>
      </h1>

      <div className="flex flex-wrap mt-5">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="" className="" />
        </div>
        <div className="w-full lg:w-1/2 ">
          {checklistItems.map((i, index) => (
            <div key={index} className="flex mb-12">
              <div className="bg-neutral-900 p-2 rounded-full size-10 mt-5 text-green-400">
                <CheckCircle2/>
              </div>
              <div className="mt-5 mx-4">
              <h1 className="mt-1 mb-2 text-xl">{i.title}</h1>
              <p className="text-neutral-500 text-md">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
