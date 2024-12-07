import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Scene</title>
        <meta name="description" content="Interactive 3D scene with dynamic lighting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Link 
          href="/page3" 
          className="text-2xl font-bold hover:text-blue-500 transition-colors"
        >
          Enter 3D Scene
        </Link>
      </main>
    </>
  );
}
