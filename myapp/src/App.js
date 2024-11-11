import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Feature from './Feature';
import Testinomial from './Testinomial';
import Highlight from './Highlight';
import FAQ from './FAQ';


const App=()=>{
    return(
        <>
           <Router>
            <Routes>
                <Route path='/' element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/Features' element={<Feature/>} />
                    <Route path='/Testinomial' element={<Testinomial/>}/>
                    <Route path='/Highlight' element={<Highlight/>}/>
                    <Route path='/FAQ' element={<FAQ/>}/>  
                </Route>
            </Routes>
           </Router>
        </>
    )
}
export default App;