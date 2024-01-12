export default function Hero() {
  return (
    <div>
      <div className="grid grid-rows-[1fr_200px] md:grid-rows-none md:grid-cols-[1fr_400px] h-[calc(100vh-150px)] gap-4 p-4 bg-[#f5f9ff] ">
        <div className="bg-red-200 rounded-md "></div>
        <div className="grid grid-cols-2 md:grid-cols-none md:grid-rows-2 gap-4">
          <div className="bg-blue-200 rounded-md "></div>
          <div className="bg-green-200 rounded-md "></div>
        </div>
      </div>
    </div>
  );
}
