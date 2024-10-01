// // src/components/KanbanBoard.js
// import React, { useState, useEffect } from 'react';
// import { getTickets } from '../services/api';
// import TicketCard from './TicketCard';
// import DisplayButton from './DisplayButton';
// import '../styles/kanban.css';

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [grouping, setGrouping] = useState('status'); // Default grouping by status
//   const [sortOption, setSortOption] = useState('priority'); // Default sort by priority

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTickets();
//       setTickets(data.tickets);
//     };

//     fetchData();
//   }, []);

//   const getGroupedTickets = () => {
//     let groupedTickets = {};
//     if (grouping === 'status') {
//       groupedTickets = tickets.reduce((acc, ticket) => {
//         if (!acc[ticket.status]) acc[ticket.status] = [];
//         acc[ticket.status].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'user') {
//       groupedTickets = tickets.reduce((acc, ticket) => {
//         if (!acc[ticket.userId]) acc[ticket.userId] = [];
//         acc[ticket.userId].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'priority') {
//       groupedTickets = tickets.reduce((acc, ticket) => {
//         if (!acc[ticket.priority]) acc[ticket.priority] = [];
//         acc[ticket.priority].push(ticket);
//         return acc;
//       }, {});
//     }

//     // Sort the tickets within each group
//     Object.keys(groupedTickets).forEach((group) => {
//       groupedTickets[group].sort((a, b) => {
//         if (sortOption === 'priority') return b.priority - a.priority;
//         if (sortOption === 'title') return a.title.localeCompare(b.title);
//         return 0;
//       });
//     });

//     return groupedTickets;
//   };

//   const groupedTickets = getGroupedTickets();

//   return (
//     <div className="kanban-container">
//       <DisplayButton grouping={grouping} setGrouping={setGrouping} setSortOption={setSortOption} />
//       <div className="kanban-board">
//         {Object.keys(groupedTickets).map((group) => (
//           <div key={group} className="kanban-column">
//             <h2>{group}</h2>
//             {groupedTickets[group].map((ticket) => (
//               <TicketCard key={ticket.id} ticket={ticket} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanBoard;

//2nd final
// import React, { useState, useEffect } from 'react';
// import { getTickets } from '../services/api';
// import TicketCard from './TicketCard';
// import DisplayButton from './DisplayButton';
// import '../styles/kanban.css';

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [grouping, setGrouping] = useState('status'); // Default grouping by status
//   const [sortOption, setSortOption] = useState('priority'); // Default sort by priority

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTickets();
//       setTickets(data.tickets);
//     };

//     fetchData();
//   }, []);

//   const getGroupedTickets = () => {
//     let groupedTickets = {};
//     if (grouping === 'status') {
//       groupedTickets = tickets.reduce((acc, ticket) => {
//         if (!acc[ticket.status]) acc[ticket.status] = [];
//         acc[ticket.status].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'user') {
//       groupedTickets = tickets.reduce((acc, ticket) => {
//         if (!acc[ticket.userId]) acc[ticket.userId] = [];
//         acc[ticket.userId].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'priority') {
//       groupedTickets = tickets.reduce((acc, ticket) => {
//         if (!acc[ticket.priority]) acc[ticket.priority] = [];
//         acc[ticket.priority].push(ticket);
//         return acc;
//       }, {});
//     }

//     // Sort the tickets within each group
//     Object.keys(groupedTickets).forEach((group) => {
//       groupedTickets[group].sort((a, b) => {
//         if (sortOption === 'priority') return b.priority - a.priority;
//         if (sortOption === 'title') return a.title.localeCompare(b.title);
//         return 0;
//       });
//     });

//     return groupedTickets;
//   };

//   const groupedTickets = getGroupedTickets();

//   // Get counts for display
//   const getStatusCounts = () => {
//     const statusCounts = tickets.reduce((acc, ticket) => {
//       acc[ticket.status] = (acc[ticket.status] || 0) + 1;
//       return acc;
//     }, {});
//     return statusCounts;
//   };

//   const getPriorityCounts = () => {
//     const priorityCounts = tickets.reduce((acc, ticket) => {
//       acc[ticket.priority] = (acc[ticket.priority] || 0) + 1;
//       return acc;
//     }, {});
//     return priorityCounts;
//   };

//   const statusCounts = getStatusCounts();
//   const priorityCounts = getPriorityCounts();


//   // return (
//   //   <div className="kanban-container">
//   //     <DisplayButton grouping={grouping} setGrouping={setGrouping} setSortOption={setSortOption} />

//   //     {/* Display status counts */}
//   //     <div className="status-counts">
//   //       <h3>Status Counts:</h3>
//   //       <ul>
//   //         {Object.keys(statusCounts).map((status) => (
//   //           <li key={status}>
//   //             {status}: {statusCounts[status]}
//   //           </li>
//   //         ))}
//   //       </ul>
//   //     </div>

//   //     {/* Display priority counts */}
//   //     <div className="priority-counts">
//   //       <h3>Priority Counts:</h3>
//   //       <ul>
//   //         {Object.keys(priorityCounts).map((priority) => (
//   //           <li key={priority}>
//   //             {priority}: {priorityCounts[priority]}
//   //           </li>
//   //         ))}
//   //       </ul>
//   //     </div>

//   //     <div className="kanban-board">
//   //       {Object.keys(groupedTickets).map((group) => (
//   //         <div key={group} className="kanban-column">
//   //           <h2>{group}</h2>
//   //           {groupedTickets[group].map((ticket) => (
//   //             <TicketCard key={ticket.id} ticket={ticket} />
//   //           ))}
//   //         </div>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );

//   // Inside KanbanBoard.js

// const getCounts = (groupName, tickets) => {
//   return tickets.length > 0 ? ` (${tickets.length})` : ' (0)';
// };

// return (
//   <div className="kanban-container">
//     <DisplayButton grouping={grouping} setGrouping={setGrouping} setSortOption={setSortOption} />
//     <div className="kanban-board">
//       {Object.keys(groupedTickets).map((group) => (
//         <div key={group} className="kanban-column">
//           <h2>{group}{getCounts(group, groupedTickets[group])}</h2>
//           {groupedTickets[group].map((ticket) => (
//             <TicketCard key={ticket.id} ticket={ticket} />
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// };


// export default KanbanBoard;



//finalllllllllllll
import React, { useState, useEffect } from 'react';
import { getTickets } from '../services/api';
import TicketCard from './TicketCard';
import DisplayButton from './DisplayButton';
import '../styles/kanban.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTickets();
      setTickets(data.tickets);
    };

    fetchData();
  }, []);

  const getGroupedTickets = () => {
    let groupedTickets = {};
    if (grouping === 'status') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        if (!acc[ticket.status]) acc[ticket.status] = [];
        acc[ticket.status].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        if (!acc[ticket.userId]) acc[ticket.userId] = [];
        acc[ticket.userId].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        if (!acc[ticket.priority]) acc[ticket.priority] = [];
        acc[ticket.priority].push(ticket);
        return acc;
      }, {});
    }

    // Sorting within groups
    Object.keys(groupedTickets).forEach((group) => {
      groupedTickets[group].sort((a, b) => {
        if (sortOption === 'priority') return b.priority - a.priority;
        if (sortOption === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
    });

    return groupedTickets;
  };

  const groupedTickets = getGroupedTickets();

  return (
    <div className="kanban-container">
      <DisplayButton grouping={grouping} setGrouping={setGrouping} setSortOption={setSortOption} />
      <div className="kanban-board">
        {Object.keys(groupedTickets).map((group) => (
          <div key={group} className="kanban-column">
            <h2>{group}</h2>
            {groupedTickets[group].map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
