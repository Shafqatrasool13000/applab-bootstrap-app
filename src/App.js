import Features from './components/Features';
import AwesomeFeatures from './components/AwesomeFeatures';
import SmartJackpotFeatures from './components/SmartJackpotFeatures';
import WhyChooseFeatures from './components/WhyChooseFeatures';
import Companies from './components/Companies';
import DesignAndBuilt from './components/DesignAndBuilt';
import DownloadApp from './components/DownloadApp';
import Header from './components/Header';
import MeetClient from './components/MeetClient';
import Navbar from './components/Navbar';
import RiderEmergency from './components/RiderEmergency';
import SmartJackpot from './components/SmartJackpot';
import Subscription from './components/Subscription';
import UnlimitedFeature from './components/UnlimitedFeature';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';
import FAQ from './components/FAQ';


function App() {
  const bgImage = {
    backgroundImage: 'url("https://via.placeholder.com/500") ',
    height: "100vh",
  }
  return (
    <>
      <Navbar />
      <Header />
      <Companies />
      <Features />
      <SmartJackpot />
      <SmartJackpotFeatures />
      <DesignAndBuilt />
      <WhyChoose />
      <WhyChooseFeatures />
      <UnlimitedFeature />
      <AwesomeFeatures />
      <Subscription />
      <MeetClient />
      <FAQ />
      <RiderEmergency />
      <DownloadApp />
      <Footer />
    </>
  );
}

export default App;
