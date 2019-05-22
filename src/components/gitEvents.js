import React from "react";
import { useState, useEffect } from 'react';

import { GitEventsContainer, GitEventTitle, GitEventTracker } from "../styles/gitevents.js";

const GitEvents = ({event}) => {
  const [events, setEvents] = useState([]);
  const [commitNumber, setCommitNumber] = useState(0);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await fetch(`https://stormy-reef-49194.herokuapp.com/githubData`);
    const data = await response.json();
    setEvents(data.recentGithubEvents.gitEvents[0].githubActivity);
  };

  const scrollActivity = (e) => {
    let direction = e.target.attributes.getNamedItem('direction').value;
    console.log(events.length);
    if(direction === 'left' && commitNumber > 0){
      console.log('left');
      setCommitNumber(commitNumber + 1);
      changeDial();
    }else if(direction === 'right' && commitNumber < events.length){
      console.log('right');
      setCommitNumber(commitNumber - 1);
      changeDial();
    }else{
      setCommitNumber(commitNumber);
    };
  };

  const changeDial = () => {
    const gitEventsContainer = document.querySelector('.gitEventsOverflow');
    const translateAmount = commitNumber * 100;
    console.log(translateAmount);
    gitEventsContainer.style.transform = `translate(calc(${translateAmount}% + 20px))`;
  };

  return (
    <>
      <GitEventTracker>
      <GitEventTitle>Recent Github Activity</GitEventTitle>
      <button onClick={scrollActivity} direction="left" className="gitEvents__scroll scroll--left"></button>
      <button onClick={scrollActivity} direction="right" className="gitEvents__scroll scroll--right"></button>
      <GitEventsContainer id="gitEventContainer">
        <div className="gitEventsOverflow">
          {events.map((event)=> {
            return (
              <div className="gitEvents__event" key={`key-${event.id}`}>
                <p>Activity Type: {event.type}</p>
                <p>Repository: {event.repo.name}</p>
                <p>Changes: {event.payload.size}</p>
                <p>Commits:</p>
                <div className="gitEvents__commitContainer">
                  {event.payload.commits && event.payload.commits.map((commit, i)=>{
                    return <p key={`eventCommit-${i}`}>{commit.message}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </GitEventsContainer>
      </GitEventTracker>
    </>
  );
}

export default GitEvents;