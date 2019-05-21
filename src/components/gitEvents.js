import React from "react";
import { useState, useEffect } from 'react';

import { GitEventsContainer } from "../styles/gitevents.js";

const GitEvents = ({event}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await fetch(`https://stormy-reef-49194.herokuapp.com/githubData`);
    const data = await response.json();
    setEvents(data.recentGithubEvents.gitEvents[0].githubActivity);
  };

  const listCommits = (commits) => {
    if(commits){
      commits.map((commit) => {
        console.log(commit.message);
        return <p>{commit.message}</p>;
      })
    }else{
      return <div>no commits</div>;
    }

  };

  return (
    <>
      <GitEventsContainer>
        {events.map((event)=> {
          return (
            <div className="gitEvents__event" key={`key-${event.id}`}>
              <p>Activity Type: {event.type}</p>
              <p>Repository: {event.repo.name}</p>
              <p>Changes: {event.payload.size}</p>
              <div><p>Commits:</p></div>
              {listCommits(event.payload.commits)}
            </div>
          )
        })}
      </GitEventsContainer>
    </>
  );
}

export default GitEvents;