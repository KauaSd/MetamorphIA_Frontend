import Image from "next/image";
import Link from "next/link"
import Holder from "@/components/Turma"
export default function Home() {
    const alunosturma = [
  { nome: "João", neuro: "TDAH" },
  { nome: "Maria", neuro: "TEA" },
  { nome: "Guilherme", neuro: "Dislexia" },
]
  return (
<div className="flex min-h-full w-full flex-1 flex-col justify-center items-center">
    <Holder nomeTurma="3º Ano A - Manhã" alunos={alunosturma}/>
</div>
  );
}
