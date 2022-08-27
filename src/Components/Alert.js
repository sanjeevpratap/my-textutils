import React from "react";

function ALert(props) {

  const capitalize=(word)=>{
    // const wor=word.toLo
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
   props.alert && <div>
      
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
  );
}

export default ALert;
