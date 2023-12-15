import NavBar from "@/components/NavBar";
import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Adventure Shopping App</title>
        <meta name="description" content="Adventure Shopping App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container container-fluid container-xxl container-xl container-lg container-md container-sm">
        <NavBar />
        <div>
          <h1>askjhgdjsh</h1>
        </div>
      </main>
    </>
  );
}
