'use client';

export default function PhysicsVideo() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/zqUqxgJh2lw"
          title="AI Physics Animation Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="bg-white/10 p-4">
        <h3 className="text-lg font-semibold mb-2">Latest AI Physics Animation</h3>
        <p className="text-sm text-gray-300">
          This video demonstrates recent advances in AI-generated physics simulations, 
          particularly focusing on soft-body dynamics and jiggle physics.
        </p>
      </div>
    </div>
  );
}
