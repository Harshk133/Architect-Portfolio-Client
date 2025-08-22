import Image from "next/image";
import Button from "./Button"; // import the button

export default function Card({ img, tag, title, description, button }) {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden p-3 flex flex-col justify-between text-black">
      {/* Image Section */}
      <div className="bg-white rounded-xl h-40 flex items-center justify-center relative overflow-hidden text-black">
        <Image
          src={img}
          alt="Card Preview"
          fill
          className="object-cover"
        />
        {/* Badge */}
        <span className="absolute bottom-2 right-2 bg-lime-300 text-black text-sm font-medium px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Content Section */}
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <h3 className="text-black font-semibold text-lg">{title}</h3>
          <p className="text-black-400 text-sm mt-2">{description}</p>
        </div>

        {/* Conditional Button */}
        {button && (
          <Button
            text={button.text || "Explore"} // Default text
            onClick={button.onClick || (() => {})} // Default no-op
          />
        )}
      </div>
    </div>
  );
}
