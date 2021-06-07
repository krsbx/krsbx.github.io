import React, { useEffect, useState } from 'react';
import profile from '../Pictures/profile.jpg';
import { database } from '../Firebase/FirebaseSDK';
import Experiences from './Experiences';

export default function CVInfo() {
  const [skills, setSkills] = useState([]);
  const [development, setDevelopment] = useState({});

  const GetSkills = async () => {
    const SkillsRef = database.ref('Skills');
    const SkillsSnap = await SkillsRef.once('value');

    if (SkillsSnap.exists()) {
      const result = SkillsSnap.val();
      const temp = Object.keys(result).map((k, id) => {
        return {
          skillName: k,
          skillPercent: result[k],
        };
      });
      setSkills(temp);
    }
  };

  const SkillList = () => {
    return skills.map((m) => {
      return (
        <div className="skill-wrapper" key={m.skillName}>
          <div className="skill-name">{m.skillName}</div>
          <div className="skill-mastery">{m.skillPercent}</div>
        </div>
      );
    });
  };

  const GetDevelopment = async () => {
    const DevRef = database.ref('Development');
    const DevSnap = await DevRef.once('value');

    if (DevSnap.exists()) {
      const result = DevSnap.val();
      setDevelopment(result);
    }
  };

  useEffect(() => {
    GetSkills();
    GetDevelopment();
  }, []);

  return (
    <>
      <div className="CV">
        <div>
          <div className="profile-card">
            <div className="profile-pict">
              <img src={profile} alt="Profile Pictures" />
            </div>
            <div className="profile-text">
              <div className="profile-name">KRSBX</div>
              <div className="profile-desc">Game Developers</div>
            </div>
          </div>
          <div className="skill-sections">
            <div className="skill-header">Skills</div>
            {SkillList()}
          </div>
          <div className="dev-sections">
            <div className="project-year">
              <div className="dots" />
              <div className="year">{development['Year']}</div>
            </div>
            <div className="dev-details">
              <div className="company">{development['Company']}</div>
              <div className="projects">{development['Project']}</div>
              <div className="role">{development['Role']}</div>
            </div>
          </div>
        </div>
      </div>
      <Experiences />
    </>
  );
}
