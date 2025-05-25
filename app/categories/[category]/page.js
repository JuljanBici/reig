import products from "@/data/products";
import CategorySection from "@/app/components/CategorySection";

export async function generateStaticParams() {
  const categories = [...new Set(products.map((p) => p.category))];
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params }) {
  const categoryProducts = products.filter(
    (p) => p.category === params.category
  );

  return (
    <div>
      <CategorySection products={categoryProducts} category={params.category} />
    </div>
  );
}
