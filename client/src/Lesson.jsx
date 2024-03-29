import React, {useState} from 'react'
import "./Lesson.css"
import { useParams } from 'react-router-dom'
import courseData from './CourseData';
import Navbar2 from './components/navbar/Navbar2';
import Footer from './components/Footer/Footer';
import Progress_bar from './components/ProgressBar';
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import coin from "./assets/coin.png";

const Lesson = () => {
const {id, chapterid} = useParams();
const course = courseData.find(course => course.id === parseInt(id));
const chapter = course.chapters.find(chapter => chapter.id === parseInt(chapterid));
const [done, setDone] = useState(false);

  return (
    <div>
      <Navbar2/>
      <div className='main-lesson'>
        <div className='side-chapters'>
          {course.chapters.map((chapter, index) => (
              <button key={index} className='grey-btn'>Chapter {chapter.id}</button>
          ))}
        </div>
        <div className='the-bigger-container'>
          <h1>{course.title}</h1>
          <br></br>
          <div className='progress-percentage'>
            {/* <div className='progress-bar-container'>
              <div className="progress-bar" style={{width:{course.progress}%`}}></div>
            </div> */}
            <Progress_bar
              bgcolor="#00676C"
              progress={course.progress}
              height={10}
            />
            <div className='percentage'>{course.progress} %</div>
          </div>
          <br></br>
          <h2>{chapter.title}</h2>
          <br></br>
          <br></br>
          <div>Let's check out the video below!</div>

          <div className='thumbnail'>
            <img src={chapter.thumbnail}></img>
          </div>

          <br></br>
          <br></br>

          <div className='done-button'>
            <div className='arrow-btn'><FontAwesomeIcon icon={faChevronLeft} /></div>
            <div className='green-btn-lesson' onClick={() => setDone(!done)}>DONE</div>
            <div className='arrow-btn'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          {done &&
            <div className='popup-overlayy'>
                <div className='done-popup'>
                  <img src={coin} id='coinillus'></img>
                  <div>Congrats!<br></br> You have earned 10 coins!</div>
                  <button className='green-btn'  onClick={() => setDone(false)}>OK</button>
                  
              </div>
            </div>
        }
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Lesson
