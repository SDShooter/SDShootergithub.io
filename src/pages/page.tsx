//import PhysicsVideo from "~/components/PhysicsVideo.js";

import { NextPage } from "next";

const  Page: NextPage = () => {
  return (
 
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="w-full max-w-3xl">
          {/* <PhysicsVideo/> */}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
           
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
            </p>
          </div>
        </div>
      </main>
  );
}

export default Page;