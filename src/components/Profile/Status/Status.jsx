import React from "react";



class Status extends React.Component{
    componentDidMount(){

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
    onChangeFun = (e) =>{
        this.setState({
            text:e.target.value
        })
    }
    render(){
       if(this.state.editMode === false & this.props.you === true){
        return(<span  onDoubleClick={this.toggleEditMode}  > {this.props.text} </span>)
       }
       if(this.state.editMode === false & this.props.you === false){
        return(<span >{this.props.text}</span>)
       }
       if(this.state.editMode === true & this.props.you === true){
        return(  <input autoFocus  onChange={this.onChangeFun} onFocus={this.handleFocus} onBlur={this.toggleEditMode} type="text" value={this.state.text} ></input>)
       }
    }
}


export default Status