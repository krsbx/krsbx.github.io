import React from 'react';
import profile from '../Pictures/profile.jpg';
import SocialMedia from '../Social Media/SocialMedia';
import '../Styles/Profile.css';

export default function Profile() {
  return (
    <div className="Profile">
      <div className="inner-width">
        <div className="profile-card">
          <div id="card-header">
            <div className="profile-pict">
              <img src={profile} alt="Profile Pictures" />
            </div>
            <div id="profile-name">KRSBX</div>
            <div id="profile-desc">Game Developers</div>
          </div>
          <div id="card-footer">
            <div className="contact-me">Contact Me</div>
            <SocialMedia type="socials" />
          </div>
        </div>
      </div>
    </div>
  );
}
