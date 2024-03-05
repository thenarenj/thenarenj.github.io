import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="absolute top-0 right-0 left-0 z-10 pt-4 px-4">
            <div className='container mx-auto flex items-center justify-center'>
                <Link href="#home" className='flex justify-center items-center gap-2'>
                    <Image
                        src="/assets/images/logotypefa.png"
                        alt="نشان نارنج"
                        width={50}
                        height={50}
                        priority
                    />
                    <span className='font-bold text-3xl text-primary'>نارنج</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar