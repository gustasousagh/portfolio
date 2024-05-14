interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
}
  
  const Page = ({
    searchParams
  }: SearchPageProps) =>{
  return (
    <>
    {searchParams.title}
    </>
  )
}
export default Page;