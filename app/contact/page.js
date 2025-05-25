export default function About() {
    return (
        <section className="relative z-10 pt-36 backdrop-blur-3xl lg:pb-32">
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
      );
}
