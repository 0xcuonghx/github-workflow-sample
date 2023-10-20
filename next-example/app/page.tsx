"use client";
import { useEnvContext } from "next-runtime-env";

export default function Home() {
  const { NEXT_PUBLIC_CONTRACT_ADDRESS } = useEnvContext();

  return <>{NEXT_PUBLIC_CONTRACT_ADDRESS}</>;
}
