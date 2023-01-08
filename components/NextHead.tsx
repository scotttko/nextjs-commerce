import Head from 'next/head'

interface NextHeadProps {
  title: string
  desc?: string
}
export default function NextHead({ title, desc }: NextHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      {desc && <meta name="description" content={desc} />}
    </Head>
  )
}
