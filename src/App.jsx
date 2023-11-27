

import './App.css'
import Course from './components/Course';
import { courses } from './data/courseDetails';
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <div className="App">
           <Navbar/>

     
      <div className="courses">
        {courses.map((course) => (
          <Course key={course.id} title={course.title} image={course.image} price={course.price} />
        ))}
        
      </div>
    </div>
  );
};

export default App;