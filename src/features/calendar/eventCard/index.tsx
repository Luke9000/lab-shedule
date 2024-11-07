import React from 'react';

interface EventCardProps {
  title: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, location }) => {
  return (
    <div className="event-card">
      <p>{title}</p>
      <small>{location}</small>
    </div>
  );
};

export default EventCard;