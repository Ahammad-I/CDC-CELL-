import React from 'react';

const MapComponent = () => {
  const props = {
    styles: {
      width: '100%',
      height: '70vh',
      margin: 'auto',
    },
  };

  return (
    <div style={props.styles}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.523608015352!2d73.11124481498841!3d26.47108088331973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea672337b%3A0xb6c9a5a9b08db22e!2sIndian%20Institute%20of%20Technology%2C%20Jodhpur!5e0!3m2!1sen!2sin!4v1627043752723!5m2!1sen!2sin"
        title="Indian Institute of Technology, Jodhpur"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      />
    </div>
  );
};

export default MapComponent;
