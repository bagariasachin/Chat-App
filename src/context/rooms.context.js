import React , { createContext, useState ,useEffect, useContext } from "react";
import { database } from "../misc/firebase";
import { transformToArrWithId } from "../misc/helpers";

const RoomsContext = createContext();

export const RoomsProvider = ( {children}) => {
    const [rooms , setRooms] = useState(null);

    useEffect( () => {
        const roomListRef = database.ref('rooms');

        roomListRef.on('value' , snap => {
            // console.log('before transform', snap.val())
            const data = transformToArrWithId(snap.val());
            // console.log('after transform', data)
            setRooms(data)
        });
        return () => {
            roomListRef.off();
        }
       
    },[])

    return <RoomsContext.Provider value={rooms} >{children}</RoomsContext.Provider>
}

export const useRooms = () => useContext(RoomsContext);
