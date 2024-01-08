// _app.js
import { StylesProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import '../global.css'; // Adjust the path based on your project structure

// Create a cache for emotion
const cache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    </StylesProvider>
  );
}

export default MyApp;
