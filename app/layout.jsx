import NavBar from '@/components/NavBar';
import { exo2, orbitron } from './fonts';
import './globals.css';

export const metadata = {
  // title: 'Indie Gamer',
  title: {
    default: 'Indie Gamer',
    template: 'Indie Gamer | %s'
  },
  description: 'Only the best indie games, reviewed fro you'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body
        suppressHydrationWarning={true}
        className=" bg-orange-50 flex flex-col min-h-screen px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-top py-3 text-center text-slate-500 text-xs">
          Game data and images courtesy of{' '}
          <a
            href="https://rawg.io"
            target="_blank"
            className="text-orange-800 hover:underline">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
