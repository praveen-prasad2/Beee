"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

export default function Header() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="leading-none flex items-center justify-between w-full px-[110px] py-[20px] bg-bee-bg text-black tracking-wider">
            {/* logo */}
            <div>
                <Image src="/logo.png" alt="logo" width={120} height={120} />
            </div>
            {/* Menu */}
            <div className="flex items-center gap-8">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative flex flex-col items-center gap-1 text-[18px] hover:text-bee transition-all duration-300 ${isActive ? "font-medium" : ""}`}
                        >
                            {item.name}
                            {isActive && (
                                <span className="absolute -bottom-2 w-1.5 h-1.5 bg-black rounded-full" />
                            )}
                        </Link>
                    );
                })}
            </div>
            {/* Button  */}
            <div>
                <button className="group bg-white pl-6 pr-2 py-2 rounded-full text-[18px] flex items-center gap-2 transition-all duration-300">
                    Contact
                    <span className="bg-black rounded-full p-2 transition-all duration-300 group-hover:bg-bee">
                        <FiArrowRight className="text-white " />
                    </span>
                </button>
            </div>
        </header>
    );
}
