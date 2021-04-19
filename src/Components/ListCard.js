import React, { useState } from 'react'
import { Modal } from 'reactstrap';

function ListCard( {item} ) {
    const [modal,setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <div className='lists'>
                <img className="list_img" src={item.thumbnailUrl}  />
                <div className="list_details">
                      <div className="list_title" >{item.title}</div>
                        <div className="list_auther">
                          { item.authors.map((aut)=>{
                              return(
                                <p>{aut}</p>
                              );
                          }) }
                        </div>
                        <button className="list_btn" onClick={toggle}>More</button>
                      </div>
                      
                       <Modal isOpen={modal} toggle={toggle}>
                           <div className="modal-header d-flex justify-content-centre ">
                              <h5 className="modal-title text-center" id="example">{item.title}</h5>
                              <button type='button' aria-label='close'className='close' onClick={toggle} >
                                  <span aria-hidden={true} >close</span>
                              </button>
                           </div>
                           <div className='modal-body'>
                                <div className='d-flex justify-content-between'>
                                    <img src={item.thumbnailUrl} alt={item.title} style={{height: '233px'}} />
                                    <div className='text-center'>
                                        <p> isbn :- {item.isbn}</p>
                                        <p> page count :- {item.pageCount}</p>
                                        <p> status :- {item.status}</p>
                                    </div>
                                </div>
                                <div className='mt-3'><div><h4>short Description</h4></div>
                                    {item.shortDescription}
                                </div>
                                <div className='mt-3'><div><h4>Lhort Description</h4></div>
                                    {item.longDescription}
                                </div>
                           </div>
                       </Modal>
                </div> 
            
        </div>
    )
}

export default ListCard;
