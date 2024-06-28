import Image from "next/image";
import kebab from "@/assets/icons/kebab.svg";

export const Header = () => {
  return (
    <header className="absolute w-screen h-16 flex justify-end">
      <button className="w-12 flex justify-center items-center" role="button">
        <Image src={kebab} alt="kebab-button" />
      </button>
    </header>
  );
};
