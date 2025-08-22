import { BRAND_COLOR } from "@/app/constants";

export default function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-6 py-2 bg-${BRAND_COLOR}-500 hover:bg-${BRAND_COLOR}-600 text-white font-semibold rounded-full shadow-lg hover:shadow-${BRAND_COLOR}-400/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0 ${className}`}
    >
      {text}
    </button>
  );
}
