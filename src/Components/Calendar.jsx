import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [event, setEvent] = useState(null);

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const generateWeek = () => {
    const start = new Date(currentDate);
    start.setDate(currentDate.getDate() - start.getDay() + 1);

    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  };

  const weekDates = generateWeek();

  // ✅ Fetch event from API
  useEffect(() => {
    axios
      .get("http://localhost:4000/events")
      .then((res) => setEvent(res.data[0]))
      .catch((err) => console.error(err));
  }, []);

  const prevMonth = () =>
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));

  const nextMonth = () =>
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));

  return (
    <div className="card calendar">
      {/* Header */}
      <div className="calendar-header">
        <h4>
          {month} {year}
        </h4>

        <div className="calendar-nav">
          <button onClick={prevMonth}>
            <ChevronLeft />
          </button>
          <button onClick={nextMonth}>
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Days */}
      <div className="calendar-days">
        {weekDates.map((date, index) => {
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <div key={index} className={`day ${isToday ? "active" : ""}`}>
              <span>{daysOfWeek[index]}</span>
              <div className="date">{date.getDate()}</div>
            </div>
          );
        })}
      </div>

      {/* Event */}
      {event && (
        <div className="calendar-event">
          <div className="event-left">
            <div className="event-icon">👥</div>
            <div className="event-info">
              <h5>{event.title}</h5>
              <p>
                {event.start.slice(11, 16)} - {event.end.slice(11, 16)}
                <span className="dot"></span> {event.category}
              </p>
            </div>
          </div>

          <div className="event-more">
            <EllipsisVertical />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
