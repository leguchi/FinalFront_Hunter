

import { Link } from 'react-router-dom';
import './../../style.css';
import './../../menu.css';
import { changeNextMonth, changePrevMonth, curMonth } from '../../calendar';
// import './../../index';


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
        <input className="s-c top" type="radio" name="platform" value="codepen"></input>
        <input className="s-c bottom" type="radio" name="platform" value="codepen"></input>
        <i className="fab fa-codepen"></i>
        <span className="label">CodePen</span>
        <span className="opt-val">CodePen</span>
      </div>
      <div className="option">
        <input className="s-c top" type="radio" name="platform" value="dribbble"></input>
        <input className="s-c bottom" type="radio" name="platform" value="dribbble"></input>
        <i className="fab fa-dribbble"></i>
        <span className="label">Dribbble</span>
        <span className="opt-val">Dribbble</span>
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
      <div className="calendar">
        <header>

          <h2 onLoad={curMonth}></h2>

          <button className="btn-prev fontawesome-angle-left" onClick={changePrevMonth}></button>
          <button className="btn-next fontawesome-angle-right" onClick={changeNextMonth}></button>

        </header>

        <table>

          <thead>

            <tr className="dow">

              <td>Mo</td>
              <td>Tu</td>
              <td>We</td>
              <td>Th</td>
              <td>Fr</td>
              <td>Sa</td>
              <td>Su</td>

            </tr>

          </thead>

          <tbody>

            <tr>
              <td className="prev-month">26</td>
              <td className="prev-month">27</td>
              <td className="prev-month">28</td>
              <td className="prev-month">29</td>
              <td className="prev-month">30</td>
              <td className="prev-month">31</td>
              <td className="curMonth">1</td>
            </tr>
            <tr>
              <td className="curMonth">2</td>
              <td className="curMonth">3</td>
              <td className="curMonth">4</td>
              <td className="curMonth">5</td>
              <td className="curMonth">6</td>
              <td className="curMonth">7</td>
              <td className="curMonth">8</td>
            </tr>
            <tr>
              <td className="curMonth">9</td>
              <td className="event curMonth">10</td>
              <td className="curMonth">11</td>
              <td className="curMonth">12</td>
              <td className="curMonth">13</td>
              <td className="curMonth">14</td>
              <td className="curMonth">15</td>
            </tr>
            <tr>
              <td className="curMonth">16</td>
              <td className="curMonth">17</td>
              <td className="curMonth">18</td>
              <td className="curMonth">19</td>
              <td className="curMonth">20</td>
              <td className="event curMonth">21</td>
              <td className="curMonth">22</td>
            </tr>

            <tr>
              <td className="current-day event curMonth">23</td>
              <td className="curMonth">24</td>
              <td className="curMonth">25</td>
              <td className="curMonth">26</td>
              <td className="curMonth">27</td>
              <td className="curMonth">28</td>
              <td className="curMonth">29</td>
            </tr>
            <tr>
              <td className="curMonth">30</td>
              <td className="next-month">1</td>
              <td className="next-month">2</td>
              <td className="next-month">3</td>
              <td className="next-month">4</td>
              <td className="next-month">5</td>
              <td className="next-month">6</td>
            </tr>

          </tbody>

        </table>
      </div>
      {/* <Link to={'/instructors'} > All Instructors </Link>
      <Link to={'/courses'} > All Courses </Link> */}
    </div>
  );
}




export default HomePageView;
