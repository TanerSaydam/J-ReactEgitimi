import { Inter } from 'next/font/google'
import withLayout from '@/Layouts/withLayout';

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
     <h1>Index Page</h1>
    </>
  )
}

export default withLayout(Home);
