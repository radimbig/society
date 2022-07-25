import React from "react";



class Status extends React.Component{
    state={
        editMode:false,
        text:this.props.text
    }
    handleFocus = (event) => event.target.select();
    toggleEditMode = () =>{
        if(this.state.editMode === true){
            this.setState({
                editMode:false
            },()=>{console.log(this.state)})

        }else{
            this.setState({
                editMode:true
            }, ()=>{console.log(this.state)})
        }

        
    }
    onChangeFun = (e) =>{
        this.setState({
            text:e.target.value
        })
    }
    render(){
       if(this.state.editMode === false){
        return(<span onChange={this.onChangeFun} onDoubleClick={this.toggleEditMode}  > {this.props.text} </span>)
       }else{
        return(  <input autoFocus  onChange={this.onChangeFun} onFocus={this.handleFocus} onBlur={this.toggleEditMode} type="text" value={this.props.text} ></input>)
       }
    }
}


export default Status