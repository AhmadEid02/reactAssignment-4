// Modal.js
import React from 'react';

const Modal = (props) => {
  const data = props.modalData;

  return (
    <>
      {props.show &&
        <div className='w-75 d-flex flex-column bg-secondary rounded w-50 m-auto p-3 z-1 position-fixed top-50 start-50 translate-middle'>
          <div className='d-flex flex-column'>
            <div className='d-flex border-bottom'>
            <h3 className='text-light'>{data.original_title}</h3>
            
            <button className='btn ms-auto btn-secondary align-self-baseline' onClick={props.hide}>&times;</button>
            </div>
            <div className='d-flex'>
            <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className="p-1 card-img-top" alt={`poster for ${data.original_title}`} style={{height:"15rem"}}/>
            <div className='d-flex flex-column'>
                <p className='text-light p-2'>{data.overview}</p>
                <table className='table  table-borderless table-secondary table-hover'>
                    <tbody>
                    <tr><th>media type</th><td>{data.media_type}</td></tr>
                    <tr><th>release date</th><td>{data.release_date}</td></tr>
                    <tr><th>popularity</th><td>{data.popularity}</td></tr>
                    <tr><th>vote_average</th><td>{data.vote_average}</td></tr>
                    </tbody>
                </table>
            </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal;
