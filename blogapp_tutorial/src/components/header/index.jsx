"use client";
import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../hooks/useThemeSwitch";

const Header = () => {
	const [mode, setMode] = useThemeSwitch();
	return (
		<header className="w-full p-4 px-10 flex items-center justify-between">
			<Logo />
			<nav className="w-max z-50 py-3 px-8 border border-solid border-dark rounded-full font-medium flex items-center capitalize fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
				<Link
					href={"/"}
					className="mx-2"
				>
					Home
				</Link>
				<Link
					href={"/about"}
					className="mx-2"
				>
					About
				</Link>
				<Link
					href={"/contact"}
					className="mx-2"
				>
					Contact
				</Link>
				<button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
					<SunIcon />
				</button>
			</nav>
			<div>
				<a
					href={siteMetadata.linkedin}
					className="w-6 h-6 mr-4 inline-block"
				>
					<LinkedinIcon className=" hover:scale-125 transition-all ease duration-200" />
				</a>
				<a
					href={siteMetadata.twitter}
					className="w-6 h-6 mr-4 inline-block"
				>
					<TwitterIcon className=" hover:scale-125 transition-all ease duration-200" />
				</a>
				<a
					href={siteMetadata.github}
					className="w-6 h-6 mr-4 inline-block"
				>
					<GithubIcon className=" hover:scale-125 transition-all ease duration-200" />
				</a>
			</div>
		</header>
	);
};

export default Header;
