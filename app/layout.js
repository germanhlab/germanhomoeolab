import '@/styles/globals.css';

import Nav from '@/components/Nav';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Nav2 from '@components/Nav2';
import {ToastContainer} from "./customToast"
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
    title: "geamanhomoeolab",
    description: 'aurvedic treatment'
}

const RootLayout = ({ children }) => {

    return (
        <html lang='en'>
            <body>


                <div className="main">
                    <div className="gradient" />
                </div>
                <main className='app'>

                    <Nav />
                    {/* <Nav2/> */}
                    <ToastContainer/>
                    {/* <Header /> */}
                    {children}
                    <Footer />
                </main>

                {/* <Provider>
        <div className="main">
            <div className="gradient"/>
        </div>
        <main className='app'>
           <Nav/>
            {children}
        </main>
        </Provider> */}
            </body>
        </html>
    )
}

export default RootLayout;