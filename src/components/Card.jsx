import React, { useState } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

function Card({ title, questions }) {
  const [displaySolution, setDisplaySolution] = useState(false);
  const [current, setCurrent] = useState(0);

  const toggleSolution = () => {
    setDisplaySolution(!displaySolution);
  };

  const paginate = (index) => {
    setDisplaySolution(false);
    setCurrent(index);
  };

  return (
    <MDBCard className="m-3">
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>

        <MDBCardText>{questions[current].subtitle}</MDBCardText>

        {displaySolution && (
          <MDBCardText>{questions[current].solution}</MDBCardText>
        )}
        <MDBBtn onClick={toggleSolution}>
          Ergebnis {!displaySolution ? "anzeigen" : "ausblenden"}
        </MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className="text-muted justify-content-center">
        <MDBPagination className="mb-0 justify-content-center">
          {questions.map((q, index) => {
            return (
              <MDBPaginationItem
                className={current === index && "active disabled"}
              >
                <MDBPaginationLink onClick={() => paginate(index)}>
                  {index + 1}
                </MDBPaginationLink>
              </MDBPaginationItem>
            );
          })}
        </MDBPagination>
      </MDBCardFooter>
    </MDBCard>
  );
}

export default Card;
