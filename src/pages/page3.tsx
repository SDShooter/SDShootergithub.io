import Scene3D from "~/components/Scene3DBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          3D <span className="text-[hsl(280,100%,70%)]">Scene</span>
        </h1>
        {/* 3D Scene */}
        <div className="w-full max-w-3xl h-full">
          <Scene3D />
        </div>
      </div>
    </main>
  );
}
