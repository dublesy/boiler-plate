/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {auth} from '../_actions/user_action'
//import { useNavigate } from 'react-router-dom';
export default function (SpecificComponent, option, adminRoute = null) {
    

/**
 *  option이
 * null -> 아무나 추립이 가능함 페이지
 * true -> 로그인한 유저만 출입이 가능한 페이지
 * false -> 로그인한 유저는 출입이 불가능한 페이지 
 */

    function AuthenticationCheck(props) {
        let user = useSelector(state => state.user);
        //const navigate = useNavigate();
        const dispatch = useDispatch();
        
        useEffect(() => {
             //To know my current status, send Auth request 
             dispatch(auth()).then(response => {
                //Not Loggined in Status 
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                    //Loggined in Status 
                } else {
                    //supposed to be Admin page, but not admin person wants to go inside
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    }
                    //Logged in Status, but Try to go into log in page 
                    else {
                        if (option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [])

        return (
            <SpecificComponent {...props} user={user} />
        )
    }
    return AuthenticationCheck
}
