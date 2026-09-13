"use client";

import PessoaPesquisa from "@/public/person_search.svg";
import CriarTurma from "@/public/group_add.svg";
import Mais from "@/public/plus.svg";
import Conversa from "@/public/chat.svg";
import Conta from "@/public/account_circle.svg";

import { useState } from "react";
import Button from "./Button";

export default function NaoEncontrado(){
    const [blur, visibilidade] = useState(false);
    return(
        <div className="flex flex-col items-center justify-center flex-1 h-screen  gap-[15px] fixed left-[calc(17%+41.5%)] -translate-x-1/2 ">
            <div className="h-[270px] max-w-[340px] mt-[60px] flex flex-col items-center justify-center bg-[#FFFDFA] rounded-[30px] py-8 mb-[50px]">
                <div className="bg-[#D4C7F8] rounded-[70px] flex-shrink-0 flex flex-row justify-center items-center h-[80px] w-[80px] mb-[10px]">
                    <img 
                        src={PessoaPesquisa.src}
                        alt=""
                        className="h-[45%] w-[45%] " 
                    />
                </div>

                <p className="flex flex-row items-center text-[75%] justify-center mb-[10px]">Nenhum aluno encontrado</p>
                <p className="text-center text-[#797979] text-[9px] mx-[50px]">Crie uma turma e adicione seus alunos para iniciar uma conversa com o contexto certo.</p>

                <div className="h-[40px] w-[150px] bg-[#D4C7F8] flex flex-row items-center justify-center ml-[15px] rounded-[70px] mt-[25px] mr-4 text-[12px] gap-[5px]">
                    <button /*onClick={() => visibilidade(!blur)} */ className="flex items-center justify-center gap-[5px]">      
                        Criar Turma   
                        <img 
                            src={CriarTurma.src}
                            alt=""
                            className="h-[25px] w-[25px] pointer-events-none select-none" 
                            />                     
                    </button>
                </div>

                    {/* blur && ( 
                    <div className="bg-[#FFFDFA] h-[150px] w-[300px] fixed  z-50  rounded-[30px]">
                        <p>Dados da Turma</p>
                       <p>Nome da Turma</p>
                       <input type="text"></input>
                </div>
                    ) */}
            </div>

           
        </div>
    )
}
