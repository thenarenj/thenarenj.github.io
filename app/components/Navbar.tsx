import Image from 'next/image'

const pages = [
    // { id: 1, title: "ارتباط با ما", url: "#home" },
    { id: 2, title: "درباره", url: "#item2" },
    { id: 3, title: "نمونه کار ها", url: "#item3" },
]

const Navbar = () => {
    return (
        <nav className="absolute top-0 right-0 left-0 z-10 py-4 px-4 flex items-center justify-between">
            <a href="#home">
                <Image
                    src="/assets/images/logotypefa.png"
                    alt="Logo"
                    width={120}
                    height={42}
                    priority
                />
            </a>
            <div className="flex justify-end w-full gap-2">
                {pages.map(page =>
                    <a key={page.id} href={page.url} className="btn btn-sm btn-secondary text-xs">{page.title}</a>
                )}
            </div>
        </nav>
    )
}

export default Navbar