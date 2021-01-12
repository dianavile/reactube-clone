import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
// import Avatar from '@material-ui/core/Avatar';
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
                    <div className="searchbar__left">
                        <MenuIcon />
                        <img src={logo} className="logo" alt="logo" />    
                     </div>
                    <Paper elevation={12} style={{ padding: "5px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <i className="material-icons">
                            <label>
                                <input type="text" label="label" onChange={this.handleChange} value="search"/>
                            </label>
                        </i>
                    </form>
                    </Paper>
                    {/* <div className="searchbar__right">
                        <Avatar
                            alt='Diana Vilé'
                            src="https://avatars2.githubusercontent.com/u/25930085?s=60&amp;v=4"
                            width="12px"
                            height="12px"
                        />
                    </div> */}
                </Toolbar>
            </AppBar>                  
            )
        }
    }

export default SearchBar;




      
 