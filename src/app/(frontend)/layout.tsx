import React from "react";
import "@/css/index.css";
import Head from "next/head";
import { 
  Literata, 
  Strichpunkt_Sans, 
  Google_Sans_Code, 
  Momo_Signature 
} from "next/font/google";

const literata = Literata({
  subsets: ["latin"],
  variable: "--literata",
  style: ["italic", "normal"],
  fallback: ["system-ui", "serif"]
});

const strichpunktSans = Strichpunkt_Sans({
  subsets: ["latin"],
  variable: "--strichpunkt-sans",
  fallback: ["system-ui", "sans-serif"]
});

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--google-sans-code",
  fallback: ["system-monospace", "monospace"]
});

const momoSignature = Momo_Signature({
  subsets: ["latin"],
  weight: "400",
  variable: "--momo-signature",
  fallback: ["system-ui", "script"]
})

export const metadata = {
  description: "Dette er ikke en faktisk bokhandel, men en oppgave som skal løses i frontendutvikling-studiet ved Gokstad Akademiet.",
  title: "BookDragons",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props; 

  return (
    <html lang="no">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&family=Playwrite+TZ:wght@100..400&family=Strichpunkt+Sans:wght@400..900&display=swap" crossOrigin="anonymous" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
};
