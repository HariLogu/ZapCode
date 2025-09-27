import { resourcesLinks } from "../constants";
import { platformLinks } from "../constants";
import { communityLinks } from "../constants";

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <div className="text-center lg:text-left mb-10">
          <h1 className="capitalize font-bold mb-3">resources</h1>
          {resourcesLinks.map((i, index) => (
            <ul key={index}>
              <a href={i.href}>
                <li className="capitalize text-sm mb-1">{i.text}</li>
              </a>
            </ul>
          ))}
        </div>

        <div className="text-center lg:text-left mb-10">
          <h1 className="capitalize font-bold mb-3">platform</h1>
          {platformLinks.map((i, index) => (
            <ul key={index}>
              <a href={i.href}>
                <li className="capitalize text-sm mb-1">{i.text}</li>
              </a>
            </ul>
          ))}
        </div>

        <div className="text-center lg:text-left mb-10">
          <h1 className="capitalize font-bold mb-3">community</h1>
          {communityLinks.map((i, index) => (
            <ul key={index}>
              <a href={i.href}>
                <li className="capitalize text-sm mb-1">{i.text}</li>
              </a>
            </ul>
          ))}
        </div>
      </div>
  );
};
