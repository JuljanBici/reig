import products from "@/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    productId: p.id,
  }));
}

export default function ProductPage({ params }) {
  const product = products.find(
    (p) => p.category === params.category && p.id === params.productId
  );

  if (!product) return <div>Product not found</div>;

  return (
    // <div>
    //   <h1 className="text-2xl font-bold">{product.name}</h1>
    //   <div className="flex gap-4 mt-4">
    //     <img src={product.img1} className="w-1/2" />
    //     <img src={product.img2} className="w-1/2" />
    //   </div>
    //   <p className="mt-4">{product.desc}</p>
    //   <p className="font-bold text-lg mt-2">${product.price}</p>
    // </div>
    <section> 
      <div className="items-center px-8 pb-12 mx-auto max-w-7xl md:px-12 lg:pb-24 pt-36"> 
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-balance font-display"> {product.name} </h1> 
        <div className="mx-auto mt-12"> 
          <div className="lg:gap-x-8 lg:gap-y-10 lg:grid lg:grid-cols-7 lg:grid-rows-1 xl:gap-x-16"> 
            <div className="lg:col-span-4 lg:row-end-1 space-y-3"> 
              <div className="aspect-h-3 aspect-w-4 overflow-hidden"> 
                <img src="https://images.unsplash.com/photo-1610792516820-2bff50c652a2?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sleek and modern Samsung Galaxy S21 Ultra" className="object-center object-cover rounded-xl"/> 
              </div>
              <div className="aspect-h-3 aspect-w-4 overflow-hidden"> 
                <img src="https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Elegant Samsung Galaxy S21 Ultra in hand" className="object-center object-cover rounded-xl"/> 
              </div> 
            </div> 
            <div className="mx-auto lg:col-span-3 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 max-w-2xl mt-14 sm:mt-16"> 
              <p className="text-gray-300"> {product.desc} </p> 
              <div className="mt-10 gap-2 grid grid-cols-1 sm:grid-cols-2"> 
                <a href="#_" title="link to your page" aria-label="your label" className="items-center text-sm active:bg-gray-100 active:text-black/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full lg:w-auto rounded-lg bg-black border-white/20 hover:bg-gray-600 text-white">Order Now
                </a>
                <div href="#_" title="link to your page" aria-label="your label" className="items-center text-sm active:bg-gray-100 active:text-black/60 active:transition-none border border-gray-200 font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full bg-white hover:bg-gray-50 text-black lg:w-auto rounded-lg">${product.price}
                </div> 
              </div> 
              <dl className="flex flex-col gap-2 mt-8"> 
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl duration-200 bg-gray-50"> 
                  <dt> 
                    <span className="text-sm font-semibold text-black"> AERODYNAMIC DESIGN </span> 
                  </dt> 
                  <dd className="text-gray-600 mt-1 text-sm text-pretty"> Feel the difference with our aerodynamic skins that complement the Samsung Galaxy S21 Ultra&apos;s contours, ensuring uncompromised protection. </dd> 
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl duration-200 bg-gray-50"> 
                  <dt>
                   <span className="text-sm font-semibold text-black"> CUSTOM FIT </span> 
                   </dt> 
                   <dd className="text-gray-600 mt-1 text-sm text-pretty"> Precision-engineered to the smallest detail, each accessory is a perfect match for the Galaxy S21 Ultra, ensuring seamless compatibility. </dd> 
                </div>
              </dl> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
