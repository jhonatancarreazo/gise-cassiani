import Footer from "./Footer";
import './layout.css';
function Layout({ children }) {
  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
