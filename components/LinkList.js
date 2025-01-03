export default function LinkList({ links }) {
  const linkClass = "text-blue-600 dark:text-blue-500 hover:underline";
  return (
    <div>
      <h2 className="font-bold mx-8 pt-2">Links</h2>
      <ul className="mx-12 list-disc">
        {links.map((link, index) => (
          <li key={index} className={linkClass}><a href={link.url} target="_blank">{link.title}</a></li>
        ))} 
      </ul>
    </div>
  );
}
