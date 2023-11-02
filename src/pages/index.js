import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/miku_avatar.jpg";
import Animated from "@/components/Animated";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 h-1/3">
              <Image
                src={profilePic}
                alt="Michael Li"
                priority="true"
                className="h-auto w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <Animated
                // text=""
                text="Turning Vision Into Reality With Code And Design"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Hi, 我是 Michael Li ! 一位 Front End
                Coder，我致力于将想法转化为富有创意的 Web 应用程序。<br></br>
                这里是我的个人主页，用来展示我的项目。我喜欢用 React.js
                来构建项目，目前正在学习 TypeScript 和 Next.js!
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  我的简历
                  <LinkArrow className="ml-1 w-[16px]" />
                </Link>
                <Link
                  href="mailto:michael.li.work@outlook.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  联系我
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
      </main>
    </>
  );
}
