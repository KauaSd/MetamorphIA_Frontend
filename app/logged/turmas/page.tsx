import Menu from "@/components/Menu";
import Turmas from "@/components/Turmas";
import NaoEncontrado from "@/components/NaoEncontrado";

export default function ChatInicial(){
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <Menu></Menu>
            <Turmas></Turmas>
            <NaoEncontrado />
        </div>
    )
}
