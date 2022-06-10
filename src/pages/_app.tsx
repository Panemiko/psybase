import type { AppProps } from 'next/app'
import React from 'react'
import globalStyles from '@styles/global'

export default function App({ Component, pageProps }: AppProps) {
    globalStyles()
    return <Component {...pageProps} />
}
