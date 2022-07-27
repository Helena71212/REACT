import React, { useCallback } from 'react';
import { useState } from 'react';
import {mockUsers} from '../../mock';
import ListLayout from '../companents/listLayout';


const ListContainer = () => {
   const[users,setUsers] = useState(mockUsers)
   const handleDeleteUser= useCallback((id)=> {
      setUsers(state=>{
         const usersCopy = [...state];
         const itemIndexToRemove = usersCopy.findIndex((user)=> user.id ===id)
         usersCopy.splice(itemIndexToRemove,1);
         return usersCopy
      })
   },[])
   
   return <ListLayout
    users = {users}
    handleDeleteUser ={handleDeleteUser} />;

  
}
 
export default ListContainer;