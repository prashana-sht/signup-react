import Buttons from './Buttons';
import Form from './Form.js';
import { useState } from 'react';


const FormView = () => {
    const[showForm, setShowForm]= useState(false);
  
    return(
      <>{
        showForm ? <Form /> : <Buttons onclick={() => setShowForm(true)} />
      }
      </>
    )
  }
  
  export default FormView;