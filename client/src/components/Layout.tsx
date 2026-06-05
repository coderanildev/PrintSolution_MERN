import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
    children: React.ReactNode;
}

function Layout({ children }: Props) {

    return (
        <>
            <Header />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;