import Icon from "@/public/icon.png";
import Turma from "@/public/people_alt.svg";
import Pessoa from "@/public/person.svg";
import Config from "@/public/settings.svg"; 
import SideBar from "@/public/SideBar.svg";
import Expandir from "@/public/expand_more.svg";

import Link from 'next/link';
import DropDown from "./DropDown";
/* import DropMenu from "./DropMenu"; */

export default function Menu(){
    return(
        <div className="bg-[#433F3F] w-[17%] h-screen p-[15px] flex-shrink-0 flex flex-col gap-[1rem] min-h-screen  overflow-x-hidden ">
                
                <div className="flex flex-row items-center gap-[5px]">
                    <Link href="#" className="flex items-center gap-[5px]" >
                    <img 
                        src={Icon.src}
                        alt=""
                        className="h-[30px] w-[30px] pointer-events-none select-none" 
                    />
                    <h1 className="text-[#FFFDFA] text-[120%] font-(family-name:--font-text-me-one)">
                        MetamorphIA
                    </h1>
                    </Link>

                    <div className="ml-[30px]">
                        <img 
                                src={SideBar.src}
                                alt=""
                                className="h-[15px] w-[45px] pointer-events-none select-none" 
                        />
                    </div>
                </div>
                   
            
            
            <div className="flex flex-row items-center
                bg-[#FFFDFA] h-[1px] w-[100%] mx-auto"> 
            </div>

        <div className="w-[100%] h-[37px] text-[95%] bg-[#433F3F] flex flex-row justify-left gap[28px]  items-center rounded-[70px] text-[#FFFFFF] text-xl">
                {/*<DropMenu  options={[{value: "aaa", label: "aaa"}, {value: "bbb", label: "bbb"}]} isTurma={true}> */}
               <img 
                    src={Turma.src}
                    alt=""
                    className="h-[20px] w-[20px] pointer-events-none select-none mr-[2px]" 
                />
                Turmas
                <div className="ml-[40%]">                  
                    <img 
                        src={Expandir.src}
                        alt=""
                        className="h-[20px] w-[30px] pointer-events-none select-none" 
                    />          
        </div>  </div>           
            {/* </DropMenu> */}


            <div className="w-[100%] h-[37px] text-[95%] bg-[#433F3F] flex flex-row justify-left gap[28px]  items-center rounded-[70px] text-[#FFFFFF] text-xl">
                <img 
                    src={Pessoa.src}
                    alt=""
                    className="h-[20px] w-[20px] pointer-events-none select-none mr-[2px]" 
                />
                Alunos
                <div className="ml-[40%]">
                <img 
                    src={Expandir.src}
                    alt=""
                    className="h-[20px] w-[30px] ml-[4px] pointer-events-none select-none" 
                />
                </div>
            </div>

    <div className="w-[100%] h-[37px] text-[95%] bg-[#433F3F] flex flex-row justify-left gap[28px] mt-[20px] items-center rounded-[70px] text-[#FFFFFF] text-xl">
                <img 
                    src={Pessoa.src}
                    alt=""
                    className="h-[20px] w-[20px] pointer-events-none select-none mr-[2px]" 
                />
                Recentes
                <div className="ml-[40%]">
                <img 
                    src={Expandir.src}
                    alt=""
                    className="h-[20px] w-[30px] mr-[10px] pointer-events-none select-none" 
                />
                </div>
            </div>

            <div className="flex flex-row items-center
                bg-[#FFFDFA] h-[1px] w-[100%] mt-[270px] "> 
            </div>

            <div className="w-[100%] h-[37px] bg-[#433F3F] text-[95%] flex flex-row justify-left gap[28px] rounded-[70px] text-[#FFFFFF] text-xl">
                <img 
                    src={Config.src}
                    alt=""
                    className="h-[20px] w-[20px] pointer-events-none select-none mr-[10px] mb-[10px]" 
                />
                Configurações
            </div>            
        </div> 
    )
}
