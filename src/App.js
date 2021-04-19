import React, { useState } from "react";
// import ListItem from "./ListItem";
import "./App.css";
import data from './data/books';
import GridCard from "./Components/GridCard";
import ListCard from "./Components/ListCard";

function App() {
  const [books, setBooks] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [isList , setIsList] = useState(true);
  const [gridlistbtnText, setgridlistbtnText] = useState("Grid");
  const [lightDarkMode,setLightDarkMode] =useState("Dark");
  const [lightDarkModeClass,setLightDarkModeClass] =useState("lightMode");
  
  
  return (
    <div id="main" className={lightDarkModeClass}>

      <div className="searchBox">
        <input type="text"  placeholder="Search.." onChange={(e)=>{
          setSearchItem(e.target.value)
        }} />
      </div>

     <div className="btnPortion">
      <button onClick={ (e)=>{
          if(isList===true){
            setIsList(false);
            setgridlistbtnText("List");
          }
          else{
            setIsList(true);
            setgridlistbtnText("Grid");
          }
        } } >{gridlistbtnText}</button>


        <button onClick={ (e)=>{
          if(lightDarkMode==="Dark"){
            setLightDarkMode("Light");
            setLightDarkModeClass("darkMode");
          }
          else{
            setLightDarkMode("Dark");
            setLightDarkModeClass("lightMode");
          }
        } } >{lightDarkMode}</button>

     </div>


      { isList === true ? 
          <div>
            <div className='displayAsList'>
              {
                books.filter((val)=>{
                  if(searchItem === ""){
                    return val;
                  }
                  else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
                      return val;
                  }
                }).map((item)=>{
                    return(

                        <ListCard item={item} />
                    );
                })
              }
            </div>
            
          </div>
          
        :

           <div className='displayAsGrid'>
             {books.filter((val)=>{
                if(searchItem === ""){
                  return val;
                }
                else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
                    return val;
                }
              }).map((item)=>{
                
                  return(
                      <GridCard item={item} />
                  );
              }) 
              }
          </div> 
      }

    </div>
  );
}

export default App;