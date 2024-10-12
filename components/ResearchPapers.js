import Link from 'next/link';

const linkClass = "text-blue-600 dark:text-blue-500 hover:underline";
const ResearchPaper = ({ paper }) => (
  <li className='research-paper'>
    {paper.author},
     {paper.url ? (<Link href={paper.url} className={linkClass}>{paper.title}</Link>) : (paper.title)},
    {paper.publication},
    {paper.volume},
    {paper.number},
    {paper.pages}
    ({paper.date}).
  </li>
);

export default function ResearchPapers({ papers }) {
  return (
    <>
      <h2 className="pt-2 px-8 font-bold">発表文献：</h2>
      <ol className='list-decimal list-inside text-base mx-12'>
        {papers.map((paper, index) => <ResearchPaper key={index} paper={paper} />)}
      </ol>
    </>
  );
}
