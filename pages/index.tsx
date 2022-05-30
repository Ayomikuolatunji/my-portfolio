import type { NextPage } from 'next'
import HomePage from '../layouts/home/Home'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
       <HomePage/>
    </div>
  )
}

export default Home
