import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Simple from './components/Simple';
import Hex from './components/Hex';
import {Header} from './components/Header';

const COLORS = ["green", "red", "rgba(133,122,200)", "#f15025"];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      simplePicked: "white",
      hexPicked: "white"
    }
    this.changeColor = this.changeColor.bind(this)
    this.changeColorHex = this.changeColorHex.bind(this)
  }
  changeColor(){
    const pickedIndex = Math.floor(Math.random()*COLORS.length)
    const pickedColor = COLORS[pickedIndex];
    this.setState({simplePicked: pickedColor})
  }
  changeColorHex(){
    const hexCaract = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
      let pickedIndex = Math.floor(Math.random()*hexCaract.length)
      hexColor += hexCaract[pickedIndex];
    }
    this.setState({hexPicked: hexColor})
  }
  render(){
    return(
      <> 
        <Header/>
        <Switch>
          <Route exact path="/" component={()=><Simple changeColor={this.changeColor} color={this.state.simplePicked}/>} />
          <Route exact path="/hex" component={()=><Hex changeColor={this.changeColorHex} color={this.state.hexPicked}/>}/>
        </Switch>
      </>
    );
  }
}


export default App;
