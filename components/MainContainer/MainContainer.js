import Alink from "../Alink/Alink";
import Head from "next/head";
import Header from "../Header/Header";

const MainContainer = ({children,keywords}) => {
    return (
        <>
            <Head>

                <meta keyword={'Baby Names ' + keywords}></meta>
                <title> {keywords} </title>

            </Head>
            <Header/>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;