import Image from "next/image";
import { items } from "./config";

export const LogoList = () => {
  return (
    <ul className="flex ">
      {items.map((item, index) => (
        <li key={index} className={index !== items.length - 1 ? "mr-10" : ""}>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <Image
              src={item}
              width={18}
              height={12}
              alt={`logo-${index + 1}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
