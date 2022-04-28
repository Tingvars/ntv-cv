import image from '../src/thraprofile.jpg';
import './App.css';
import Cvbox from './Cvbox';

const DATA = [
  {cvBoxTitle: "Discover The World - Nordic Travel Specialist",
  cvBoxSubtitle: "2011-2017",
  cvBoxText: "I researched holiday destinations, arranged itineraries, liaised with suppliers, and marketed and sold tailored holidays."},
  {cvBoxTitle: "Freelance Translator (IS-EN / EN-IS)",
  cvBoxSubtitle: "2017-current",
  cvBoxText: "I take on various translation projects from diverse clients, provide them with translations according to their needs and invoice them."},
  {cvBoxTitle: "Freelance Icelandic Tutor",
  cvBoxSubtitle: "2017-current",
  cvBoxText: "I take on students for private Icelandic tutoring sessions, teaching through conversation, reading and my own teaching materials."},
  {cvBoxTitle: "Booking.com - Language Specialist (Icelandic)",
  cvBoxSubtitle: "2018-current",
  cvBoxText: "I manage translations into Icelandic and language quality for Booking.com's Icelandic copy."},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="eveningdiv"></div>
          <div class="header-title">Þóra Ingvarsdóttir - CV</div>
              <img src={image} class="header-image" alt="profile"/>
      </header>
      <div class="cv-item-container">
        {DATA.map((data) => {
          return <Cvbox cvObject={data}/>;
        })
        }
      
        </div>
    </div>
  );
}

export default App;
