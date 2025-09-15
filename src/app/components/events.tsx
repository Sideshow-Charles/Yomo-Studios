'use client';

import React from 'react';
import Image from 'next/image';
import { UPCOMING_EVENTS, RECENT_EVENTS, Event } from '../data/events';
import '../assets/styles/components/events.scss';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="event-card">
    <div className="event-card__image">
      <Image
        src={event.imageUrl}
        alt={event.title}
        layout="fill"
        objectFit="cover"
      />
      {event.category && <span className="event-card__category-tag">{event.category}</span>}
    </div>
    <div className="event-card__content">
      <h3>{event.title}</h3>
      {event.price && <p className="event-card__price">${event.price}</p>}
      <p>{event.description}</p>
      
      <ul className="event-card__details">
        <li><FaCalendarAlt /> {event.date}</li>
        {event.time && <li><FaClock /> {event.time}</li>}
        {event.location && <li><FaMapMarkerAlt /> {event.location}</li>}
        {event.spots && <li><FaUsers /> {event.spots} spots available</li>}
      </ul>
      
      {event.price && <button className="event-card__book-button">Book Workshop</button>}
    </div>
  </div>
);

const Events: React.FC = () => {
  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2>Events & Workshops</h2>
          <p>Join our hands-on workshops and learn from experienced artisans. All skill levels welcome!</p>
        </div>
        
        <h2 className="events-title">Upcoming Workshops</h2>
        <div className="events-grid">
          {UPCOMING_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <h2 className="events-title">Recent Events</h2>
        <div className="events-grid">
          {RECENT_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;