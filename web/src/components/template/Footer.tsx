import Image from 'next/image'
import EPAPER_LOGO_CINZA from '../../../public/e-paper_cinza-svg.svg'

export default function Footer() {
    const actualYear = new Date().getFullYear()

    return (
        <footer
            className="flex flex-1 absolute bottom-0 w-screen p-4 h-16 gap-3 justify-center place-items-center
            bg-neutral0 border-t-2 border-gray500 border-opacity-5">

            <Image
                alt='e-paper logo'
                src={EPAPER_LOGO_CINZA}
                width={115}
                priority
            />

            <p className='font-normal text-gray500 text-sm'>
                Copyright © {actualYear} e-paper
            </p>
        </footer>
    )
}