import { Link } from "react-router-dom";


const CourseList = () => {
  //const [course,setCourse] = useState(null);

  return (

    <div className="container">

      <h2>
        Courses
      </h2>

      <div className="row mt-4">
        {/* <img src={course_list[0].src} alt='' /> */}
        <Link to="/course_content">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img
                className="card-img-top"
                src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Course Name</h5>
                <p className="card-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="col-sm-6 col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>
              <p className="card-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>
              <p className="card-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>

        <br /><br />

        <div className="col-sm-6 col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>
              <p className="card-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>
              <p className="card-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F960x0.jpg%3Ffit%3Dscale"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Course Name</h5>
              <p className="card-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>

      </div>
    </div >

  );
};

export default CourseList;
