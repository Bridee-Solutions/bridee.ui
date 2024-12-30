'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from "./ContinuousCalendar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from '@fortawesome/free-regular-svg-icons';

const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'];
const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


export const ContinuousCalendar = ({ onClick, acceptedProposals, year, setYear}) => {
  const today = new Date();
  const dayRefs = useRef([]);
  const calendarRef = useRef(null);
  const eventPopUp = useRef();
  const [calendar, setCalendar] = useState();

  const [selectedMonth, setSelectedMonth] = useState(0);
  const monthOptions = monthNames.map((month, index) => ({ name: month, value: `${index}` }));
  useEffect(() => {handleTodayClick()}, []);

  const scrollToDay = (monthIndex, dayIndex) => {
    const targetDayIndex = dayRefs.current.findIndex(
      (ref) =>
        ref &&
        ref.getAttribute('data-month') === `${monthIndex}` &&
        ref.getAttribute('data-day') === `${dayIndex}`,
    );
  
    const targetElement = dayRefs.current[targetDayIndex];
  
    if (targetDayIndex !== -1 && targetElement) {
      console.log(calendarRef.current); // Verifica se o valor está correto
      const elementRect = targetElement.getBoundingClientRect();
      const is2xl = window.matchMedia('(min-width: 1536px)').matches;
      const offsetFactor = is2xl ? 3 : 2.5;
  
      if (calendarRef.current) { // Corrigido para acessar `current`
        const containerRect = calendarRef.current.getBoundingClientRect();
        const offset =
          elementRect.top -
          containerRect.top -
          containerRect.height / offsetFactor +
          elementRect.height / 2;
  
        calendarRef.current.scrollTo({
          top: calendarRef.current.scrollTop + offset,
          behavior: 'smooth',
        });
      } else {
        const offset =
          window.scrollY +
          elementRect.top -
          window.innerHeight / offsetFactor +
          elementRect.height / 2;
  
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
    }
  };

  const handlePrevYear = () => {
    setYear((prevYear) => prevYear - 1)
  };
  const handleNextYear = () => {
    setYear((prevYear) => prevYear + 1)
  };

  const handleMonthChange = (event) => {
    const monthIndex = parseInt(event.target.value, 10);
    setSelectedMonth(monthIndex);
    scrollToDay(monthIndex, 1);
  };

  const handleTodayClick = () => {
    setYear(today.getFullYear());
    scrollToDay(today.getMonth(), today.getDate());
  };

  const handleDayClick = (day, month, year) => {
    if (!onClick) { return; }
    if (month < 0) {
      onClick(day, 11, year - 1);
    } else {
      onClick(day, month, year);
    }
  }

  useEffect(() => {
    const today = new Date();

    const daysInYear = () => {
      const daysInYear = [];
      const startDayOfWeek = new Date(year, 0, 1).getDay();

      if (startDayOfWeek < 6) {
        for (let i = 0; i < startDayOfWeek; i++) {
          daysInYear.push({ month: -1, day: 32 - startDayOfWeek + i });
        }
      }

      for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
          daysInYear.push({ month, day });
        }
      }

      const lastWeekDayCount = daysInYear.length % 7;
      if (lastWeekDayCount > 0) {
        const extraDaysNeeded = 7 - lastWeekDayCount;
        for (let day = 1; day <= extraDaysNeeded; day++) {
          daysInYear.push({ month: 0, day });
        }
      }
    
      return daysInYear;
    };

    const openPopUp = () => {
      eventPopUp.current.style.display = "block"
    }

    const closePopUp = () => {
      eventPopUp.current.style.display = "none";
    }

    const calendarDays = daysInYear();

    const calendarWeeks = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      calendarWeeks.push(calendarDays.slice(i, i + 7));
    }

    const isEventPresent = (month, day, proposal) => {
      const proposalDate = new Date(proposal?.dataFim)
      const proposalMonth = proposalDate.getMonth();
      const proposalDay = proposalDate.getDate();
      const proposalYear = proposalDate.getFullYear()
      
      if(month == proposalMonth && day == proposalDay + 1 && proposalYear == year){
        return true;
      }
      
      return false;
    }

    const calendar = calendarWeeks.map((week, weekIndex) => (
      <div className={`${styles.week}`} key={`week-${weekIndex}`}>
        {week.map(({ month, day }, dayIndex) => {
          const index = weekIndex * 7 + dayIndex;
          const isNewMonth = index === 0 || calendarDays[index - 1].month !== month;
          const isToday = today.getMonth() === month && today.getDate() === day && today.getFullYear() === year;

          return (
            <div
              key={`${month}-${day}`}
              ref={(el) => { dayRefs.current[index] = el; }}
              data-month={month}
              data-day={day}
              onClick={() => handleDayClick(day, month, year)}
              className={`
                ${styles.daySquare}
                ${isToday ? styles.today : ""} 
              `}
            >
              <span className={`
                  ${styles.day}
                  ${month < 0 ? styles.currentMonthDay : styles.otherMonthDay}
                `}>
                {day}
              </span>
              {isNewMonth && (
                <span className={styles.monthName}>
                  {monthNames[month]}
                </span>
              )}
              <div> 
              {acceptedProposals?.map((proposal) => (
                isEventPresent(month, day, proposal) && 
                <div>
                    <div key={proposal.id} className={styles.wedding} onMouseEnter={openPopUp} onMouseOut={closePopUp}>
                      {proposal.nome}
                    </div>
                    <div className={styles.eventModal} ref={eventPopUp}>
                      <div className={styles.eventoModalHeader}>Casamento</div>
                      <div className={styles.eventoModalName}>
                        {proposal?.nome}
                      </div>
                      <div className={styles.eventoModalDate}>
                         <FontAwesomeIcon icon={faClock} className={styles.eventoModalDateIcon}/>
                         <span>
                          {daysOfWeek[new Date(proposal?.dataFim).getDay() + 1]}, {new Date(proposal?.dataFim).toLocaleString("pt-br").split(",")[0]}
                          </span>
                      </div>
                      <div className={styles.eventoModalDate}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.eventoModalDateIcon}/>
                        <span>
                        {proposal?.local ? proposal.local : "A definir"}
                        </span>
                      </div>
                    </div>
                </div>
              ))}
              </div>
            </div>
          );
        })}
      </div>
    ));

    setCalendar(calendar);
  }, [acceptedProposals]);

  useEffect(() => {
    const calendarContainer = calendarRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const month = parseInt(entry.target.getAttribute('data-month'), 10);
            setSelectedMonth(month);
          }
        });
      },
      {
        root: calendarContainer,
        rootMargin: '-75% 0px -25% 0px',
        threshold: 0,
      },
    );

    dayRefs.current.forEach((ref) => {
      if (ref && ref.getAttribute('data-day') === '15') {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.customCalendar} ref={calendarRef}>
  <div className={styles.headerContainerCalendar}>
    <div className={styles.containerHUD}>
        <div className={styles.containerMounth}>
            <Select name="selectMonth" value={`${selectedMonth}`} className={styles.selectMounth} options={monthOptions} onChange={handleMonthChange} />
        </div>
          <div className={styles.controllerYear}>
            <button
              onClick={handlePrevYear}
              className={styles.buttonYearControl}
            >
              <svg className={styles.arrow} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
              </svg>
            </button>
            <h1 className={styles.textYear}>{year}</h1>
            <button
              onClick={handleNextYear}
              className={styles.buttonYearControl}
            >
              <svg className={styles.arrow} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.daysOfTheWeek}>
          {daysOfWeek.map((day, index) => (
            <div key={index} className={styles.dayOfTheWeek}>
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.generateCalendar}>
        {calendar}
      </div>
    </div>
  );
};

export const Select = ({ name, value, options = [], onChange, className }) => {
  const handleSelectClick = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do label
    const selectElement = e.currentTarget.querySelector('select');
    if (selectElement) {
      selectElement.click(); // Simula o clique no select
    }
  };

  return (
    <label htmlFor={name} className={className} onClick={handleSelectClick}>
      <FontAwesomeIcon icon={faCalendar} />
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};
