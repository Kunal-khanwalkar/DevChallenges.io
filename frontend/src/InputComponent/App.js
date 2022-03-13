import React from 'react';
import NavBar from '../ButtonComponent/components/NavBar/NavBar';
import Footer from '../ButtonComponent/components/Footer/Footer';
import InputGroup from './InputGroup/InputGroup';
import Input from './Input/Input';
import './App.css';

class App extends React.Component {    
    render() {
        return (
        <div className='wrapper'>
            <NavBar Page='Inputs'/>
            <div className='main-content'>
                <h1>Inputs</h1>
                <div className='row'>
                    <InputGroup />
                    <InputGroup hover/>
                    <InputGroup focus/>
                </div>
                <div className='row'>
                    <InputGroup error />
                    <InputGroup error hover/>
                    <InputGroup error focus/>
                </div>
                <div className='row'>
                    <InputGroup disabled />
                </div>
                <div className='row'>
                    <InputGroup helperText="Some interesting text" />
                    <InputGroup helperText="Some interesting text" error />
                </div>
{/*                 <div className='row'>
                    <InputGroup startIcon='local_grocery_store' />
                    <InputGroup endIcon='local_grocery_store' />
                </div> */}
                <div className='row'>
                    <InputGroup value="Text" />
                </div>
                <div className='row'>
                    <InputGroup size="sm" />
                    <InputGroup size="md" />
                </div>
                <p>&lt;Input fullWidth /&gt;</p>
                <Input fullWidth />
                <br />
                <div className='row'>
                    <InputGroup multiline row="4" />
                </div>
                <Footer />
            </div>
        </div>            
        );
    }
}

export default App;