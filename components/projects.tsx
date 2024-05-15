import { ProjectsProps } from "@/types/projects-types"
import { ProjectCard } from "./project-card"

interface PrjectsListProps {
  items: ProjectsProps[]
}

export const Projects = ({
  items
}: PrjectsListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProjectCard 
          id={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          Nenhum projeto encontrado
        </div>
      )}
    </div>
  )
}
