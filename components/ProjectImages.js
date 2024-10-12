const imageWidth = 560;
const imageHeight = 315;

export default function ProjectImages({ imageUrls }) {
  return (
    <>
      {imageUrls.map((imgUrl, index) => (
        <img
          key={index}
          src={imgUrl}
          width={imageWidth}
          height={imageHeight}
          className="w-1/2 h-auto rounded-lg shadow-lg mt-4"
        />
      ))}
    </>
  );
}
