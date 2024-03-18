import React from 'react'
import '../styles/tooltip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass ,faFlag, faCircleXmark,faComment} from '@fortawesome/free-solid-svg-icons'


export default function ToolTip({title}) {

  
  return (
    <div className='tool' style={{borderRadius:'20px'}}>
        <div className='tool-display'>
            <h3 style={{textAlign:'center',color:'black'}}>{title}</h3>
            <div className='tool-tip'>
                <progress className='tool-bar' value="75" max="100" data-text="Positive" ></progress>
                <progress className='tool-bar' value="50" max="100" data-text="Negative" ></progress>
                <progress className='tool-bar' value="50" max="100" data-text="Comments" ></progress>

            </div>
            <hr></hr>
            <div  className='tool-review'>
                <div style={{backgroundColor:'#d4ebf2'}} className='total-box'>
                    <h6 style={{textAlign:'center',paddingLeft:'0px',marginBottom:'0px', color:'skyblue' , textShadow:'1px 1px blue'}}>Total Reviews{" "}<FontAwesomeIcon style={{color:'black'}} icon={faMagnifyingGlass} /></h6>
                    <h6 style={{textAlign:'center',paddingLeft:'0px',marginBottom:'0px', color:'black'}}>125</h6>
                </div>
                <hr></hr>
                <div className='tool-comment'>
                    <h6 style={{color:'skyblue' , textShadow:'1px 1px blue'}}><FontAwesomeIcon style={{color:'#90ee90'}} icon={faFlag} /> 75</h6>
                    <h6 style={{color:'skyblue' , textShadow:'1px 1px blue'}}><FontAwesomeIcon style={{color:'red'}} icon={faCircleXmark} />50</h6>
                </div>
                <h6 style={{textAlign:'center', marginBottom:'0px'}}><FontAwesomeIcon icon={faComment} /></h6>
                <h6 style={{textAlign:'center',marginTop:'0px',color:'skyblue' , textShadow:'1px 1px blue'}}>Comments</h6>
            </div>
        </div>
      
    </div>
  )
}
