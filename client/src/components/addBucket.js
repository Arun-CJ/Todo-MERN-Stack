import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createBucket } from "../redux/actions/bucketActions";

const AddBucket = ({
    createBucket,
    history
}) => {
    const [formData, setFormData] = useState({name:""});
        
    useEffect(() => {
        document.title = "Add Bucket - TODO App";
    }, []);

    //Adding Bucket to Database
    const onSubmit = (e) => {
        e.preventDefault();
        if(!formData.name){
            alert("Bucket name is empty!!!")
        }else if(formData.name.length < 2){
            alert("Bucket name length should be at least 2 characters!!!");
        }else{
            setFormData({ name : "" })
            createBucket(formData, history);
        }
    }

    return (
        // Add Bucket form
        <form className='Form' 
        onSubmit={(e) => onSubmit(e)}
        >
            <div>
                <label htmlFor='name'>Enter Bucket Name : </label>
                <input 
                onChange={(e) =>
                    setFormData({ name: e.target.value })
                }
                type='text' id='name' />
            </div>
            <button 
            // disabled={!formData.name ? true: false}
            >Add Bucket</button>
            <button onClick={() => {history.push('/')}}>Back</button>
        </form>
    );
}

AddBucket.propTypes = {
    createBucket: PropTypes.func.isRequired,
    buckets: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    buckets: state.buckets
});

const mapDispatchToProps = { createBucket };

export default connect(mapStateToProps, mapDispatchToProps)(AddBucket);