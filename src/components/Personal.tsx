export default function Personal() {
  return (
    <main className="h-full">
      <div className="mt-14 flex flex-col lg:flex-row justify-center items-center lg:space-x-24">
        <div className="space-y-4">
          <h1 className="text-5xl">
            Hi! I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
              Cong Minh Vu
            </span>
          </h1>
          <h2 className="text-3xl">Python, backend, AI developer</h2>
        </div>
        <img
          src="/hackaton.jpg"
          alt="selfie hackathon"
          className="w-96 h-96 rounded-3xl object-cover"
        />
      </div>
    </main>
  );
}
