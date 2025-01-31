import Image from "next/image";

import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col w-3/4  gap-3  py-20 max-sm:hidden">
      <h2 className="text-3xl font-bold font-Playwrite py-5">Our Projects</h2>{" "}
      <div className="grid grid-cols-2  gap-7  ">
        <Image
          src={image1}
          alt="Project Image 1"
          className="w-full h-56 object-cover rounded-md transition hover:scale-110 hover:cursor-pointer duration-300 "
        />
        <Image
          src={image2}
          alt="Project Image 2"
          className="w-full h-56 object-cover rounded-md transition hover:scale-110 hover:cursor-pointer duration-300"
        />
      </div>
      <div className="grid grid-cols-[1fr_2fr_1.5fr] gap-7 ">
        <div className="">
          {" "}
          <Image
            src={image4}
            alt="Project Image 4"
            className="w-full h-56 object-cover rounded-md transition hover:scale-110 hover:cursor-pointer duration-300 "
          />
        </div>
        <div>
          {" "}
          <Image
            src={image3}
            alt="Project Image 3"
            className="  h-56 object-cover rounded-md transition hover:scale-110 hover:cursor-pointer duration-300"
          />
        </div>
        <div>
          {" "}
          <Image
            src={image4}
            alt="Project Image 4"
            className="w-full h-56 object-cover rounded-md  transition hover:scale-110 hover:cursor-pointer duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
