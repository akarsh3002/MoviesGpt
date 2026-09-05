const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute inset-0 px-12 pt-[20%] text-white bg-linear-to-r from-black/90 via-black/40 to-transparent">
      <h1 className="text-2xl font-bold">{title}</h1>

      <p className="py-6 text-sm w-1/4">{description}</p>

      <div className="flex gap-4">
        <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded">
          ▶ Play
        </button>

        <button className="bg-gray-500/80 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
