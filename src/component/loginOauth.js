import React, { Component } from "react";
import * as queryString from 'query-string';

class LoginOauth extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         stringifiedParams:"",
    //         googleLoginUrl:""
    //     }
    // }
    render(){
          const googleParams = queryString.stringify({
            client_id: 'Client ID',
            redirect_uri: 'http://localhost:4000/ecom/oauth/google',
            scope: [
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '), // space seperated string
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
          });
          const googleLoginUrl =`https://accounts.google.com/o/oauth2/v2/auth?${googleParams}`

          const fbParams = queryString.stringify({
            client_id: "client id",
            redirect_uri: 'http://localhost:4000/ecom/oauth/facebook',
            scope: ['email', 'user_friends'].join(','), // comma seperated string
            response_type: 'code',
            auth_type: 'rerequest',
            display: 'popup',
          });
          const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${fbParams}`;
          const twitterLoginUrl=`http://localhost:4000/ecom/oauth/twitter/request-token`
        return(
            <div>
            <a href={googleLoginUrl}>
            Login with Google
          </a><br></br>
          <a href={facebookLoginUrl}>Login with Facebook</a><br></br>
          <a href={twitterLoginUrl}>login with twitter</a>
            </div>
        )
    }
}

export default LoginOauth;