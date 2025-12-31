const Calendar = () => {
  return (
    <div className="card calendar">
      {/* Header */}
      <div className="calendar-header">
        <h4>September 2024</h4>

        <div className="calendar-nav">
          <button>‹</button>
          <button>›</button>
        </div>
      </div>

      {/* Days */}
      <div className="calendar-days">
        <div className="day">
          <span>Mon</span>
          <div className="date">12</div>
        </div>
        <div className="day">
          <span>Tue</span>
          <div className="date">13</div>
        </div>
        <div className="day active">
          <span>Wed</span>
          <div className="date">15</div>
        </div>
        <div className="day">
          <span>Thu</span>
          <div className="date">16</div>
        </div>
        <div className="day">
          <span>Fri</span>
          <div className="date">17</div>
        </div>
        <div className="day">
          <span>Sat</span>
          <div className="date">18</div>
        </div>
        <div className="day">
          <span>Sun</span>
          <div className="date">19</div>
        </div>
      </div>

      {/* Event */}
      <div className="calendar-event">
        <div className="event-left">
          <div className="event-icon">👥</div>
          <div className="event-info">
            <h5>Team Meeting</h5>
            <p>
              12:00 - 01:30 <span className="dot"></span> Motion Design
            </p>
          </div>
        </div>

        <div className="event-more">⋮</div>
      </div>
    </div>
  );
};

export default Calendar;
