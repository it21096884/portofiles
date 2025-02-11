import "@/styles/globals.css";
import {ThemeProvider } from "./context/ThemeContext";
//oshadi senevirathna
export default function App({ Component, pageProps }) {
  return (<ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>);
  
  
}
