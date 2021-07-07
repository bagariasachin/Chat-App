import React from 'react';
import { Drawer,Button,Divider, Alert } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import EditableInput from './EditableInput';
import ProviderBlock from './ProviderBlock';
import AvatarUploadBtn from './AvatarUploadBtn';
import {  getUserUpdates } from '../../misc/helpers';

const Dashboard = ({onSignOut}) => {
   
    const {profile} = useProfile();
    const onSave = async (newData) => {
       

        try{
           
            const updates = await getUserUpdates(profile.uid, 'name' , newData, database);
           
            await database.ref().update(updates)

            Alert.success('Nickname has benn updated ' , 3000);
        }
        catch (err){
            Alert.error(err.message,3000)

        }
    }

    return (
        <>
            <Drawer.Header>
                <Drawer.Title>
           Dashboard
                </Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
                <h3>Hello {profile.name}</h3>
                <ProviderBlock/>
                <Divider/>
                <EditableInput 
                name='nickname'
                initialValue={profile.name}
                onSave={onSave}
                label= {<h6 className='mb-2'>Nickname</h6>}
                
                />
                <AvatarUploadBtn / >
            </Drawer.Body>

            <Drawer.Footer>
         <Button block  color='red' onClick={onSignOut} >SignOut</Button>
            </Drawer.Footer>
</>
    )
}

export default Dashboard
