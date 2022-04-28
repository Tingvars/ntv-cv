import image from '../src/thraprofile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Image</div>
          <div class="header-title">Þóra Ingvarsdóttir - CV</div>
              <img src={image} class="header-image" alt="profile"/>
      </header>
      <div class="cv-item-container">
      <div class="cv-box">
        <div class="cv-box-title">Discover The World - Travel Specialist</div>
        <div class="cv-box-subtitle">2011-2017</div>
        <div class="cv-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum interdum eros, eu egestas metus mattis in. Fusce nec augue nibh. Aliquam est urna, congue a lorem nec, volutpat vulputate ligula. Mauris turpis orci, volutpat sit amet ante vel, cursus tristique velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam in odio volutpat, dignissim ligula sit amet, maximus quam. Nam egestas nulla eget sapien egestas porttitor. </div>
        </div>
      <div class="cv-box">
        <div class="cv-box-title">Freelance Translator (IS-EN / EN-IS)</div>
        <div class="cv-box-subtitle">2017-current</div>
        <div class="cv-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum interdum eros, eu egestas metus mattis in. Fusce nec augue nibh. Aliquam est urna, congue a lorem nec, volutpat vulputate ligula. Mauris turpis orci, volutpat sit amet ante vel, cursus tristique velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam in odio volutpat, dignissim ligula sit amet, maximus quam. Nam egestas nulla eget sapien egestas porttitor. </div>
        </div>
        <div class="cv-box">
        <div class="cv-box-title">Freelance Icelandic Tutor</div>
        <div class="cv-box-subtitle">2017-current</div>
        <div class="cv-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum interdum eros, eu egestas metus mattis in. Fusce nec augue nibh. Aliquam est urna, congue a lorem nec, volutpat vulputate ligula. Mauris turpis orci, volutpat sit amet ante vel, cursus tristique velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam in odio volutpat, dignissim ligula sit amet, maximus quam. Nam egestas nulla eget sapien egestas porttitor. </div>
        </div>
        <div class="cv-box">
        <div class="cv-box-title">Booking.com - Language Specialist (Icelandic)</div>
        <div class="cv-box-subtitle">2018-current</div>
        <div class="cv-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum interdum eros, eu egestas metus mattis in. Fusce nec augue nibh. Aliquam est urna, congue a lorem nec, volutpat vulputate ligula. Mauris turpis orci, volutpat sit amet ante vel, cursus tristique velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam in odio volutpat, dignissim ligula sit amet, maximus quam. Nam egestas nulla eget sapien egestas porttitor. </div>
        </div>
        </div>
    </div>
  );
}

export default App;
