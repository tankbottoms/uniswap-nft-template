import Head from "next/head"; // Html head
import styles from "styles/Layout.module.scss"; // Component styles

export default function Layout({ children }) {
  return (
    <div>
      {/* Meta + Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>SVG Card based on Uniswap</title>
        <meta name="title" content="Uniswap LP Art" />
        <meta
          name="description"
          content="Explore and manipulate the art behind Uniswap's Liquidity Provider Non-Fungible Token positions."
        />

        {/* Open Graph + Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juicebox.money/" />
        <meta property="og:title" content="SVG Uniswap LP Art" />
        <meta
          property="og:description"
          content="Explore and manipulate the art behind Uniswap's Liquidity Provider Non-Fungible Token positions."
        />
        <meta
          property="og:image"
          content="https://juicebox.money/images/meta.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://juicebox.money" />
        <meta property="twitter:title" content="Uniswap LP Art" />
        <meta
          property="twitter:description"
          content="Explore and manipulate the art behind Uniswap's Liquidity Provider Non-Fungible Token positions."
        />
        <meta
          property="twitter:image"
          content="https://juicebox.money/images/meta.png"
        />

        {/* Font preload */}
        <link
          rel="preload"
          href="/fonts/DMMono-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
            
      <br></br>
      <img class="image" src="/images/meta.png"></img>
      <br></br>
      <br></br>

      {/* Content */}
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
}
