// hooks/useYouTubeAPI.js
import { useState, useEffect } from 'react';

let isScriptLoaded = false;
let ytReadyPromise = null;

export const useYouTubeAPI = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setReady(true);
      return;
    }

    if (!isScriptLoaded) {
      ytReadyPromise = new Promise((resolve) => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
          isScriptLoaded = true;
          resolve(window.YT);
        };
      });
    }

    ytReadyPromise.then(() => {
      setReady(true);
    });
  }, []);

  return ready;
};
