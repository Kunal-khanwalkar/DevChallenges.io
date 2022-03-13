import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return(
        <div className='wrapper'>
            <NavBar Page='Buttons'/>
            <div className='main-content'>
                <h1>Buttons</h1>
                <div className='row'>
                    <ButtonGroup />                
                    <ButtonGroup hover/>                
                </div>
                <div className='row'>
                    <ButtonGroup variant='outline'/>
                    <ButtonGroup variant='outline' hover/>
                </div>
                <div className='row'>
                    <ButtonGroup variant='text'/>
                    <ButtonGroup variant='text' hover/>
                </div>
                <div className='row'>
                    <ButtonGroup disableShadow color='primary'/>
                </div>
                <div className='row'>
                    <ButtonGroup disabled/>
                    <ButtonGroup variant='text' disabled/>
                    <ButtonGroup variant='outline' disabled/>
                </div>
                <div className='row'>
                    <ButtonGroup color='primary' size='sm'/>
                    <ButtonGroup color='primary' size='md'/>
                    <ButtonGroup color='primary' size='lg'/>
                </div>
                <div className='row'>
                    <ButtonGroup color='primary' startIcon='local_grocery_store'/>
                    <ButtonGroup color='primary' endIcon='local_grocery_store'/>
                </div>
                <div className='row'>
                    <ButtonGroup color='default'/>
                    <ButtonGroup color='primary'/>
                    <ButtonGroup color='secondary'/>
                    <ButtonGroup color='danger'/>
                </div>
                <div className='row'>
                    <ButtonGroup color='default' hover/>
                    <ButtonGroup color='primary' hover/>
                    <ButtonGroup color='secondary' hover/>
                    <ButtonGroup color='danger' hover/>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;