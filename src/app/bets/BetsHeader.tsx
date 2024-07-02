import Image from "next/image";
import player from "@/assets/images/player.jpeg"


export const BetsHeader = () => {
    return (
        <header className="w-full flex justify-center items-center">
            
                <Image src={player} alt="player" />

        </header>
    
    );
};