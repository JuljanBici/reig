import Link from "next/link";

export default function Footer() {
    return (
      <>
        <footer className="relative bg-black pt-20 backdrop-opacity-0">
            <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
                <div>
                    <div className="flex flex-wrap items-center gap-6">
                        <h2 className="text-3xl text-white xl:text-6xl">Instagram</h2>
                        <a href="#" target="_blank" className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">@tailus</a>
                    </div>
                    <div className="mt-12 grid grid-cols-3 md:mt-16 lg:mt-24">
                        <a href="#" target="_blank" className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                            <span className="sr-only">Instagram feed</span>
                            <img className="transition duration-500" src="http://radiant.tailus.io/images/gild/gild-cover.webp" alt="insta feed cover" width="2000" height="1333"/>
                        </a>
                        <a href="#" target="_blank" className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                            <span className="sr-only">Instagram feed</span>
                            <img className="transition duration-500" src="https://radiant.tailus.io/images/gild/gild-cover2.webp" alt="insta feed cover" width="2000" height="1334"/>
                        </a>
                        <a href="#" target="_blank" className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                            <span className="sr-only">Instagram feed</span>
                            <img className="transition duration-500" src="https://radiant.tailus.io/images/gild/gild-cover3.webp" alt="insta feed cover" width="1800" height="1200"/>
                        </a>
                    </div>
                </div>
                <div className="mt-12 md:mt-16 lg:mt-24">
                    <div className="space-y-8 md:space-y-12">
                        <Link href="/" className="text-2xl font-light tracking-widest text-white">
                            {/* <img className="h-8 w-auto brightness-200" src="/favicon.svg" alt="logo mark" width="100" height="100"/> */}
                        </Link>
                        <nav>
                            <ul className="flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white">
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <Link href="/categories">
                                  <p>Brandet</p>
                                </Link>
                                <li>
                                <Link href="/about">
                                  <p>Rreth Nesh</p>
                                </Link>
                                </li>
                                <Link href="/contact">
                                    <p>Kontakto</p>
                                </Link>
                            </ul>
                        </nav>
                        <div className="flex flex-wrap justify-between gap-3">
                            <p className="text-xs text-center text-gray-500">
                            Built with ❤️ by <a href="https://yourwebsite.com" className="text-sm text-rose-400 underline">Owlnetic</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
    );
  }