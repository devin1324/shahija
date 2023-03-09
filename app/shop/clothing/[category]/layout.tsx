import CategoryNav from "../components/categorynav";
import client from "@/lib/sanity";

async function CategoryPageLayout({ params, children }: { params: { category: string }, children: React.ReactNode }) {
  
    
  return (
    <div className="border border-black px-4 py-4">
      <h1 className="font-semibold text-2xl">Shop</h1>
      <CategoryNav segment={params.category} />
        
        <div className="w-full flex flex-row flex-nowrap gap-x-2 items-center overflow-x-scroll scrollbar-hidden h-auto my-2">
          <div className="border border-black px-2 py-1 rounded-md">All</div>
          <div className="border border-black px-2 py-1 rounded-md">Skirts</div>
          <div className="border border-black px-2 py-1 rounded-md">Blouses</div>
          <div className="border border-black px-2 py-1 rounded-md">Frocks</div>
          <div className="border border-black px-2 py-1 rounded-md">Skirts</div>
          <div className="border border-black px-2 py-1 rounded-md">Blouses</div>
          <div className="border border-black px-2 py-1 rounded-md">Frocks</div>
        </div>

      {children}
    </div>
  );
}

export default CategoryPageLayout;
