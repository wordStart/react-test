import React from 'react'
import {connect} from '../react-redux/my-react-redux'
import {addGun, removeGun} from '../store/store'
class App extends React.Component{
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.addGun}>增加</button>
        <button onClick={this.props.removeGun}
        >减少</button>
        {this.props.num}
      </div>
    )
  }
}
App = connect(
  state=>({num: state}),
  {addGun, removeGun}
)(App)
export default App