function CategoryPage({ params }: { params: { category: string } }) {
  console.log(params);

  return (
    <div className="border border-black px-4 py-4">
      <h1>Category Landing Page</h1>
    </div>
  );
}

export default CategoryPage;
