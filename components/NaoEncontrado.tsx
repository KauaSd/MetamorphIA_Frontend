import PessoaPesquisa from "@/public/person_search.svg";
import CriarTurma from "@/public/group_add.svg";
import Mais from "@/public/plus.svg";
import Conversa from "@/public/chat.svg";

export default function NaoEncontrado(){
    return(
        <div>
        <div className="h-[430px] w-[530px] flex flex-col items-center justify-center  bg-[#FFFDFA] rounded-[50px]">
            <div className="bg-[#D4C7F8] rounded-[70px] flex flex-row justify-center items-center h-[135px] w-[135px]">
                <img 
                    src={PessoaPesquisa.src}
                    alt=""
                    className="h-[60px] w-[60px] " 
                />

                
            </div>
            <p className="flex flex-col items-center justify-center">Nenhum aluno encontrado</p>
            <p className="flex flex-row items-center justify-center">Crie uma turma e adicione seus alunos para iniciar uma conversa com o contexto certo.</p>

                <button className="h-[34px] w-[179px] bg-[#D4C7F8] flex flex-row items-center justify-center rounded-[70px]">
                    <img 
                    src={CriarTurma.src}
                    alt=""
                    className="h-[30px] w-[30px] pointer-events-none select-none" 
                />
                    Criar Turma
                </button>
        </div>

        <div className="w-[804px] h-[68px] bg-[#FFFDFA] rounded-[70px] flex flex-row justify-left">
        <img 
            src={Mais.src}
            alt=""
            className="h-[45px] w-[45px] pointer-events-none select-none" 
        />
        <img 
            src={Conversa.src}
            alt=""
            className="h-[45px] w-[45px] pointer-events-none select-none" 
        />
      </div> 
       
        </div>
    )
}