import { BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: number,
  title: string,
  description: string,
  imageUrl: string
}

export const ProjectCard =({
  id,
  title,
  description,
  imageUrl
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            fill
            className="object-cover"
            alt={title}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <BookOpen />
              <span>
                
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </Link>
  )
}