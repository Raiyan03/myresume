import Image from "next/image";
import HeaderBar from "@/app/components/header"
import BasicInfo from "@/app/components/basicinfo"
import ProjectsAndInvolvement from "@/app/components/projects"
export default function Home() {
  return (
    <main className="p-4">
      <BasicInfo />
      <ProjectsAndInvolvement />
    </main>
  );
}