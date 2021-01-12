import React from 'react';
import { Paper, AppBar, Toolbar } from "@material-ui/core";
import logo from '../logo.svg';

class SearchBar extends React.Component { 
    state = {
        searchTerm: '',
    }

    handleChange = (event) => { this.setState({ searchTerm: event.target.value }) }
   
    handleSubmit = (event) => { 
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() { 
        return (
            <AppBar className="AppBar" position="fixed">
                <Toolbar className="searchbar">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Paper elevation={10} style={{ padding: "5px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <i className="material-icons">
                            <label>
                                <input type="text" label="label" onChange={this.handleChange} value="search"/>
                            </label>
                        </i>
                    </form>
                    </Paper>    
                </Toolbar>
            </AppBar>                  
            )
        }
    }

export default SearchBar;




      
 