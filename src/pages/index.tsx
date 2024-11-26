import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const subtext = `We're working hard behind the scenes to bring you something amazing. Stay tuned - we'll be up and running soon!`;
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <Image
        width={1200}
        height={675}
        className='h-screen w-screen object-cover blur-2xl'
        src='/images/home/home-bg.png'
        alt='home bg'
      />
      <div className='fixed w-screen h-screen top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center px-6'>
        <p className='mb-20'>Nijiko Dev</p>
        <p className='text-5xl mb-4'>UNDER</p>
        <p className='text-5xl'>CONSTRUCTION</p>
        <p className='mt-8 text-center'>{subtext}</p>
      </div>
    </div>
  );
}
