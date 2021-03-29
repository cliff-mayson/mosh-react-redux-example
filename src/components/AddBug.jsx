import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addBug } from '../store/bugs';

const AddBug = () => {
  const dispatch = useDispatch();
  const textInput = useRef(null);

  function handleClick() {
    const description = textInput.current.value;
    console.log(description);
    dispatch(addBug({description}));
  }

  return ( 
    <div>
      Description: <input ref={textInput} type='text' /> 
      <button onClick={handleClick}>Add</button>     
    </div> 
  );
}
 
export default AddBug;