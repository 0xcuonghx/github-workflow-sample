import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import { env } from "next-runtime-env";

export default function Home() {
  return (
    <>NEXT_PUBLIC_CONTRACT_ADDRESS: {env("NEXT_PUBLIC_CONTRACT_ADDRESS")}</>
  );
}
