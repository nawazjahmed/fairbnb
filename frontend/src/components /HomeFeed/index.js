import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import './HomeFeed.css';

function HomeFeed() {
  const allStories = useSelector((state) => state.stories);
  const storiesArr = Object.values(allStories);

  if (storiesArr.length) {
    return (
      <>
        <ul>
          {storiesArr.map((story) => {
            let d = new Date(story.createdAt);
            let dateWritten = d.toString().slice(4, 10);
            return (
              <li key={story.id} className='feed-list'>
                <NavLink className='story-link' to={`/stories/${story.id}`}>
                <div className='neumorphic-card mx-auto'>
                  <div className='neumorphic-card__outer'>
                      {/* <h2 className='title'>{story.title}</h2> */}
                      <img class='neumorphic-image' src={story.imageUrl} alt='story' />
                      <p className="neumorphic-card__title">{story.city.slice(0,-5)}</p>
                      <div className="propertyTypeAndPriceLine">
                        <p className='neumorphic-card__text'>{story.propertyType}</p>
                        <p className="neumorphic-card__text">${(story.price) === 0 ? (story.price) + 1 : (story.price)} / night</p>
                      </div>
                      {/* <p className='user-name'>{story.User.name}</p> */}
                    {/* <p className="date-written">{dateWritten}</p> */}
                  </div>
                  <div>
                      {/* <img class='neumorphic-image' src={story.imageUrl} alt='story' /> */}
                 </div>
                </div>
                  </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return null;
  }
}

export default HomeFeed;
