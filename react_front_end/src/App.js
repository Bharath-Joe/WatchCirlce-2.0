import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { ChakraProvider } from '@chakra-ui/react'
import {Landing} from './Landing';
import {Login} from './Login';
import {AppHeader} from './Header';

function App() {
    return (
        <div className='application'>
            <AppHeader/>
            <hr />
            <Routes>
                <Route path="/" element={<Landing /> }/>
                <Route path="/login" element={<Login /> }/>
                <Route path="*" element={<p className=''>There's nothing here: 404!</p>} />
            </Routes>
        </div>
    );
}

export default App;
