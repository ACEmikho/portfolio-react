import React from 'react'
import './Hero.css'
import profile1 from '../../assets/profile1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const handleDownloadResume = async () => {
    alert("Opening Google Drive & Click Download");
    try {
  
      const downloadUrl = "https://drive.google.com/file/d/1yXMJWdi3Ne1L8LFtvzpU7KfZm5zEeLiI/view?usp=sharing";

      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl; 
      downloadLink.download = "resume.pdf";
      downloadLink.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again later.");
    }
  };

  return (
    <div id='home' className='hero'>
      <img src={profile1} alt="" />
      <h1>I'm <span data-text="John Kim Lovino,">John Kim Lovino</span>, frontend developer based in Philippines.</h1>
      <p>I am currently in my third year of studying for a Bachelor of Science degree in Computer Science @BISU - Balilihan Campus.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownloadResume}>
          My resume
        </div>
      </div>
    </div>
  )
}

export default Hero
