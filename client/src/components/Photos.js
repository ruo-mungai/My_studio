import React, {useEffect} from "react";
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
useEffect(() => {
  // declare the data fetching function
  const fetchData = async () => {
    const data = await fetch("/photo");
  };

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);
}, []);
  
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
      {myData}
    </div>
  );
}

export default Photos;
