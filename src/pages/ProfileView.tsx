import React, { useContext } from 'react';
import AppContext from 'utils/AppContext';
import { Poem } from 'components/Profile';
import song from 'utils/songsConverter';
import { GalleryTile } from 'components/GalleryTile';
import { AiOutlineReload } from 'react-icons/ai';

import './profileView.css';
import { UserTile } from 'components/ProfileView';

const ProfileView = () => {
  const { appState, appDispatch } = useContext(AppContext);

  let playSong = () => {
    var audio = new Audio('/assets/mp3/song1.mp3');
    audio.play();
  };

  return (
    <div className="profileView">
      <div className="profilePicture">
        <UserTile user={appState.currentUser!} />
        <div style={{ margin: '10px 0' }}>
          <audio controls autoPlay>
            <source src={song(appState.currentUser != null ? appState.currentUser?.song : '')} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="poem">
        <Poem />
      </div>
    </div>
  );
};

export default ProfileView;
