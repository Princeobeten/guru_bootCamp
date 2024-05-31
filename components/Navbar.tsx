import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 px-0 py-5">
        <Link href="/">
            <h1 className='text-green-50 text-3xl font-bold lg:text-4xl'>
                Guru BootCamp
            </h1>
        </Link>

        <ul className="hidden h-full gap-2 lg:flex">
            {NAV_LINKS.map((link) => (
                <li key={link.key} className="mr-2 2xl:mr-6">
                    <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>


        <div className="lg:flexCenter hidden">
            <Button 
                type="button" 
                tittle="Login" 
                icon="/user.svg" 
                variant="btn_dark_green"
            />
        </div>

        <Image 
            src='/menu.svg'
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar