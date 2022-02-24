import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RealGoodStudio</title>
      </Head>

      <div
        className="
      p-5 "
      >
        <Link href="/about">
          <a>
            <span className="font-[600] text-6xl p-5">About1</span>
          </a>
        </Link>
        <p className="inline">Madlibs</p>
      </div>
      <div
        className="
      p-5 "
      >
        <Link href="/about2">
          <a>
            <span className="font-[600] text-6xl p-5 ">About2</span>
          </a>
        </Link>
        <p className="inline">Words changing ramdomly every 2sec</p>
      </div>

      <div
        className="
      p-5 "
      >
        <Link href="/about3">
          <a>
            <span className="font-[600] text-6xl p-5">About3</span>
          </a>
        </Link>
        <p className="inline">
          Words changing randomly on mousemove, changing speed: 12 millisec
        </p>
      </div>
    </div>
  );
}
