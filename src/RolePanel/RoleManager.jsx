import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { Field, Formik } from "formik";
import { Button } from "bootstrap";


export default function RoleManager(){
  const history = useHistory();
  return(
    <>
     <h3>Create Role</h3>
     <Formik initialValues={{
        name:''
     }}
     onSubmit={value=>{
        console.log(value);
     }}
     >

        <form>
            <div className="form-group">
            <label htmlFor="name"></label>
            <Field name="name" className="form-control"></Field>
            </div>
            <Button>Save Changes</Button>
        </form>

     </Formik>
    
    </>
  );
}