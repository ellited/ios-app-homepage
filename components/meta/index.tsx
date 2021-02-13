import Head from 'next/head'

const title = "ABC Transport";
const description = "Download ABC Transport – iOS application for learning english for kids";

const Meta = (props: { title?: string; description?: string }) => (
    <Head>
        <title>{props.title ? `${props.title} - ${title}` : title}</title>
        <meta name="description" content={props.description ? `${props.description}` : description}/>
        <link rel="icon" type="image/png" href="/favicon.ico"/>
    </Head>
)
export default Meta;
