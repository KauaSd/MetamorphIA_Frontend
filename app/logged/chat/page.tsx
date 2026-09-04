import Menu from "@/components/Menu";
import NaoEncontrado from "@/components/NaoEncontrado";
import Chat from "@/components/Chat";

export default function ChatInicial(){
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <Menu></Menu>
            <NaoEncontrado ></NaoEncontrado>
            <Chat />

        </div>
    )
}