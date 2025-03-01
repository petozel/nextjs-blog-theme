import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>Petshop - Kedi Maması - Köpek Maması</title>
      <meta name="description" content="Evcil hayvanlar için en iyi ürün ve site önerileri için sitemizi ziyaret edin!" />
      <meta property="og:title" content="Petshop - Kedi Maması - Köpek Maması" />
    </Head>
  );
}
