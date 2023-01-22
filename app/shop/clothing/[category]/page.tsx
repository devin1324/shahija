import CategoryNav from "../components/categorynav";
import client from "@/lib/sanity";

async function CategoryPage({ params }: { params: { category: string } }) {

  const query = `*[_type == "clothing" && category == "${params.category}"] {id,name,price,quantity,category}`;
  const data = await client.fetch(query);
  console.log(data);

  return (
    <div className="border border-black px-4 py-4">
      <h1 className="font-semibold text-2xl">Shop</h1>
      <CategoryNav segment={params.category} />
    </div>
  );
}

export default CategoryPage;
