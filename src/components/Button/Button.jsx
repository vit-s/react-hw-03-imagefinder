import React from "react";

let Button = props => {
  return (
    <>
      <button className={`Button`} type="button" onClick={props.click}>
        Load more
      </button>
    </>
  );
};

export default Button;
