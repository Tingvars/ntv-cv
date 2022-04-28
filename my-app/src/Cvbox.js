import './App.css';

const Cvbox = ({cvObject}) => {
const { cvBoxTitle, cvBoxSubtitle, cvBoxText} = cvObject;
    return (
        <div class="cv-box">
        <div class="cv-box-title">{cvBoxTitle}</div>
        <div class="cv-box-subtitle">{cvBoxSubtitle}</div>
        <div class="cv-box-text">{cvBoxText}</div>
        </div>
    );
};

export default Cvbox;