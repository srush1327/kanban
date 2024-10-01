// // src/components/TicketCard.js
// import React from 'react';

// const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

// const TicketCard = ({ ticket }) => {
//   return (
//     <div className="ticket-card">
//       <h3>{ticket.title}</h3>
//       <p>Status: {ticket.status}</p>
//       <p>User: {ticket.userId}</p>
//       <p>Priority: {priorityLabels[ticket.priority]}</p>
//     </div>
//   );
// };

// export default TicketCard;


// TicketCard.js
// TicketCard.js
import React from 'react';
import '../styles/ticketCard.css';

// Define a mapping of priority values to labels
const priorityLabels = {
  1: 'Urgent',
  2: 'High',
  3: 'Medium',
  4: 'Low',
};

const TicketCard = ({ ticket }) => {
  const priorityLabel = priorityLabels[ticket.priority] || 'Unknown'; // Get the label based on the priority value
  return (
    <div className="ticket-card">
      <div className="ticket-title">{ticket.title}</div>
      <div className={`ticket-priority ${priorityLabel.toLowerCase()}`}>
        {priorityLabel}
      </div>
    </div>
  );
};

export default TicketCard;
