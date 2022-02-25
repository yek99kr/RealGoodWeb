import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-200 h-[100vh] w-full">
      <Head>
        <title>RealGoodStudio</title>
      </Head>

      <div
        className="
      pl-5 pt-8"
      >
        <p className="font-[500] text-2xl pl-5">V1</p>
      </div>

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
        <p className="inline">Random every 2sec</p>
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
          Random on mousemove, Changing speed: 16 millisec
        </p>
      </div>

      <div
        className="
      pl-5 pt-8"
      >
        <p className="font-[500] text-2xl pl-5  ">V2</p>
      </div>

      <div
        className="
      p-5 "
      >
        <Link href="/about4">
          <a>
            <span className="font-[600] text-6xl p-5">About4</span>
          </a>
        </Link>
        <p className="inline">Madlibs with Dropdown, Size: small</p>
      </div>

      <div
        className="
      p-5 "
      >
        <Link href="/about5">
          <a>
            <span className="font-[600] text-6xl p-5">About5</span>
          </a>
        </Link>
        <p className="inline">
          Madlibs with Dropdown + Random on mousemove before clicked, Size:
          medium
        </p>
      </div>
    </div>
  );
}
