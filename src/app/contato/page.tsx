export default function Docentes() {
  return (
    <main className="flex h-full flex-col justify-center px-2 py-6 lg:px-16">
      <h1 className="font-bold text-2xl mt-24 lg:mt-0 pb-6">Contato</h1>
      <div>
        <p>
          Coordenação do Curso de Ciência de Computação / CCEA / Campus VII{" "}
        </p>
        <br />
        <br />
        <ul className="list-disc ml-8">
          <li>Jucélio Soares dos Santos (Coordenador)</li>
          <li>Rosângela de Araújo Medeiros (Coordenadora Adjunta)</li>
        </ul>
        <br />
        E-mail: coord.computacao.ccea@setor.uepb.edu.br
        <br />
        <br />
        Telefones: (83) 3421-1475/3421-3251 Ramal 25
        <br />
        <br />
        Redes sociais:
        <br />
        Instagram:{" "}
        <a
          href="https://www.instagram.com/computacao.ccea/"
          className="underline"
        >
          @computacao.ccea
        </a>
        <br />
        Facebook:{" "}
        <a
          href="https://www.facebook.com/computacaoccea/"
          className="underline"
        >
          Computação CCEA
        </a>
        <br />
        <br />
        Ouvidoria:{" "}
        <a
          href="https://departamentos.uepb.edu.br/comp-ccea/ouvidoria/"
          className="underline"
        >
          Ouvidoria
        </a>
      </div>
    </main>
  );
}
