import { Fragment } from 'react';
import './App.scss';
import Message from './components/common/Message';
import ScrollToTop from './components/common/ScrollToTop';
import SidebarContact from './components/common/SidebarContact';
import WhatsApp from './components/common/WhatsApp';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TopNav from './components/Navbar/TopNav';
import Schedule from './components/Schedule/Schedule';
import Social from './components/Social/Social';

function App() {

  return (
    <Fragment>
      <TopNav />

      <Navbar />

      <Schedule />

      <Social />

      <Footer />

      {/* Whatsapp */}
      <WhatsApp />

      {/* Message */}
      <Message />

      {/* sidebar */}
      <SidebarContact />

      <ScrollToTop />
    </Fragment>
  );
}

export default App;
