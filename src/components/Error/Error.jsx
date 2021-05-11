import React from "react";

let Error = props => {
  
  let {error} = props
  return (
    <div>
      <h3>{error}</h3>
    </div>
  );
};

export default Error;
