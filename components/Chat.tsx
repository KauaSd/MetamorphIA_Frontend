import Mais from "@/public/plus.svg";
import Conversa from "@/public/chat.svg";
import Conta from "@/public/account_circle.svg";
export default function NaoEncontrado(){
    return(
    <div>
        <div className="absolute bottom-8 left-3/5  -translate-x-1/2 w-full max-w-[704px] h-[48px] bg-[#FFFDFA] opacity-40 rounded-[70px] flex flex-row items-center justify-start ">
                <img 
                    src={Mais.src}
                    alt=""
                    className="h-[24px] w-[61px] pointer-events-none select-none" 
                />
                <img 
                    src={Conversa.src}
                    alt=""
                    className="h-[40px] w-[40px] pointer-events-none select-none" 
                />
        </div> 

            <div className="ml-[90%] fixed bottom-4 right-4 z-50">
                <img 
                    src={Conta.src}
                    alt=""
                    className="h-[70%] w-[70%] pointer-events-none select-none" 
                />
            </div>
    </div>
    )
}