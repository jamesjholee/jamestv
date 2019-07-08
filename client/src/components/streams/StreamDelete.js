import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  )

  return(
    <div>
      <Modal title='delete stream' content='Are you sure you want to delete this stream?' actions={actions} />
    </div>
  )
};

export default StreamDelete;
