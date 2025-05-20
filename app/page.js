'use client'
import Image from 'next/image'
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion'


export default function Home() {
  return (
<div className="bg-black">
        <main className="background relative">
            <section id="home" className="relative flex min-h-screen items-center">
                <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
                <img src="https://radiant.tailus.io/images/woman-in-dark.webp" className="fixed inset-0 h-full w-full object-cover" alt="woman in dark" width="4160" height="6240"/>
                <div className="relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0">
                    <div className="pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                            }}
                            className="rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>Creative Duo</motion.h1>
                    </div>
                    <div>
                        <div className="ml-auto md:w-2/3 md:pt-12 lg:w-1/2">
                            <motion.p 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, delay:2, transition: { duration: 0.6, delay:0.5, ease: 'easeOut' } }
                                }}
                                className="mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal">On an endless journey to create experiences that inspire others. Always motived by design that&apos;s honest, aesthetic and natural. Probably the only designer you&apos;ll ever need.</motion.p>
                            <Link href="#work" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                <motion.span
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, delay:2, transition: { duration: 0.6, delay:0.8, ease: 'easeOut' } }
                                    }}
                                    className="relative">See our work</motion.span>
                            </Link>
                        </div>
                    </div>
                    <div data-rellax-speed="-5" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.6, delay:1, ease: 'easeOut' } }
                            }}
                        className="text-xs font-light uppercase tracking-widest text-white">Follow us</motion.span>
                        <ul className="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
                            <motion.li 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: {opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay:1.3, ease: 'easeOut' } }
                                }}>
                                <a href="#" target="_blank">001 ------ Instagram</a>
                            </motion.li>
                            <motion.li
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay:1.6, ease: 'easeOut' } }
                                }}>
                                <a href="#" target="_blank">002 ------ Behance</a>
                            </motion.li>
                            <motion.li
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay:1.9, ease: 'easeOut' } }
                                }}>
                                <a href="#" target="_blank">003 ------ Twitter</a>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="work" className="relative z-10 bg-black pb-20 lg:pt-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
                    <div
                        data-rellax-speed="-3"
                        data-rellax-xs-speed="0"
                        data-rellax-mobile-speed="0"
                        className="rellax flex flex-wrap items-center gap-6">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay:0.3, ease: 'easeOut' } }
                            }}
                        className="text-7xl font-bold text-white xl:text-8xl">Our work</motion.h2>
                        <motion.span 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.6, delay:0.9, ease: 'easeOut' } }
                            }}
                        className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
                        12 Projects
                        </motion.span>
                    </div>

                    <div className="relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60">
                    {[
                        {
                        src: "https://radiant.tailus.io/images/projects/project2.webp",
                        alt: "gild cover",
                        width: 2000,
                        height: 1333,
                        title: "Gild Sport",
                        },
                        {
                        src: "https://radiant.tailus.io/images/projects/project2.webp",
                        alt: "project description",
                        width: 1380,
                        height: 920,
                        title: "Project Name",
                        },
                        {
                        src: "https://radiant.tailus.io/images/projects/project2.webp",
                        alt: "project description",
                        width: 826,
                        height: 826,
                        title: "Project Name",
                        },
                        {
                        src: "https://radiant.tailus.io/images/projects/project2.webp",
                        alt: "project description",
                        width: 1380,
                        height: 1380,
                        title: "Project Name",
                        },
                        {
                        src: "https://radiant.tailus.io/images/projects/project2.webp",
                        alt: "project description",
                        width: 740,
                        height: 1112,
                        title: "Project Name",
                        },
                        {
                        src: "https://radiant.tailus.io/images/projects/project2.webp",
                        alt: "project description",
                        width: 740,
                        height: 1110,
                        title: "Project Name",
                        },
                    ].map((proj, idx) => {
                        const translateYMap = [
                        "md:translate-y-[98px]",
                        "md:translate-y-[-50px]",
                        "md:translate-y-[86px]",
                        "md:translate-y-0",
                        "md:translate-y-[108px]",
                        "md:translate-y-0",
                        ];
                        
                        return (
                        <motion.a
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:0.9, ease: 'easeOut' } }
                            }}
                            key={idx}
                            href="/pages/project.html"
                            data-rellax-speed={[-2, 1, -2, 0, -3, 0][idx] || 0}
                            data-rellax-xs-speed="0"
                            data-rellax-mobile-speed="0"
                            data-rellax-tablet-speed="0"
                            className={`rellax group translate-y-0 ${translateYMap[idx]} ${
                            idx === 0 || idx === 3 ? "col-span-2 lg:col-span-1" : "block"
                            }`}
                        >
                            <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                            <img
                                className="transition duration-500"
                                src={proj.src}
                                alt={proj.alt}
                                width={proj.width}
                                height={proj.height}
                            />
                            </div>
                            <div className="flex items-center justify-between p-4">
                            <h3 className="text-2xl font-normal text-white">{proj.title}</h3>
                            <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
                                01 / 2023
                            </span>
                            </div>
                        </motion.a>
                        );
                    })}
                    </div>

                </div>
            </section>
            <section id="services" className="relative bg-black pb-20 pt-32 md:pb-0 lg:pb-0 xl:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className="flex flex-wrap items-center gap-6">
                        <motion.h2 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.6, delay:0.4, ease: 'easeOut' } }
                            }}
                        className="text-7xl font-bold text-white xl:text-8xl">Our services</motion.h2>
                        <motion.span
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.6, delay:0.9, ease: 'easeOut' } }
                            }}
                            className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">03 services</motion.span>
                    </div>
                    <div className="mt-24">
                        <div className="">
                            <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
                                <div>
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        variants={{
                                            hidden: {opacity: 0, y: -30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:0.9, ease: 'easeOut' } }
                                        }}
                                        className="group border-b border-white/30 pb-8">
                                        <div className="flex flex-col gap-4 divide-y divide-white/30">
                                            <span className="inline-block text-white/60">001</span>
                                            <h3 className="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
                                        </div>
                                        <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                            <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.</p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div>
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        variants={{
                                            hidden: {opacity: 0, y: -30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:0.9, ease: 'easeOut' } }
                                        }}
                                        className="group border-b border-white/30 pb-8">
                                        <div className="flex flex-col gap-4 divide-y divide-white/30">
                                            <span className="inline-block text-white/60">001</span>
                                            <h3 className="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
                                        </div>
                                        <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                            <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.</p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div>
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        variants={{
                                            hidden: {opacity: 0, y: -30 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:1.2, ease: 'easeOut' } }
                                        }}
                                        className="group border-b border-white/30 pb-8">
                                        <div className="flex flex-col gap-4 divide-y divide-white/30">
                                            <span className="inline-block text-white/60">001</span>
                                            <h3 className="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
                                        </div>
                                        <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                            <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-32 lg:pb-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                <div className="flex flex-wrap items-center gap-6">
                    <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.6, delay:0.4, ease: 'easeOut' } }
                        }}
                    className="text-7xl font-bold text-white xl:text-8xl">About Us</motion.h2>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.6, delay:0.9, ease: 'easeOut' } }
                        }}
                        className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">04 About</motion.span>
                    </div>

                <div className="mt-24 md:mt-72">
                    <div className="grid gap-6">
                    <div className="grid md:grid-cols-3">
                        <div className="overflow-hidden md:col-span-2">
                        <Image
                            src="https://radiant.tailus.io/images/un-duo.webp"
                            alt="unnamed duo photo"
                            width={1500}
                            height={1000}
                            className="w-full h-auto"
                        />
                        </div>
                    </div>

                    <div
                        data-rellax-speed="1"
                        data-rellax-xs-speed="0"
                        data-rellax-mobile-speed="0"
                        data-rellax-tablet-speed="0.5"
                        className="rellax ml-auto md:w-3/5 lg:w-2/5 translate-x-0 translate-y-0 md:translate-x-0 md:translate-y-[-390px] "
                    // style={{ transform: 'translate3d(0px, -390px, 0px)' }}
                    >
                        <motion.p 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: {opacity: 0, x: 30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay:0.4, ease: 'easeOut' } }
                            }}
                        className="mt-12 text-2xl font-light text-white">
                        Minima iure saepe necessitatibus ipsa voluptatibus, minus
                        voluptatem in facere maxime quae repellendus nisi inventore
                        libero impedit eligendi, accusantium consequuntur consectetur
                        quidem?
                        </motion.p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="contact" className="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className="flex flex-wrap items-center gap-6">
                        <h2 className="text-7xl font-bold text-white xl:text-8xl">Let&apos;s work together</h2>
                        <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">__</span>
                    </div>
                    <div className="mt-24">
                        <div className="border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                            <div className="mt-8 border w-full border-white/30 p-8 sm:p-12">
                                <div>
                                    <h3 className="text-xs font-light uppercase tracking-widest text-white">Address</h3>
                                    <p className="mt-4 text-white">Riverside 25, San Francisco, California</p>
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-xs font-light uppercase tracking-widest text-white">Contact Info</h3>
                                    <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                        <li>
                                            <a href="tel:+243000000000">Phone ------ +243 000 000 000</a>
                                        </li>
                                        <li>
                                            <a href="mailto:hello@tailus.io">E-mail ------- hello@tailus.io</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-xs font-light uppercase tracking-widest text-white">Follow us</h3>
                                    <ul className="relative z-20 mt-4 space-y-2 font-light text-white">
                                        <li>
                                            <a href="#" target="_blank">001 ------ Instagram</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">002 ------ Behance</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">003 ------ Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    
        {/* <script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"></script> */}
    

</div>
  );
}
