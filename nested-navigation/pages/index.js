import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
