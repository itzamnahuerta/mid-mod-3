import React from 'react';

// issue: the props data is being stored but is not rendering in functional component
function Brooklyn(props) {
  if(props.bkdata !== [] ) {
  console.log("am herrr", props.bkdata.length, typeof props.bkdata)
  }
  return (
    <div>
      {props.bkdata && props.bkdata.length > 0 && (
        console.log(props.bkdata.length)
      )}
      <h1> Brooklyn </h1>
        {/* {props.bkdata.map(item => (
          <div> {item.law_cat_cd} </div>
        ))} */}
    </div>
  )
}

export default Brooklyn
