import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image
          className="relative"
          src="/abb.jpg"
          width={`${1000}`}
          height={`${1000}`}
          alt="Graduation day image"
          priority
        />
        <h1 className="text-5xl text-center my-5">Under Construction 🚧</h1>
      </div>
    </main>
  );
}
