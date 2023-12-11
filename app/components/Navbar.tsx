import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="absolute top-0 right-0 left-0 z-10 pt-4 px-4">
            <div className='container mx-auto flex items-center justify-center'>
                <a href="#home">
                    <Image
                        src="/assets/images/logotypefa.png"
                        alt="Logo"
                        width={200}
                        height={70}
                        priority
                    />
                </a>
            </div>
        </nav>
    )
}

export default Navbar