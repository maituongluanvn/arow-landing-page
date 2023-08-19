import Image from 'next/image'
import Footer from '../../components/footer'
import TextAnimation from '../../components/textAnimation'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100vh" display="flex"
      >
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/assets/arow-logo.svg"
            alt="Arow Logo"
            width={360}
            height={74}
            priority />
        </div>
        <TextAnimation />
      <Footer />
        </Grid>
    </>
  )
}
