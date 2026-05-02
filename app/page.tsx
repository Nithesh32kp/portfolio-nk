import Image from "next/image";
import Header from "./header/page";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <main className="flex flex-1 w-full max-w-1xl flex-col items-center justify-between py-32 px-16  dark:bg-black sm:items-start">
        
      </main>
    </div>
  );
}
