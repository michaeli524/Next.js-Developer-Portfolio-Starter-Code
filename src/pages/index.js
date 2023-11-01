import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/favicon.jpg";
import Animated from "@/components/Animated";
import { Link } from "next/link";

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
                className="h-auto w-full"
              />
            </div>
            <div className="w-1/2">
              <Animated text="Hi, 你好, 我是 Michael Li" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                asperiores sequi, veniam cupiditate ea sint minima laboriosam?
                Aut placeat, consequatur, consectetur tempora eligendi fugiat
                corrupti aspernatur sint autem mollitia repellendus.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
