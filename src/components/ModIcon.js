import React from "react";
import { RiCloseLine } from "react-icons/ri";


const ModIcon = ({ setIsOpen }) => {
    return (
      <>
        <div className="" onClick={() => setIsOpen(false)} />
        <div className=''>
          <div className="">
            <div className="">
              <h5 className="">Dialog</h5>
            </div>
            <button className="" onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="">
              Are you sure you want to delete the item?
            </div>
            <div className="">
              <div className="">
                <button className="" onClick={() => setIsOpen(false)}>
                  Delete
                </button>
                <button
                  className=""
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ModIcon