import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html className='scroll-smooth'>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap" rel="stylesheet" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Antonio:wght@300;400;500;600;700&family=Karla:wght@300;400;500;600;700;800&family=Oswald:wght@300;400;500;600;700&family=Delius+Unicase:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Gaegu:wght@300;400;700&family=Indie+Flower&family=Quicksand:wght@400;600;700&family=Syne:wght@400;700&family=Yatra+One&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument