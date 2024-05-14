interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};
const SearchPage = async({
  searchParams
}: SearchPageProps)=> {
  return (
    <div>
      {searchParams.title}
    </div>
  );
}
export default SearchPage;