import React, { useEffect, useState } from 'react';
import { database } from '../Firebase/FirebaseSDK';

export default function Experiences() {
  const [devHistory, setDevHistory] = useState([]);
  const [year, setYear] = useState(2018);

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
    return devHistory
      .filter((d) => {
        if (parseInt(d['Year']) === year) {
          return d;
        } else {
          return null;
        }
      })
      .filter((d) => {
        return d != null;
      })
      .map((d) => {
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

  useEffect(() => {
    setTimeout(() => {
      if (parseInt(year) === 2021) {
        setYear(2018);
      } else {
        setYear(year + 1);
      }
    }, 5000);
  });

  const prevYear = () => {
    if (parseInt(year) === 2018) {
      setYear(2021);
    } else {
      setYear(year - 1);
    }
  };

  const nextYear = () => {
    if (parseInt(year) === 2021) {
      setYear(2018);
    } else {
      setYear(year + 1);
    }
  };

  return (
    <div className="CV dev-wrapper">
      <div className="left-arrow" onClick={() => prevYear()}></div>
      <div className="dev-container">{HistoryList()}</div>
      <div className="right-arrow" onClick={() => nextYear()}></div>
    </div>
  );
}
