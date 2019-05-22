import React from "react";
import { useState, useEffect } from 'react';

import { GitEventsContainer, GitEventTitle, GitEventTracker } from "../styles/gitevents.js";

const GitEvents = ({event}) => {
  const [events, setEvents] = useState([]);
  const [commitNumber, setCommitNumber] = useState(1);

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(()=> {
    const gitEventsContainer = document.querySelector('.gitEventsOverflow');
    const translateAmount = commitNumber * 100;
    console.log(translateAmount, commitNumber);
    gitEventsContainer.style.transform = `translateX(calc(-${translateAmount}%))`;
  }, [commitNumber]);

  const getEvents = async () => {
    const response = await fetch(`https://stormy-reef-49194.herokuapp.com/githubData`);
    const data = await response.json();
    setEvents(data.recentGithubEvents.gitEvents[0].githubActivity);
  };

  const scrollActivity = async (e) => {
    if(e.target.attributes.getNamedItem('direction').value == 'left' && commitNumber > 0){
      setCommitNumber(commitNumber - 1);
    }else if(e.target.attributes.getNamedItem('direction').value == 'right' && commitNumber < (events.length - 1)){
      setCommitNumber(commitNumber + 1);
    }
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