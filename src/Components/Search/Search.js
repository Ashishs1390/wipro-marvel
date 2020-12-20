import React,{useState,useEffect,useRef} from 'react';
import {fetchDetails} from './../../redux/index'
import {connect} from 'react-redux';


function Search(props){
    let {isDisabled} = props;
    const inputEl = useRef(null);
    const searchMarvel = () =>{
        props.fetchDetails(inputEl.current.value,isDisabled);
    }
    useEffect(()=>{
        console.log(isDisabled)
    },[isDisabled])
  
    return (
        <div>
            <input ref={inputEl} disabled = {isDisabled} type = "search"></input>
            <button onClick = {searchMarvel}>search</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
   console.log(state)
   return {
       isDisabled: state.searchItems.details.bool
   }
}


const mapDispatchToProps = dispatch =>{

    return {
        fetchDetails:(searchTerm) =>dispatch(fetchDetails(searchTerm)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Search);