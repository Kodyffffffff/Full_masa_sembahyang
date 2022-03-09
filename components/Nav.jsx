import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import logo from "../img_compo/logo1.jpg"
function Nav() {
  return (

    <>
 <Head>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></script>
       <script src="https://cdn.tailwindcss.com/3.0.12"></script> 
       <script src="https://cdn.tailwindcss.com/3.0.12"></script>                        
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://your-site-or-cdn.com/fontawesome/v5.15.4/js/all.js" data-search-pseudo-elements ></script>
      <script src="https://your-site-or-cdn.com/fontawesome/v5.15.4/js/all.js" data-auto-replace-svg></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></script>
    </Head>
      <header className="bg-Gray-400 dark:bg-gray-800 md-w-full sm:w-full">
        <nav className="bg-gray-400 dark:bg-gray-800">
          <div className="container p-6 mx-auto md-w-full sm:w-full">
            <Link href="/">
              <a className="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">MasaSembahyang</a>
            </Link>

            <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
              <Link href="/">
                <a href="#" className="border-b-2  hover:decoration-blue-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200  mx-1.5 sm:mx-6">home</a>
              </Link>
              <Link href="/Blog">
              <a href="#" className="border-b-2  hover:decoration-blue-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200  mx-1.5 sm:mx-6">blog</a>
              </Link>
              <Link href="/Calenderpage">
              <a href="#" className="border-b-2  hover:decoration-blue-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200  mx-1.5 sm:mx-6">calender</a>

              </Link>
              <Link href="/About">
              <a href="#" className="border-b-2  hover:decoration-blue-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200  mx-1.5 sm:mx-6">about</a>
              </Link>
            </div>
          </div>
        </nav>

      </header>


    </>


  )

}

export default Nav;

