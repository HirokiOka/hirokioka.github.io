export default function ProjectDetail({ title, year, description }) {
  return (
    <>
      <h1 className="font-bold  md:text-3xl sm:text-xl">{title} ({year})</h1>
      <p className="md:text-base md:mx-8 sm:text-sm sm:m-1 py-2">{description}</p>
    </>
  )
};
