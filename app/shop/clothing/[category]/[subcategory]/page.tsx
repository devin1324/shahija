import client from "@/lib/sanity";

async function SubCategoryPage({ params }: { params: { category: string; subcategory: string } }) {
  const { category, subcategory } = params;
  let data = [];
  const query = `*[_type == "clothing" && category == "${category}" && clothType == "${subcategory}" ] {id,name,category,clothType,price,quantity}`;
  data = await client.fetch(query)

  console.log(data);

  return (
    <div className="border border-black px-4 py-4">
      <h1>SubCategory Landing Page</h1>
    </div>
  );
}

export default SubCategoryPage;
