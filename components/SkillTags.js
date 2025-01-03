export default function SkillTags({ tags }) {
  //const skillClass = "inline-block bg-blue-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2";
  return (
    <div>
      <h2 className="pt-2  font-bold">使用技術：</h2>
      <div className="px-4">
        {tags.map((tag, index) => {
        let skillClass = "inline-block px-2 py-1 text-sm  rounded-full text-gray-700 mr-2 mt-2 ";
          switch (tag) {
            case "JavaScript":
            case "TypeScript":
              skillClass += "bg-blue-300";
              break;
            case "React":
            case "Next.js":
            case "Vue.js":
            case "Electron":
              skillClass += "bg-blue-400";
              break;
            case "Node.js":
            case "Flask":
            case "Python":
              skillClass += "bg-green-300";
              break;
            case "PostgreSQL":
            case "MongoDB":
              skillClass += "bg-green-400";
              break;
            case "Socket.io":
            case "Raspberry Pi":
              skillClass += "bg-gray-300";
              break;
            case "Processing":
            case "p5.js":
            case "openFrameworks":
            case "Sonic Pi":
              skillClass += "bg-teal-300";
              break;
            default:
              skillClass += "bg-gray-300";
              break;
            }

          return (
          <span key={index} className={skillClass}>
            #{tag}
          </span>
          );
        })}
      </div>
    </div>
  );
}

