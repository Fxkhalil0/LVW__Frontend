import React, { useEffect } from 'react';

function WonderChat() {
  useEffect(() => {
    // Add the Wonderchat script dynamically to your website
    const script = document.createElement('script');
    script.src = "https://app.wonderchat.io/scripts/wonderchat.js";
    script.dataset.name = 'wonderchat';
    script.dataset.address = 'app.wonderchat.io';
    script.dataset.id = 'cllo4b1c6006jo021jmcas7t3';
    script.dataset.widgetSize = 'normal'; // Change the attribute name to widgetSize
    script.defer = true;

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="wonderchat-container"></div>;
}

export default WonderChat;
