import {Link, useNavigate} from 'react-router-dom';
import { Component, useEffect } from 'react';

export const Protected = (props) =>{
    const {Component}   = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('uservalue');
        if(!login){
            navigate('/')
        }
    })
    return (
      <>
        <Component/>
      </>
    );
}