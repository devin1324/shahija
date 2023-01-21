import CategoryNav from "../components/categorynav";

function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="border border-black px-4 py-4">
      <h1 className="font-semibold text-2xl">Shop</h1>
      <CategoryNav segment={params.category} />
    </div>
  );
}

export default CategoryPage;
