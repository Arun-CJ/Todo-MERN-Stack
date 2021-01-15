import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllBuckets } from "../redux/actions/bucketActions";
import { addToDo } from "../redux/actions/todoActions";
import { withRouter } from "react-router-dom";

//Add Todo form intial data
const initialTodoForm = {
    bucket: "",
    name: "",
    description: ""
  };

const AddToDo = ({
    getAllBuckets,
    buckets,
    history,
    addToDo
}) => {
    const [formData, setFormData] = useState({... initialTodoForm});
    //Bucket list data from reducer
    let { bucketListData } = buckets;
        
    useEffect(() => {
        //Getting bucket list from redux
        getAllBuckets();
        document.title = "List - TODO App";
    }, []);
  
    const handleForm = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    
    //Adding Todo list
    const onSubmit = (e) => {
        e.preventDefault();
        if(!formData.bucket){
            alert("Bucket name is empty!!!")
        }else if(!formData.name){
            alert("Todo name is empty");
        }else if(formData.name.length < 2){
            alert("Todo name length should be at least 2 characters!!!");
        }
        else{
            addToDo(formData);
            setFormData({...formData, ...initialTodoForm});
        }
    }

    return (
        // Add todo form
        <form className='Form' 
        onSubmit={(e) => onSubmit(e)}
        >
            <div>
                <div>
                    <label htmlFor='name'>Select Bucket</label>
                    <select id="bucket" onChange={handleForm} value={formData.bucket}>
                        <option  selected={true} disabled="disabled" value="">Choose...</option>
                        {
                            bucketListData && bucketListData.length > 0 ?
                            bucketListData.map((item, idx) => {
                                return <option key={idx}>{item.name}</option>
                            }) : ""
                        }
                    </select>
                    <p className="AddBucket" onClick={()=>history.push('/addbucket')}>
                        Add new Bucket
                    </p>
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input onChange={handleForm} type='text' id='name' value={formData.name} />
                    <p className="design">~~~</p>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input onChange={handleForm} type='text' id='description' value={formData.description} />
                    <p className="design">~~~</p>
                </div>
            </div>
            <button disabled={formData === undefined ? true: false} >Add Todo</button>
        </form>
    );
}

AddToDo.propTypes = {
    getAllBuckets: PropTypes.func.isRequired,
    addToDo: PropTypes.func.isRequired,
    buckets: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    buckets: state.buckets,
    todo: state.todo,
});

const mapDispatchToProps = { getAllBuckets, addToDo };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddToDo));