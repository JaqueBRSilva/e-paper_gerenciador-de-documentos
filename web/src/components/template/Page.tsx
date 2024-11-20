import Footer from "./Footer";
import Header from "./Header";

export default function Page(props: any) {
    return (
        <div className="h-screen">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}