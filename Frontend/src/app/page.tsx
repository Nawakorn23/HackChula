import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import DetailCard from "@/components/DetailCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <DetailCard/>
      {/* <Link href="/users">
                <button className="bg-blue-950 text-white font-bold py-2 px-4 rounded">All Users</button>
      </Link> */}
    </main>
  );
}