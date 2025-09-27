import v1 from "../assets/video1.mp4"
import v2 from "../assets/video2.mp4"

export const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-15">
      <h1 className="sm:text-6xl lg:text-7xl text-4xl text-center tracking-wide">
        ZapCode build tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>

      <div className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        <span>
          Empower your creativity and bring your VR ideas to code effectively.
        </span>
        <span>
          Get started today and turn your imagination into immense reality.
        </span>
      </div>
      <div className="flex my-5 justify-center gap-5">
        <a
          href="#"
          className="hover:scale-105 transition px-3 py-2 rounded bg-gradient-to-r from-orange-500 to-orange-800"
        >
          Start for free{" "}
        </a>
        <a
          href="#"
          className="hover:scale-105 transition px-3 py-2 border border-white rounded "
        >
          Documentation
        </a>
      </div>
      <div className="lg:flex ">
        <video autoPlay loop muted className="lg:w-1/2 rounded-lg border border-orange-400 shadow-orange-400 mx-2 my-4"  src={v1}>Your broser doesnot support the video tag</video>
        <video autoPlay loop muted className="lg:w-1/2 rounded-lg border border-orange-400 shadow-orange-400 mx-2 my-4" src={v2}>Your broser doesnot support the video tag</video>
      </div>
    </div>
  );
};
