interface ProfessorCardProps {
  name: string;
  formation: string;
  area: string;
  email: string;
  lattesUrl: string;
}

export function ProfessorCard({
  name,
  formation,
  area,
  email,
  lattesUrl,
}: ProfessorCardProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap bg-blue-medium p-4 rounded w-max hover:scale-105 transition-transform">
      <a
        href={lattesUrl}
        target="_blank"
        className="font-bold text-lg underline underline-offset-2"
      >
        {name}
      </a>
      <p>
        {formation} | {area}
      </p>
      <a
        href={`mailto:${email}`}
        target="_blank"
        className="font-light text-sm pt-1 underline"
      >
        {email}
      </a>
    </div>
  );
}
