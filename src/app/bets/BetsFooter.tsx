import betslogo from "@/assets/icons/betslogo.svg"
import chat_icon from "@/assets/icons/chat_icon.svg"
import Image from "next/image";
export const BetsFooter = () => {
    return (
        <footer className="w-full flex justify-center items-center bg-gradient-to-r from-[#131620] to-[#11111D]">
        <div>
            <div className="flex w-full m-[16px] gap-[16px]">
                <div className="flex justify-center items-center gap-[8px] w-[280px] h-[50px] bg-gradient-to-r from-red-600 to-red-400 rounded-[16px]">
                    <Image
                        className=" w-[14px] h=[14px]"
                        src={betslogo}
                        alt="bets-logo"
                    />
                    <p>Place a Bet</p>
                </div>
                <div className="flex justify-center items-center w-[80px] h-[50px] bg-gradient-to-r from-[#24242F] to-[#15131D] rounded-[8px] border-[1px] border-solid border-[#21222D]">
                    <Image
                     className=" w-[19px] h=[19px]"
                     src={chat_icon}
                     alt="bets-logo"
                    />
                </div>
            </div>
        </div>
    </footer>
    );
  };