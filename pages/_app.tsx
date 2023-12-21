import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import myStyles from "styles/myStyles/myStyles"

import React from 'react'
import { Windmill } from '@roketid/windmill-react-ui'
import type { AppProps } from 'next/app'

import { AuthProvider } from 'pages/auth/useAuth';

function MyApp({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;
  
  return (
    <Windmill usePreferences={false} theme={myStyles}>
      
      <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </Windmill>
  )
}
export default MyApp