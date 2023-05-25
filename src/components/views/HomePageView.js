

import { Link } from 'react-router-dom';
import './../../style.css';
import './../../menu.css';
import { changeNextMonth, changePrevMonth, curMonth, dayIncluded } from '../../calendar';
import CalendarDates from "calendar-dates";
import { createTable } from '../../table';
import { Week } from '../elements/week';
// import './../../index';

import { Async } from 'react-async';

const setCalendar = async () =>{
  let calendarDates = new CalendarDates();
  let includedDates = await calendarDates.getMatrix(new Date());
  return(
    <div className="calendar">
        <header>

          <h2>{curMonth()}</h2>

          <button className="btn-prev fontawesome-angle-left" onClick={changePrevMonth}></button>
          <button className="btn-next fontawesome-angle-right" onClick={changeNextMonth}></button>

        </header>

        <table>

          <thead>

            <tr className="dow">

              <td>Su</td>
              <td>Mo</td>
              <td>Tu</td>
              <td>We</td>
              <td>Th</td>
              <td>Fr</td>
              <td>Sa</td>

            </tr>

          </thead>

          <tbody>
            {/* {
              //creates a array of tr elements 
            includedDates.map(e => (
              <Week week = {e}/>
            ))
            } */}
          </tbody>

        </table>
      </div>
  )
}

const HomePageView = () => {
  return (
    <div className="grid_container">
      <h1 id="header">CALENDAR</h1>
      <form id="app-cover">
        <div id="select-box">
          <input type="checkbox" id="options-view-button"></input>
          <div id="select-button" className="brd">
            <div id="selected-value">
              <span>Select a platform</span>
            </div>
            <div id="chevrons">
              <i className="fas fa-chevron-up"></i>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div id="options">
            <div className="option">
              <input className="s-c top" type="radio" name="platform" value="yearly"></input>
              <input className="s-c bottom" type="radio" name="platform" value="yearly"></input>
              <i className="fa-regular fa-calendar" style={{color: "#f15025"}}></i>
              <span className="label">Yearly</span>
              <span className="opt-val">Yearly</span>
            </div>
            <div className="option">
              <input className="s-c top" type="radio" name="platform" value="monthly"></input>
              <input className="s-c bottom" type="radio" name="platform" value="monthly"></input>
              <i className="fa-regular fa-calendar" style={{color: "#f15025"}}></i>
              <span className="label">Monthly</span>
              <span className="opt-val">Monthly</span>
            </div>
            <div className="option">
              <input className="s-c top" type="radio" name="platform" value="behance"></input>
              <input className="s-c bottom" type="radio" name="platform" value="behance"></input>
              <i className="fab fa-behance"></i>
              <span className="label">Behance</span>
              <span className="opt-val">Behance</span>
            </div>
            <div className="option">
              <input className="s-c top" type="radio" name="platform" value="hackerrank"></input>
              <input className="s-c bottom" type="radio" name="platform" value="hackerrank"></input>
              <i className="fab fa-hackerrank"></i>
              <span className="label">HackerRank</span>
              <span className="opt-val">HackerRank</span>
            </div>
            <div className="option">
              <input className="s-c top" type="radio" name="platform" value="stackoverflow"></input>
              <input className="s-c bottom" type="radio" name="platform" value="stackoverflow"></input>
              <i className="fab fa-stack-overflow"></i>
              <span className="label">StackOverflow</span>
              <span className="opt-val">StackOverflow</span>
            </div>
            <div className="option">
              <input className="s-c top" type="radio" name="platform" value="freecodecamp"></input>
              <input className="s-c bottom" type="radio" name="platform" value="freecodecamp"></input>
              <i className="fab fa-free-code-camp"></i>
              <span className="label">FreeCodeCamp</span>
              <span className="opt-val">FreeCodeCamp</span>
            </div>
            <div id="option-bg"></div>
          </div>
        </div>
      </form>

      {/* <Async promiseFn={setCalendar}>
        <Async.Loading>{() => {return(<p>Loading...</p>)}}</Async.Loading>
        <Async.Fulfilled>{data => {return ({data})}}</Async.Fulfilled>
        <Async.Rejected>{error => {return ({error})}}</Async.Rejected>
      </Async> */}


      <div className="calendar">
        <header>

          <h2>{curMonth()}</h2>

          <button className="btn-prev fontawesome-angle-left" onClick={changePrevMonth}></button>
          <button className="btn-next fontawesome-angle-right" onClick={changeNextMonth}></button>

        </header>

        <table>

          <thead>

            <tr className="dow">

              <td>Su</td>
              <td>Mo</td>
              <td>Tu</td>
              <td>We</td>
              <td>Th</td>
              <td>Fr</td>
              <td>Sa</td>

            </tr>

          </thead>

          <tbody>{createTable()}

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

          </tbody>

        </table>
      </div>
      <Link to={'/instructors'} > All Instructors </Link>
      <Link to={'/courses'} > All Courses </Link>
    </div>
  );
}




export default HomePageView;
