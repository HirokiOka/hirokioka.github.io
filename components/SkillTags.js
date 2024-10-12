export default function SkillTags({ tags }) {
  const skillClass = "inline-block bg-blue-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2";
  return (
    <div>
      <h2 className="pt-2 px-8 font-bold">使用技術：</h2>
      <div className="px-12">
        {tags.map((tag, index) => (
          <span key={index} className={skillClass}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

