// pages/404.tsx
import Link from 'next/link'
import Head from 'next/head'

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
          <h2 className="text-3xl font-semibold mb-4 text-gray-200">Page Not Found</h2>
          <p className="text-xl mb-6 text-gray-200">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href="/" className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default Custom404