import React from 'react';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  handleClick(name){
    this.setState({name:name})
  }
  
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
        <Button variant="contained" color="primary" onClick={ () => {this.handleClick('Aditia Darma Nst')} }>
          Ganti ke adit
        </Button>
        <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<AccessAlarmIcon />} onClick={ () => {this.handleClick('Aditia Darma Nst')} }/>
        </BottomNavigation>
      </div>
      
    );
  }
}

export default App;
