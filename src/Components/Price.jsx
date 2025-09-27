import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

export const Price = () => {
  return (
    <div id="pricing" className="mt-5 mb-5">
      <h1 className="capitalize text-4xl md:text-5xl lg:text-6xl text-center">
        pricing
      </h1>
      <div className="flex mt-20 flex-wrap  ">
        
        {pricingOptions.map((i, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
          <div
            key={index}
            className="rounded-xl border border-neutral-800  px-10 py-5 hover:border hover:border-orange-600 hover:scale-102 transition-all"
          >
            <h3 className="capitalize text-2xl mb-3">{i.title} <span className="text-sm text-orange-500">{i.special}</span> </h3>
            <p className="text-4xl">
              {i.price}{" "}
              <span className="text-sm capitalize text-neutral-500">
                /month
              </span>
            </p>
            
            {i.features.map((i,index) => (
              <div key={index} className="flex items-center mt-5 mb-5">
                <CheckCircle2 className="size-3  mr-1" />
                <p>{i}</p>
              </div>
            ))}

            <div className="flex justify-center w-full">
              <a
                href=""
                className="capitalize  border border-orange-800 w-full text-center py-2 my-4 rounded hover:bg-orange-700 transition"
              >
                subscribe
              </a>
            </div>
          </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
