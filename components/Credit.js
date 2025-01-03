export default function Credit({ members }) {
  return (
    <div>
      <h2 className="font-bold mx-8 pt-2">Credit</h2>
      <ul className="mx-12">
        {members.map((name, index) => (
          <li key={index}>{name}</li>
        ))} 
      </ul>
    </div>
  );
}
