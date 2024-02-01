 import React from "react";
 
const Book = (props) => {
     
    const { img, title, author, link, rating } = props; 

    const linkAmazon = (link) => {
      console.log("Click the link: " + link);
    };
    const ratingAmazon = (rating) => {
      console.log("Rating: " + rating);
    };
    return (
      <article className="col col-md-6 col-lg-4">
        <div className="card h-100">
          <img
            src={img}
            className="card-img-top"
            alt="..."
            onMouseOver={() => {
              console.log(title);
            }}
          />
          <div className="card-body">
            <h5
              className="card-title text-success"
              onClick={() => {
                console.log(title);
              }}
            >
              {title}
            </h5>
            <p
              className="card-text text-primary"
              onMouseOver={() => {
                console.log(author);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>{" "}
              {author}
            </p>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary p-2"
                type="button"
                onClick={() => linkAmazon(link)}
              >
                Buy this Book
              </button>
              <button
                className="btn btn-outline-warning p-2"
                type="button"
                onClick={() => ratingAmazon(rating)}
              >
                &#9733; Ratings
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  };

  export default Book;