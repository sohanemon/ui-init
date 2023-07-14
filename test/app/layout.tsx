
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--poppins',
});

export const metadata = {
  title: 'Next | SohanEmon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
