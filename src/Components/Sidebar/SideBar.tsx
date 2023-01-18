import { Sidebar } from 'react-pro-sidebar';
import { database } from './database';
import './Sidebar.css'
export function SideBar() {


  return (
    
      <Sidebar collapsedWidth='0px'  width='300px' backgroundColor='white'>
      <div className="sideElements">
      <div className="accordion accordion-flush px-2 py-1 borderd" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button without collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className={`text-secondary bi bi-grid`}></i>
                    <span className='ms-3'>Dashboard</span>
                  </button>
                </h2>
              </div>
            </div>
            </div>
        {
          database.map((x, i) => <div className="sideElements">
            <div className="accordion accordion-flush px-2 py-1 borderd" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className={`text-secondary ${x.icons}`}></i>
                    <span className='ms-3'>{x.ul}</span>
                  </button>
                </h2>
                <div id={`flush-collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${i}`} data-bs-parent="#accordionFlushExample">
                  <ul className="list-group list-group-flush">
                  {
                    x.li.map(y=><li className="list-group-item ms-3 border-0 d-flex align-items-center n-blue bolder"><i style={{fontSize:'6px'}} className="bi bi-circle mx-2 n-blue"></i>{y}</li>)
                  }
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>)
        }
        <p className='px-4 text-secondary' style={{fontSize:'13px'}}> <span className='ms-2 fw-bolder'>PAGES</span> </p>
        {
          database.map((x, i) => <div className="sideElements">
            <div className="accordion accordion-flush px-2 py-1 borderd" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button without collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className={`text-secondary ${x.icons}`}></i>
                    <span className='ms-3'>{x.ul}</span>
                  </button>
                </h2>
              </div>
            </div>
          </div>)
        }
      </Sidebar>
  );
}