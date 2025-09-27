import { testimonials } from "../constants";


export const Testimonials = () => {
  return (
    <div id="testimonials" className="border-b border-neutral-700 p-10 mb-10 mb-neutral-900">
      <div className="">
        <h1 className="text-center text-4xl  capitalize mb-5 mt-10 ">
          what people are saying
        </h1>
        {/*  */}
        <div className="flex flex-wrap">
          {testimonials.map((i, index) => (
            <div className="w-full lg:w-1/3 md:w-1/2 p-2">
            <div key={index} className="hover:scale-104 transition shadow hover:shadow-orange-400 bg-neutral-900 rounded p-5 mt-10">
              <p className="mb-5 text-neutral-400">
                {i.text}
              </p>
              <div className="flex items-center">
                <img src={i.image} alt="" className="size-8 rounded-full mr-3" />
                <div>
                  <a href="#" className="capitalize ">{i.user}</a>
                  <p className="text-neutral-500 capitalize text-sm">
                    {i.company}
                  </p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
