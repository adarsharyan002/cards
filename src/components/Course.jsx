


const Course = ({ title, image, price }) => {
  
  return (
    <div className="course">
      <div className="course-image">
        <img src={image} alt={title} />
      </div>
      <div className="course-info">
        <h3>{title}</h3>
        <p>{`$ ${price}`}</p>
        <button className="enroll-btn">Enroll</button>
      </div>
    </div>
  );
};

export default Course;