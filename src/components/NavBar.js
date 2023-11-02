import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, InsIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute 
        left-0 -bottom-0.5 group-hover:w-full transition-[width] 
        ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="主页" className="mr-4" />
        <CustomLink href="/about" title="关于" className="mx-4" />
        <CustomLink href="/projects" title="项目" className="mx-4" />
        <CustomLink
          href="https://blog.mikolee.xyz"
          title="博客"
          className="ml-4"
          target={"_blank"}
        />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com/michael_li524"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/michaeli524"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/ime_mkl/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <InsIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
