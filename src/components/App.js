import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import DropDown from "./DropDown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items=[
    {
        title:'What is React?',
        content:'React is a javascript framework'
    },
    {
        title:'Why to study React',
        content:'Beacuse it gives you money . And Money sloves all the problems'
    },
    {
        title:'How to use React',
        content:'First study React to use React'
    }
];

const options=[

    {
        label:'The color Red',
        value:'red'
    },

    {
        label:'The color Green',
        value:'green'
    },

    {
        label:'The color Blue',
        value:'blue'
    }
];

const App =()=>{

     const [selected,setSelected]=useState(options[0]);
     const[showDropDown, setDropDown]=useState(true);

    //     return (
    //         <div className="ui container">
    //             <button onClick={()=>setDropDown(!showDropDown)}>Toggle DropDown</button>
    //             {showDropDown?
    //                 <DropDown 
    //                     selected={selected}
    //                     onSelectedChange={setSelected}
    //                     options={options}
    //                 />:null
    //             }
                
    //             {/* <Search/> */}
    //             {/* <Accordion items={items}/> */}
    //         </div>
    //     );

    return (
        <div>
            <Header/>
            <Route path={"/"}>
                <Accordion items={items}/>
            </Route>

            <Route path={'/list'}>
                <Search/>   
            </Route>

            <Route path="/dropdown">
                <div className="ui container">
                    <button onClick={()=>setDropDown(!showDropDown)}>Toggle DropDown</button>
                    {showDropDown?
                        <DropDown 
                            selected={selected}
                            onSelectedChange={setSelected}
                            options={options}
                        />:null
                    }
                </div>
            </Route>

            <Route path={"/translate"}>
                <Translate/>
            </Route>
        </div>
    )
}

export default App;