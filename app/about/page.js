'use client'
import { motion, useAnimation } from 'framer-motion'


export default function About() {
    return (
      <>
<main className="relative overflow-hidden">
            <section id="home" className="sticky top-0 flex min-h-screen items-center bg-gradient-to-b from-black/10 via-black/20 to-black media-h:min-h-[60vh] xl:min-h-screen media-h:xl:min-h-screen">
                <img data-rellax-speed="3" data-rellax-xs-speed="2" data-rellax-mobile-speed="2" className="rellax absolute inset-0 h-full w-full object-cover" src="https://radiant.tailus.io/images/gild/gild-cover.webp" alt="project cover" width="2000" height="1333" style={{ transform: 'translate3d(0px, 0px, 0px)' }}/>
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <motion.h1 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, delay:2, transition: { duration: 0.6, delay:0.3, ease: 'easeOut' } }
                        }}
                        className="rellax text-center text-7xl font-black text-white sm:text-8xl lg:text-9xl xl:leading-tight" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>Gild Sport</motion.h1>
                </div>
            </section>

            <section id="introduction" className="relative top-0 z-10 bg-black pb-20 pt-20 md:sticky">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className="flex">
                        <div className="w-full">
                            <div data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax flex flex-wrap items-center gap-6" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: {opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay:0.3, ease: 'easeOut' } }
                                }}
                                className="text-7xl font-bold text-white xl:text-8xl">Our work</motion.h2>
                                <motion.span 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        hidden: {opacity: 0 },
                                        visible: { opacity: 1, transition: { duration: 0.6, delay:0.6, ease: 'easeOut' } }
                                    }}
                                className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
                                12 Projects
                                </motion.span>
                            </div>
                            <div className="mt-12 ml-auto text-lg font-light text-white sm:text-2xl md:w-2/3 lg:mt-0 lg:w-1/2 xl:leading-normal">
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        hidden: {opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay:0.9, ease: 'easeOut' } }
                                    }}
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni a deserunt recusandae ducimus tempore porro repudiandae laboriosam nisi ut, dolorem, quam quidem quae qui impedit molestiae labore ratione earum!</motion.p>
                                <motion.p 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        hidden: {opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay:1.2, ease: 'easeOut' } }
                                    }}
                                className="mt-12">Accusantium quia sed modi porro alias illo odit officia, est quas unde quod molestias delectus, blanditiis, ipsam quibusdam nesciunt itaque deserunt. Nulla.</motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="overview" className="relative z-10 bg-black pb-20 lg:pt-20">
                <div className="xl:px-6">
                    <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:0.9, ease: 'easeOut' } }
                        }}
                        className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
                    >
                        <img
                        className="transition duration-500"
                        src="https://radiant.tailus.io/images/gild/gild-jump.webp"
                        alt="project image"
                        width="1380"
                        height="1380"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:0.9, ease: 'easeOut' } }
                        }}
                        data-rellax-speed="-2"
                        data-rellax-xs-speed="0"
                        data-rellax-mobile-speed="0"
                        className="rellax relative translate-y-0 md:translate-y-[143px] before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
                    >
                        <img
                        className="h-full w-full object-cover transition duration-500"
                        src="https://radiant.tailus.io/images/gild/gild-legs.webp"
                        alt="project cover"
                        width="2000"
                        height="1333"
                        />
                    </motion.div>
                    </div>
                </div>
            </section>
            <section id="approach" className="relative z-10 bg-black pb-20 pt-20 md:sticky md:top-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className="flex">
                        <div className="w-full">
                            <div data-rellax-speed="-2" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax flex flex-wrap items-center gap-6" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: {opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay:0.3, ease: 'easeOut' } }
                                }}
                                className="text-7xl font-bold text-white xl:text-8xl">Our work</motion.h2>
                                <motion.span 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        hidden: {opacity: 0 },
                                        visible: { opacity: 1, transition: { duration: 0.6, delay:0.6, ease: 'easeOut' } }
                                    }}
                                className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
                                12 Projects
                                </motion.span>
                            </div>
                            <div className="mt-12 ml-auto text-lg font-light text-white sm:text-2xl md:w-2/3 lg:mt-0 lg:w-1/2 xl:leading-normal">
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        hidden: {opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay:0.9, ease: 'easeOut' } }
                                    }}
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni a deserunt recusandae ducimus tempore porro repudiandae laboriosam nisi ut, dolorem, quam quidem quae qui impedit molestiae labore ratione earum!</motion.p>
                                <motion.p 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    variants={{
                                        hidden: {opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay:1.2, ease: 'easeOut' } }
                                    }}
                                className="mt-12">Accusantium quia sed modi porro alias illo odit officia, est quas unde quod molestias delectus, blanditiis, ipsam quibusdam nesciunt itaque deserunt. Nulla.</motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="result" className="relative z-10 bg-black pb-20 md:top-0 lg:pt-20">
                <div className="space-y-3 md:space-y-6 xl:px-6">
                    <img src="https://radiant.tailus.io/images/gild/gild-cover2.webp" alt="project cover" width="2000" height="1334"/>
                    <div className="mt-6 grid grid-cols-2 gap-3 md:gap-6">
                        <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                            <img
                             className="transition duration-500" src="https://radiant.tailus.io/images/gild/gild-jump.webp" alt="project cover" width="1380" height="1380"/>
                        </div>
                        <div className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                            <img className="h-full w-full object-cover transition duration-500" src="https://radiant.tailus.io/images/gild/gild-legs.webp" alt="project cover" width="2000" height="1333"/>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute hidden xl:block z-10 inset-0 m-auto h-max w-max -translate-y-0 xl:-translate-y-56" >
                            <div className="mx-auto max-w-7xl px-6 lg:-translate-y-96 lg:px-12 xl:px-6 2xl:px-0">
                                <div
                                    data-rellax-speed="-2"
                                    data-rellax-xs-speed="0"
                                    data-rellax-mobile-speed="0"
                                    className="rellax -mt-96 translate-y-0 md:translate-y-[670px]"
                                >
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
                                        className="text-7xl font-bold text-white xl:text-8xl">Built for Speed</motion.h2>
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
                                    <div
                                    className="mt-12 ml-auto text-lg font-light text-white sm:text-2xl md:w-2/3 lg:w-2/5 xl:leading-normal"
                                    >
                                    <motion.p
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        variants={{
                                            hidden: {opacity: 0 },
                                            visible: { opacity: 1, transition: { duration: 0.6, delay:0.9, ease: 'easeOut' } }
                                        }}
                                    >
                                        Accusantium quia sed modi porro alias illo odit officia, est quas
                                        unde quod molestias delectus, blanditiis, ipsam quibusdam nesciunt
                                        itaque deserunt. Nulla.
                                    </motion.p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="h-full w-full object-cover"
                            src="https://radiant.tailus.io/images/gild/gild-cover3.webp"
                            alt="cover"
                            width="1800"
                            height="1200"
                        />
                    </div>
                </div>
            </section>
            <section id="approach" className="relative z-10 bg-black py-20 md:sticky md:top-12">
                <a href="" className="block bg-gradient-to-b from-transparent to-white/10 py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                        <div className="flex">
                            <div className="w-full">
                                <span className="mx-auto block h-max w-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">Next project</span>
                                <h2 className="text-center text-7xl font-bold text-white xl:text-8xl">Ampire</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </main>
      </>
    );
  }