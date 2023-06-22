import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { ChakraProvider } from '@chakra-ui/react'
import {Landing} from './Landing';
import {Home} from './Home';

function App() {
    return (
        <div className='application'>
            <hr />
            <Routes>
                <Route path="/" element={<Landing /> }/>
                <Route path="/home" element={<Home /> }/>
                <Route path="*" element={<p className=''>There's nothing here: 404!</p>} />
            </Routes>
        </div>
    );
}

export default App;
