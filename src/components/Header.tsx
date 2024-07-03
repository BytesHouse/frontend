import Image from "next/image";
import logo from "@/assets/images/Logo.svg";
import kebab from "@/assets/icons/kebab.svg";

export const Header = () => {
    return (
        <header className="mx-auto mt-[90px] w-[265px]">
            <button className="flex justify-center items-center " role="button">
                <Image
                    className="absolute top-[20px] right-[6px] w-[14px] h=[14px]"
                    src={kebab}
                    alt="kebab-button"
                />
                <Image src={logo} alt="logo" />
            </button>
        </header>
    );
};