import { features } from "../constants";


export const Features = () => {
  return (
    <div
      id="feature"
      className="relative mt-20 border-b min-h-[600px] border-neutral-800"
    >
      <div className="text-center">
        <a href="#feature" className="text-sm text-orange-600 ">
          Features
        </a>
        <h1 className="text-4xl lg:text-6xl sm:text-5xl tracking wide lg:mt-10 sm:mt-20">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature,index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="mx-6 flex justify-center items-center h-10 w-10 bg-neutral-900 text-orange-700 rounded-full p-2">
                {feature.icon }
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="pb-5 text-md text-neutral-500 mb-10">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};