import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderWrapper from '../layouts/header-footer-wrapper/HeaderFooterWrapper'



function MyApp({ Component, pageProps }: AppProps) {
  return(
    <HeaderWrapper>
       <Component {...pageProps} />
    </HeaderWrapper>
  )
}

export default MyApp
