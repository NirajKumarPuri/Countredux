import React from "react";
import styles from "./count.module.css";
import {Increment, Decrement } from "../../Action.js";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
class Count extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:''
        }
    }
    Handlechange=(e)=>{
    this.setState({
        item:e.target.value
    })
    }
    render(){
    return(
        <div className={styles.container}>
         <div className={styles.content1}>
         <button className={styles.button} onClick={()=>this.props.Increment(this.state.item? this.state.item :1)}>+</button>
         <p className={styles.para}>{this.props.Todo}</p>
         <button className={styles.button1} onClick={()=>this.props.Decrement(this.state.item? this.state.item :1)}>-</button>
         </div>
         <div className={styles.content2}>
         <input  className={styles.input} type="number" onChange={this.Handlechange} placeholder="Enter the number" value={this.state.item}/>
         </div>
        </div>
    )
}
}
 const mapStateToProps=(store)=>{
    return{Todo:store.Count}
}
  const mapdispatchToprops=(dispatch)=>{
    return bindActionCreators({Increment,Decrement},dispatch)
}
export default connect(mapStateToProps,mapdispatchToprops)(Count);