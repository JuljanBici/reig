'use client';
import { motion } from 'framer-motion';

export default function categorySection({ products, category }) {
  return (
    <>
      <section> 
        <div className="px-8 pb-12 mx-auto max-w-7xl md:px-12 lg:pb-24 pt-36"> 
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } }
            }}
            className="text-3xl md:text-5xl lg:text-7xl text-balance"
          >
            Superstore, your next ecommerce 
            <span className="text-gray-500"> theme for all your products.</span> 
          </motion.h1> 

          <motion.p                         
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.6, ease: 'easeOut' } }
            }}
            className="mt-4 text-lg text-gray-600 text-balance w-1/2"
          >
            If you could kick the person in the pants responsible for most of your trouble, you wouldn&apos;t sit for a month
          </motion.p> 

          <div className="flex flex-wrap gap-2 mt-6"> 
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6, delay: 0.9, ease: 'easeOut' } }
              }}
              href=""
              className="items-center text-sm active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full h-12 lg:w-auto rounded-lg bg-black border-white/20 hover:bg-gray-600 text-white"
            >
              See all pages
            </motion.a>

            <motion.a 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6, delay: 1.2, ease: 'easeOut' } }
              }}
              href=""
              className="items-center text-sm text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full bg-white hover:bg-gray-50 lg:w-auto rounded-lg border-gray-200"
            >
              Buy SuperStore
            </motion.a> 
          </div>
        </div>  
      </section> 

      <div className="px-8 py-12 mx-auto max-w-7xl md:px-12"> 
        <div className="border-b border-gray-200 pb-5"> 
          <h3 className="text-base font-semibold">Our {category}</h3> 
        </div> 

        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-12 gap-2 gap-y-12 lg:gap-y-24"> 
          {products.map((product, index) => (
            <motion.a 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.3, ease: 'easeOut' } }
              }}
              key={product.id} 
              href={`/categories/${product.category}/${product.id}`} 
              className="group relative border bg-white rounded-xl text-black overflow-hidden border-gray-200"
            > 
              <div className="aspect-[16/9] overflow-hidden bg-gray-100"> 
                <img 
                  alt={product.name} 
                  src={product.image || "https://via.placeholder.com/400"} 
                  className="object-cover object-center"
                /> 
                <div className="flex items-end p-4 opacity-0 bg-white/10 backdrop-blur group-hover:opacity-100 duration-200" aria-hidden="true"> 
                  <div className="items-center text-sm group active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-2 transition w-full bg-white hover:bg-gray-50 rounded-lg">
                    Learn more
                  </div> 
                </div> 
              </div> 

              <div className="p-4"> 
                <div className="flex justify-between space-x-8 text-base font-medium"> 
                  <h3> 
                    <div title={product.name} className="font-display text-xl"> 
                      <span aria-hidden="true" className="absolute inset-0"></span> 
                      {product.name} 
                    </div> 
                  </h3> 
                  <p>${product.price}</p> 
                </div> 
                <p className="mt-1 text-sm text-gray-600">{product.category}</p> 
              </div> 
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
}
