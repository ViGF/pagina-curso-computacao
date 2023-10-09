import Image from "next/image";

import GradeImageUrl from "@/../public/grade_curricular.png";

export default function Grade() {
  return (
    <main className="flex h-full flex-col justify-center px-2 lg:px-16">
      <h1 className="font-bold text-2xl py-6">Grade Curricular</h1>
      <Image
        src={GradeImageUrl}
        alt="Tabela com grade curricular com todos os períodos e horas do curso"
        className="w-auto h-auto"
        draggable={false}
        quality={100}
      />
    </main>
  );
}
