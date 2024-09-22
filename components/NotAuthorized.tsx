"use client";
import Head from "next/head";
import Link from "next/link";

const NoAccessPage: React.FC = () => {
  // const router = useRouter()

  // const handleLogin = () => {
  //   // Redirect to login page
  //   router.push('/login')
  // }

  return (
    <>
      <Head>
        <title>No Access | Please Login</title>
        <meta
          name="description"
          content="You need to login to access this page"
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
          <h1 className="text-4xl font-bold mb-4 text-white">Access Denied</h1>
          <p className="text-xl mb-6 text-gray-200">
            You don't have access to this page. Please login to continue.
          </p>
          <Link
            href={"/"}
            // onClick={handleLogin}
            className="bg-white text-purple-600 font-semibold py-2 px-4 rounded hover:bg-purple-100 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoAccessPage;
