import Link from "next/link";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type props = {
	href: string;
	label: string;
	isActive: boolean;
};

function NavButton({ href, label, isActive }: props) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
	return (
		<Button
			asChild
			size="sm"
			variant="link"
			className={cn(
				"w-full lg:w-auto justify-between font-normal hover:text-black hover:bg-white hover:bg-opacity-70 rounded-lg transition-colors duration-300",
				isActive ? "bg-transparent text-white" : "bg-transparent",
                isScrolled ? "text-black" : "text-white"
			)}
		>
			<Link href={href}>{label}</Link>
		</Button>
	);
}

export default NavButton;
