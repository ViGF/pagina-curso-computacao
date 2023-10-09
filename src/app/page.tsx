import Image from "next/image";
import { ChevronDown } from "lucide-react";

import LogoCursoUrl from "@/../public/logo_curso.svg";

export default function Home() {
  return (
    <div className="h-full">
      <main className="flex h-screen lg:h-[50%] items-center justify-center px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
          <Image
            src={LogoCursoUrl}
            alt="Logo do curso de Ciência da Computação"
          />
          <div>
            <h1 className="font-bold text-2xl lg:text-4xl">Ciência da Computação</h1>
            <h2 className="font-light text-lg lg:text-lg">
              Centro de Ciências Exatas e Sociais Aplicadas
            </h2>
            <p className="font-extralight text-md pt-4 lg:pt-5 lg:pr-52 text-sm lg:text-base">
              O curso de Ciência da Computação da UEPB – Campus VII deve formar
              profissionais capazes de desenvolver suas atividades nos mais
              diversos campos do conhecimento humano relacionado à computação,
              com proficiência, visão crítica e conduta ética.
            </p>
          </div>
        </div>
        <a
          className="flex justify-center flex-col items-center absolute bottom-6 lg:bottom-10 hover:scale-110 transition-transform cursor-pointer"
          href="#learn"
        >
          <span className="font-medium text-sm leading-4">
            O QUE VOCÊ VAI APRENDER
          </span>
          <ChevronDown size={24} />
        </a>
      </main>
      <div
        className="flex items-start flex-col justify-center px-4 lg:px-16 lg:min-h-[50%] py-12 lg:py-0 bg-blue-darkBlue"
        id="learn"
      >
        <h2 className="font-semibold text-2xl pb-6">O que você vai aprender</h2>
        <ul className="font-light text-lg pl-8 list-disc">
          <li>
            Projetar e construir modelos computacionais para aplicações de
            naturezas diversas;
          </li>
          <li>Oferecer suporte e gerenciamento no setor tecnológico;</li>
          <li>Desenvolver aplicações para redes de computadores;</li>
          <li>
            Racionalização, seleção e administração de recursos de hardware;
          </li>
          <li>Desenvolvimento de interfaces e aplicativos para automação;</li>
          <li>Administração de Bancos de Dados;</li>
          <li>
            Gerência em Informática, desenvolvendo atividades de planejamento e
            execução de tarefas pertinentes à área;
          </li>
          <li>
            Desenvolvimento de sistemas aplicativos comerciais ou científicos;
          </li>
          <li>Pesquisa de novos modelos computacionais;</li>
          <li>Pesquisa em áreas afins à computação.</li>
        </ul>
      </div>
      <div className="flex items-start flex-col lg:min-h-[40%] justify-center px-4 lg:px-16 py-12 lg:py-0 bg-blue-dark">
        <h2 className="font-semibold text-2xl pb-6">Descrição do Curso</h2>
        <p className="font-light text-lg pl-2 md:pl-10 lg:pr-56">
          Buscará dotar o corpo discente do curso de uma sólida e atualizada
          formação computacional, de forma que o capacite a resolver os
          problemas tecnológicos em diversas áreas do conhecimento. Além disso,
          deve estimular sua capacidade criativa e ampliar sua curiosidade
          científica para que permita atuação profissional crítica e ética,
          diante dos fatos, em sintonia com as necessidades regionais e
          nacionais.
        </p>
      </div>
      <div className="flex items-start flex-col lg:min-h-[40%] justify-center px-4 lg:px-16 py-12 lg:py-20 bg-blue-darkBlue">
        <h2 className="font-semibold text-2xl pb-6">Duração</h2>
        <p className="font-light text-lg pl-2 md:pl-10 lg:pr-56">
          O tempo de conclusão do curso de Bacharelado em Ciência da Computação
          em conformidade com a Resolução CONSUNI/UEPB 2, DE 19 de fevereiro de
          2016 será efetivado mediante a integralização de 3080 (três mil e
          oitenta) horas, nas quais a articulação teoria-prática garanta, nos
          termos dos seus projetos pedagógicos, as seguintes dimensões dos
          componentes comuns:
        </p>
        <br />
        <ul className="font-light text-lg pl-2 md:pl-10 lg:pr-56">
          <li>
            I – 2.880 (duas mil oitocentos e oitenta) horas de aulas para os
            conteúdos curriculares de natureza científica-cultural; (necessárias
            para integralização)
          </li>
          <li>
            II – 200 (duzentas) horas para outras formas de atividades
            acadêmico-científico-culturais; (necessárias para integralização)
          </li>
          <li>
            III – 300 (trezentas) horas para disciplinas optativas de caráter
            não obrigatório. (necessárias para integralização)
          </li>
          <li>
            IV – 360 (trezentos e sessenta) horas para estágio optativo não
            obrigatório, que podem dispensar parte do item III.
          </li>
          <li>
            V – 90 (noventa) horas para disciplinas optativas de caráter “livre”
            (em outros cursos da mesma instituição, por exemplo), que podem
            dispensar parte do item III.
          </li>
        </ul>
      </div>
    </div>
  );
}
