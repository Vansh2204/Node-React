import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Employee } from './components/Employee';
import { Homepage } from './components/Homepage';
import { Header } from './components/Header';
import { EmployeeDetail } from './components/EmployeeDetail';
import { EmployeeAdd } from './components/EmployeeAdd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<Homepage />} />
                    <Route path='/employee' element={<Employee />}></Route>
                    <Route path='/employee/:id' element={<EmployeeDetail />}></Route>
                    <Route path='/employee/add' element={<EmployeeAdd />}></Route>
                    <Route path="/employee/edit/:id" element={<EmployeeAdd />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);

