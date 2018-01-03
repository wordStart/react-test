import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from '../redux/my-redux'
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
  return class connectComponent extends React.Component{
    static contextTypes = {
      store: PropTypes.object
    }
    constructor(props, context){
      super(props, context)
      this.state = {
        props: {}
      }
    }
    componentDidMount() {
      let {store} = this.context
      store.subscribe(() => this.update())
      this.update()
    }
    update() {
      const {store} = this.context
      // state参数虚假替换，首先执行store.getState(),此时state的值已经变为store.getState()所得到的值，所以可以state => state.num
      const stateProps = mapStateToProps(store.getState())
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
      console.log(stateProps)
      this.setState({
        props: {
          ...this.state.props,
          ...stateProps,
          ...dispatchProps,
        }
      })
    }
    render() {
      return(
        <WrapComponent {...this.state.props}></WrapComponent>
      )
    }
  }
}
export class Provider extends React.Component{
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    // console.log(this.context) // {}
    return {store: this.store}
  }
  constructor(props, context) {
    super(props, context)
    // console.log('props', props) // store:{getState:f, subscribe:f, dispatch: f} music:{obj:'a'}, children:{key:null,ref:null}
    // console.log('this.props', this.props) // store:{getState:f, subscribe:f, dispatch: f} music:{obj:'a'}, children:{key:null,ref:null}
    // console.log('context', context) // {}
    this.store = props.store
    // console.log(this.store) // {getState:f, subscribe:f, dispatch: f}
  }
  render() {
    return this.props.children
  }
}