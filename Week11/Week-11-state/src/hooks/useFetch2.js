import { useState,useEffect } from "react";
export function useFetch(url){
    const [finalData,setFinalData]=useState({});
    console.log(url);
    async function getDetails() {
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json)
    }

    useEffect(()=>{
        getDetails();
    },[])//when the first mount occurs then re render 
    return {finalData}
}
export function useFetch2(url){
    const [finalData,setFinalData]=useState({});
    const [loading,setLoading]=useState(false);


    console.log(url);
    async function getDetails() {
        setLoading(true)
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json)
        setLoading(false);
    }

    useEffect(()=>{
        getDetails();
    },[url])//if the url changes then we have to run getDetails
    return {finalData,loading}
}
export function useFetch3(url,retryTime){
    const [finalData,setFinalData]=useState({});
    const [loading,setLoading]=useState(false);


    console.log(url);
    async function getDetails() {
        setLoading(true)
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json)
        setLoading(false);
    }

    useEffect(()=>{
        getDetails();
    },[url])//if the url changes then we have to run getDetails

    useEffect(()=>{
        const interval=setInterval(getDetails,retryTime*1000) //will send a request to backend after every 10 seconds in case the backend changes

        return()=>{
            clearInterval(interval)
        }
    },[url])
    return {finalData,loading}
}