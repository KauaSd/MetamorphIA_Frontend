import PessoaPesquisa from "@/public/person_search.svg";
import CriarTurma from "@/public/group_add.svg";
import Mais from "@/public/plus.svg";
import Conta from "@/public/account_circle.svg";
import Expandir from "@/public/expand_more.svg";

export default function NaoEncontrado(){
    return(
        <div className="flex flex-col items-center justify-center w-full justify-start h-screen  mt-0">
            <div className="flex flex-row justify-between items-center px-16 pt-8 w-full">
                <h1 className="text-xl">
                Turmas
                </h1>
                <div className="flex flex-row gap-4 ">
                    <p className="text-xs text-[#797979]">
                        Ordernar por
                    </p>    

                    <div className="bg-[#d6d6d6]  rounded-[50px] h-[20px] flex flex-row items-center">
                        <p className="text-xs">Atividade</p>

                        <img 
                                src={Expandir.src}
                                alt=""
                                className="h-[20px] w-[20px]" 
                            />
                    </div>

                    
                        <div className="bg-[#D4C7F8] rounded-[70px] flex flex-row justify-center items-center h-[40px] w-[40px] mb-[10px]">
                            <img 
                                src={PessoaPesquisa.src}
                                alt=""
                                className="h-[20px] w-[20px]" 
                            />
                        </div>
                </div>
            </div>


            <div className="h-[22px] items-center  w-[90%] bg-[#FFFDFA] rounded-[30px] mb-16 flex "> 
               <p className="opacity-[50%] text-[10px] ">Procurar turmas...</p> 
            </div>

            
       
        </div>
    )
}