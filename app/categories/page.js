'use client'
import products from "@/data/products";
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion'

export default function Categories() {

    const categorized = products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <>
        <main className="grow"> 
            <section> 
                <div className="px-8 pb-12 mx-auto max-w-7xl md:px-12 lg:pb-24 pt-36"> 
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.6, delay:0.3, ease: 'easeOut' } }
                        }}
                        className="text-3xl md:text-5xl lg:text-7xl text-balance">
                        Superstore, your next ecommerce 
                        <span className="text-gray-500"> theme for all your products.</span> 
                    </motion.h1> 
                    <motion.p                         
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.6, delay:0.6, ease: 'easeOut' } }
                        }}
                        className="mt-4 text-lg text-gray-600 text-balance w-1/2">If you could kick the person in the pants responsible for most of your trouble, you wouldn&apos;t sit for a month</motion.p> 
                    <div className="flex flex-wrap gap-2 mt-6"> 
                        <motion.a
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.6, delay:0.9, ease: 'easeOut' } }
                            }}
                            href="" title="link to your page" aria-label="your label" className="items-center text-sm active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full h-12 lg:w-auto rounded-lg bg-black border-white/20 hover:bg-gray-600 text-white">See all pages
                        </motion.a>
                        <motion.a 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.6, delay:1.2, ease: 'easeOut' } }
                            }}
                            href="" title="link to your page" aria-label="your label" className="items-center text-sm text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full bg-white hover:bg-gray-50 lg:w-auto rounded-lg border-gray-200">Buy SuperStore
                        </motion.a> 
                    </div>
                </div> 
            </section> 
            <section>
                <div className="px-8 py-12 mx-auto max-w-7xl md:px-12">
                    {Object.entries(categorized).map(([category, items]) => (
                    <>
                        <div className="border-b border-gray-200 pb-5 pt-10"> 
                            <Link href={`/categories/${category}`} className="text-xl first-letter:uppercase font-semibold">{category}</Link> 
                        </div> 
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-12 gap-2 gap-y-12 lg:gap-y-24">
                            {items.map((product,index) => (
                            <motion.a 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: {opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:index*0.3, ease: 'easeOut' } }
                                }}
                                key={product.id} 
                                href={`/categories/${product.category}/${product.id}`} 
                                className="group relative border bg-white text-black rounded-xl overflow-hidden border-gray-200"> 
                                <div className="aspect-[16/9] overflow-hidden bg-gray-100"> 
                                    <img alt={product.name} src="https://images.unsplash.com/photo-1701680848891-89a6a4e9e31a?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lJTIwMTQlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D" className="object-cover object-center"/> 
                                    <div className="flex items-end p-4 opacity-0 bg-white/10 backdrop-blur group-hover:opacity-100 duration-200" aria-hidden="true"> 
                                        <div className="items-center text-sm group active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-2 transition w-full bg-white hover:bg-gray-50 rounded-lg">
                                            Learn more
                                        </div> 
                                    </div> 
                                </div> 
                                <div className="p-4"> 
                                    <div className="flex justify-between space-x-8 text-base font-medium"> 
                                        <h3> 
                                            <div title={product.name} aria-label={product.name} className="font-display text-xl"> 
                                                <span aria-hidden="true" className="absolute inset-0"></span> {product.name}
                                            </div> 
                                        </h3> 
                                        <p>${product.price.toFixed(2)}</p> 
                                    </div> 
                                </div> 
                            </motion.a>
                            ))}
                        </div>
                    </>
                    ))}
                </div>
            </section>     
            </main>
        </>
    )
}