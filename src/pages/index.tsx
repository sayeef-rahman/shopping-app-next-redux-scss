import { WelcomeForm } from "@/components/welcomeForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adventure Shopping App</title>
        <meta name="description" content="Adventure Shopping App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main-page">
        <WelcomeForm />
      </main>
    </>
  );
}
