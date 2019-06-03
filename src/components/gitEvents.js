import React from "react";
import { useState, useEffect } from 'react';

import { GitEventsContainer, GitEventTitle, GitEventTracker } from "../styles/gitevents.js";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add( faChevronLeft, faChevronRight);

const GitEvents = ({event}) => {
  const [events, setEvents] = useState([]);
  const [commitNumber, setCommitNumber] = useState(0);

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(()=> {
    const gitEventsContainer = document.querySelector('.gitEventsOverflow');
    const translateAmount = commitNumber * 100;
    gitEventsContainer.style.transform = `translateX(calc(-${translateAmount}%))`;
    let allBubbles = document.querySelectorAll('.gitEvents__progressTracker button');
    if(allBubbles.length > 0){
      allBubbles.forEach(bubble => bubble.classList.remove('selected'));
      allBubbles[commitNumber].classList.add('selected');
    };
  }, [commitNumber]);

  const getEvents = async () => {
    const response = await fetch(`https://stormy-reef-49194.herokuapp.com/githubData`);
    const data = await response.json();
    console.log(data);
    setEvents(data.recentGithubEvents.gitEvents[0].githubActivity);
  };

  useEffect(()=> {
    const progress = document.querySelector('.gitEvents__progressTracker');
    events.forEach((event, i)=>{
      let bubble = document.createElement('button');
      progress.appendChild(bubble);
      if(i === 0){bubble.classList.add('selected')};
      bubble.addEventListener('click', (e)=>{
        setCommitNumber(i);
      });
    });

  }, [events]);

  const scrollActivity = (e) => {
    if(e.currentTarget.attributes.getNamedItem('direction').value === 'left' && commitNumber > 0){
      setCommitNumber(commitNumber - 1);
    }else if(e.currentTarget.attributes.getNamedItem('direction').value === 'right' && commitNumber < (events.length - 1)){
      setCommitNumber(commitNumber + 1);
    }
  };

  return (
    <>
      <GitEventTracker>
      <GitEventTitle>Recent Github Activity</GitEventTitle>
      <button onClick={scrollActivity} direction="left" className="gitEvents__scroll scroll--left"><div className="gitEvents__scrollBarCover"></div><FontAwesomeIcon icon='chevron-left'/></button>
      <button onClick={scrollActivity} direction="right" className="gitEvents__scroll scroll--right"><div className="gitEvents__scrollBarCover"></div><FontAwesomeIcon icon='chevron-right'/></button>
      <GitEventsContainer id="gitEventContainer">
        <div className="gitEventsOverflow">
          {events.map((event)=> {
            return (
              <div className="gitEvents__event" key={`key-${event.id}`}>
                <p><span className="gitEvents__catTitle">Activity Type:</span> {event.type}</p>
                <p><span className="gitEvents__catTitle">Repository:</span> {event.repo.name}</p>
                <p className="gitEvents__commitTitle"><span className="gitEvents__catTitle gitEvents__commitTitle">Commits:</span></p>
                <div className="gitEvents__commitContainer">
                  {event.payload.commits && event.payload.commits.map((commit, i)=>{
                    return <p key={`eventCommit-${i}`}><span>-</span>{commit.message}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </GitEventsContainer>
      <div className="gitEvents__progressTracker"></div>
      </GitEventTracker>
    </>
  );
}

export default GitEvents;