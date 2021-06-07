import React, { useEffect, useState } from 'react';
import { database } from '../Firebase/FirebaseSDK';

export default function Experiences() {
  const [devHistory, setDevHistory] = useState([]);

  const GetHistory = async () => {
    const HistoryRef = database.ref('History');
    const HistorySnap = await HistoryRef.once('value');

    const tempHist = [];

    if (HistorySnap.exists()) {
      const temp = HistorySnap.val();
      Object.keys(temp).map((h) => {
        Object.keys(temp[h]).map((r) => {
          let result = temp[h][r];
          result['Year'] = h;

          tempHist.push(result);

          return null;
        });

        return null;
      });

      setDevHistory(tempHist);
    }
  };

  const HistoryList = () => {
    console.log(devHistory);

    return devHistory.map((d) => {
      return (
        <div className="dev-history" key={d['Project']}>
          <div className="project-year">
            <div className="dots" />
            <div className="year">{d['Year']}</div>
          </div>
          <div className="dev-details">
            <div className="company">{d['Company']}</div>
            <div className="projects">{d['Project']}</div>
            <div className="role">{d['Role']}</div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    GetHistory();
  }, []);

  return <div className="dev-wrapper">{HistoryList()}</div>;
}
