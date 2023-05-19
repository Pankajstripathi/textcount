import React from 'react'

const Alert = (props) => {
      const capitilize = (word)=>{
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
  return (
    <div style={{height:'54px'}}>
    { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitilize(props.alert.type)}</strong>: {props.alert.msg}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>}
    </div>
  )
}

export default Alert
