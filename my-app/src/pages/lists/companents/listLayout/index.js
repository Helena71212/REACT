import React from "react";
import PropTypes from "prop-types";
import {v4 as uuid} from "uuid"

import styles from "../listLayout";
import Counter from "../../../../components/counter";
import User from "../../../../components/user";


const ListLayout = ({users, handleDeleteUser}) => {
  return (
    <div>
      <h1>Hello World</h1>

      <div>
         {users.map((user)=> (<User 
         onDelete ={ handleDeleteUser}
         id= {user.id}
         key = {user.id}
         name ={user.name} 
         age = {user.age} />))
      
         }
      </div>
    </div>
  );
};
// ListLayout.propTypes ={
//    users: PropTypes.arrayOf(PropTypes.shape(
//       {
//          Name:PropTypes.string,
//          Age: PropTypes.number
//       }
//    )

//    )
// }

export default ListLayout;
