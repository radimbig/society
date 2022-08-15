import React from "react";
import debagger from "../../debagger/Debbager";




class Status extends React.Component{

    componentDidUpdate(prevProps, prevState){
      if(prevProps.text !== this.props.text){
        this.setState({text:this.props.text})
        
      }
        
    }

    state={
        editMode:false,
        text:this.props.text

    }
    handleFocus = (event) => event.target.select();
    toggleEditMode = (e) =>{
        if(this.state.editMode === true){
            this.setState({
                editMode:false
            })
        this.props.updateStatus(e.target.value)    
        }else{
            this.setState({
                editMode:true
            })
        }

        
    }
    OnKeyDownFun = (e)=>{
        if(e.key === 'Enter'){
            this.props.updateStatus(e.target.value) 
          }
    }
    onChangeFun = (e) =>{
        this.setState({
            text:e.target.value
        })
    }
    render(){
        debagger("status component", this.props)
       if(this.state.editMode === false & this.props.you === true){
        return(<span  onDoubleClick={this.toggleEditMode}  > {this.props.text || "Click to add status"} </span>)
       }
       if(this.state.editMode === false & this.props.you === false){
        return(<span  >{this.props.text || "no status"}</span>)
       }
       if(this.state.editMode === true & this.props.you === true){
        return(  <input autoFocus onKeyDown={this.OnKeyDownFun} onChange={this.onChangeFun} onFocus={this.handleFocus} onBlur={this.toggleEditMode} type="text" value={this.state.text} ></input>)
       }
    }
}


export default Status