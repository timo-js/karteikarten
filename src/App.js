import React from "react";

import Card from "./components/Card";

import stoffhaushalt from "./fragenkataloge/stoffhaushalt";

function App(props) {
  return (
    <>
      {stoffhaushalt.map((q) => (
        <Card title={q.title} questions={q.questions} />
      ))}
    </>
  );
}

export default App;
