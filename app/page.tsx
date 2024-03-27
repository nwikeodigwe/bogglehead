import Header from "@/app/components/header";
import Image from "next/image";
import ForumGroup from "./components/forum-group";

export default function Home() {
  return (
    <main className="p-4 ">
      <Header />
      <ForumGroup />
    </main>
  );
}
