import { Bell, LayoutGrid, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import EPAPER_LOGO from '../../../public/e-paper_logo.svg'
import ChangeUserSelect from '../ui/ChangeUserSelect'
import { Separator } from '../ui/separator'

export default function Header() {
    return (
        <header
            className="flex flex-1 flex-row p-4 max-h-20 place-items-center gap-4 border border-gray200"
        >
            <button type="button" className=''>
                <Menu size={24} />
            </button>

            <Link href={'/'}>
                <Image
                    alt='e-paper logo'
                    src={EPAPER_LOGO}
                    width={110}
                    priority
                />
            </Link>

            <Separator orientation='vertical' />

            <button type='button' className="flex gap-2 ml-3 max-sm:ml-0">
                <LayoutGrid size={24} />
                
                <p className="flex text-sm text-center self-center max-sm:hidden">
                    Soluções
                </p>
            </button>

            <div className="flex gap-9 ml-auto">
                <button type="button" className='mobile-ui-hidden'>
                    <Bell />
                </button>

                <ChangeUserSelect />
            </div>

        </header>
    )
}