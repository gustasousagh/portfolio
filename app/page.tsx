'use client'
import { Projects } from "@/components/projects";
import { useEffect, useState } from "react";

interface SearchPageProps {
  searchParams: {
    title: string;
  }
}
const dummyData = [
  { id: 1, title: "Projeto A", description: "Descrição do Projeto A", imageUrl: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Projeto B", description: "Descrição do Projeto B", imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 3, title: "Projeto C", description: "Descrição do Projeto C", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Projeto D", description: "Descrição do Projeto D", imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  { id: 5, title: "Projeto E", description: "Descrição do Projeto E", imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  // Adicione mais dados conforme necessário
];
  
  const Page = ({
    searchParams
  }: SearchPageProps) =>{
    const [filteredProjects, setFilteredProjects] = useState(dummyData);

    useEffect(() => {
      // Função para filtrar os projetos com base no título
      const filterProjectsByTitle = (title: string) => {
        const filtered = dummyData.filter(project =>
          project.title.toLowerCase().includes(title)
        );
        setFilteredProjects(filtered);
      };
  
      // Chamada da função de filtragem quando searchParams.title mudar
      filterProjectsByTitle(searchParams.title);
    }, [searchParams.title]);
  return (
    <>
     <div className="pt-6 space-y-4">
    <Projects
    items={filteredProjects}
    />
    </div>
    </>
  )
}
export default Page;