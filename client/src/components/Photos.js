import React, {useEffect} from "react";
import axios from "axios";
// import AddComment from './AddComment';

function Photos({ photo, setPhoto, updateComments }) {
    
//   const [comments, setComments] = useState("");

  // function handlePhoto(event) {
  //     event.preventDefault();
  //   let newComment = {
  //     comments: comments}

  //   // persist changes on server
  //   fetch(`/photos/${photo.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newComment),
  //   })
  //     .then((r) => r.json())
  //     .then((data) => console.log(data));
  //   // then use onUpdateTodo to update todo in state
  // }
const getPhoto = () => {
  axios
    .get("/photos")
    .then((res) => {
      setPhoto(res);
    })
    .catch((err) => {
      // Error handling
      console.log(err);
      return null;
    });
};
  
const myData= photo.map((pic) => (
        <div className="row">
          <div classNam="col">
            <img
              src={pic.url}
              className="img-fluid"
              alt=""
              width="400"
              height="350"
            />
            <h3>{pic.name}</h3>
            <button type="button" className="btn btn-danger">
              <i className="bi bi-star"></i>
              like
            </button>
            <h5>{pic.likes}</h5>
          </div>
        </div>
      ))


  return (
    <div >
      {/* {myData} */}
    </div>
  );
}

export default Photos;
