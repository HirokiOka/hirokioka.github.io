export default function LinkList({ links }) {
  return (
    <div>
      <h2 className="font-bold mx-8 pt-2">Links</h2>
      <ul className="mx-12">
        {links.map((linkUrl, index) => (
          <li key={index}><a href={linkUrl} target="_blank">{linkUrl}</a></li>
        ))} 
      </ul>
    </div>
  );
}
