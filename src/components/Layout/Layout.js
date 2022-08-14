import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
