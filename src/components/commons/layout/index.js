import Header from "../header/index";

export default function Layout({ children }) {

return (
    <>
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    </>
);
};

