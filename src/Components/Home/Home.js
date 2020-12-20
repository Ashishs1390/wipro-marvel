import React,{useState,useEffect} from 'react';
import Search from './../Search/Search';
import {connect} from 'react-redux';


function Home(props){
    let {items,lastFiveSearchTerm} = props;

    return (
        <div className='MainContent'>
            <p>Home for Marvel Test Search </p>
            <p className="lastFiveSearch">
                <span className="searchtitle">Last Five Searches:</span>
                {
                    lastFiveSearchTerm.map((searchedItem,index)=>{
                        return (
                            <span key={index}>{searchedItem}</span>
                        )
                    })

                }
            </p>
            <Search ></Search> 
            <div className='Content-searchTerm'> 
                <h2>Please enter from the below search term to make search box functional </h2>
                <div className ="searchsamples">
                    <p>characters</p>
                    <p>comics</p>
                    <p>creators</p>
                    <p>series</p>
                    <p>stories</p>

                </div>
                <div className="Content-searchItems">
                    <h3>Search Results</h3>
                    {
                        items.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <p>{item.name || item.title || item.firstName}</p>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        items:state.searchItems.details.searchItems || [],
        lastFiveSearchTerm: state.searchItems.details.lastFiveSearchTerm ||[]
    }
}

export default connect(mapStateToProps,null)(Home);