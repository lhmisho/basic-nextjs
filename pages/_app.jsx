import React from 'react'
import App from 'next/app'
import Router from 'next/router'

class MyApp extends App{
    render(){
        const {Component, pageProps, reduxStore} = this.props
        return <Component {...pageProps} />
    }
}
export default MyApp;