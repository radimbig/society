import React from "react";
import styles from "./Users.module.css";
import axios from "axios";

let avaF = "https://cdn-icons-png.flaticon.com/512/219/219969.png";
let avaM = "https://cdn-icons-png.flaticon.com/512/219/219986.png";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`http://server.fsvsgroup.com:1880/user?page=${this.props.currentPage}&count=${this.props.usersPerPage}`).then((res) => {
        this.props.setUsers(res.data);
        
      });
    }
    axios.get("http://server.fsvsgroup.com:1880/count").then((res)=>{
      let temp = res.data[0].usersCount;
      this.props.setCount(temp)
      
      let pagesCount = Math.ceil(temp/this.props.usersPerPage);
      this.props.setPagesCount(pagesCount)
    })
  }
  setPage(number){
  this.props.setPage(number)
  axios.get(`http://server.fsvsgroup.com:1880/user?page=${number}&count=${this.props.usersPerPage}`).then((res) => {
    this.props.setUsers(res.data);
    
  });
  }
  render() {
   
    let pagesCount = [];
    for(let i=1; i<=this.props.pagesCount; i++){
      pagesCount.push(i)
    }
    
    let users = this.props.users.map((M) => {
      let temp;
      let tempCallBack;
      let userImg;
      if (M.sex === 1) {
        userImg = avaM;
      } else {
        userImg = avaF;
      }
      if (M.followed === 1) {
        temp = "unfollow";
        tempCallBack = () => {
          this.props.unfollow(M.id);
        };
      } else {
        temp = "follow";
        tempCallBack = () => {
          
          this.props.follow(M.id);
        };
      }
      return (
        
        <div key={M.id} className={styles.user}>
          <div className={styles.first}>
            <img
              className={styles.img}
              src={userImg}
              alt="something wrong..."
            />
            {M.name} from {M.city} has {M.age} age
          </div>
          <div className={styles.second}>{M.bio}</div>
          <button className={styles.button} onClick={tempCallBack}>
            {temp}
          </button>
        </div>
      );
    });

    return(<div className={styles.main}>
     
      <div>
        {pagesCount.map((K)=>{
          if(K === this.props.currentPage){
            return(<span className={styles.selected}> {K} </span>)
          }else{
            return(<span className={styles.unselected} onClick={()=>{this.setPage(K)}}> {K} </span>)
          }
        })}
      </div>
      {users}
      </div>);
  }
}

export default Users;
