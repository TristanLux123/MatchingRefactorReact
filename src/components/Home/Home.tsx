import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenu, IonMenuButton, IonPage, IonSplitPane, IonText, IonTitle, IonToolbar } from '@ionic/react';
 import { useState } from 'react';
 import { CreateAnimation } from '@ionic/react';
 import './Home.css';
 import { useContext } from 'react';
 import React from 'react';
 import { readSecretFile } from '../../ManageState/NameState';
 import { writeSecretFile } from '../../ManageState/NameState';
 import { Menu } from './Menu/Menu';


 type NameProps =
 {
   name_p: any,
   name_setter:any
 }

 const Home: React.FC<NameProps> = (props) => {

   const [InitialHref, setHref] = useState("/start")

   const [input_name, setName] = useState("")
   const [last_name, setLastName] = useState("")



   function Validate (first_namep:string, last_namep:string):boolean {

     var returning:any = undefined
     if (first_namep.trim() === "" ) {
       returning = false
     }else if(last_name.trim() === ""){
       returning = false
     }else{
       returning = true
     }
     return returning
   }


   return (

     <>
     {/* Add menu to home page */}
     <Menu/> 


     <IonPage id="main-content">

         <IonHeader>
           <IonToolbar>
           <IonButtons slot="start">
               <IonMenuButton></IonMenuButton>
             </IonButtons>
             <IonTitle>  The Matching Game </IonTitle>
           </IonToolbar>
         </IonHeader>


         <IonContent fullscreen>

           <IonItem>
             <IonLabel color="tertiary"> |FIRST NAME| </IonLabel>
             <IonInput placeholder='*Required*'
               onIonChange={(e: any) => setName(e.target.value)} />
           </IonItem>

           <IonItem>
             <IonLabel color="tertiary"> |LAST NAME| </IonLabel>
             <IonInput placeholder='*Required*'
               onIonChange={(e: any) => setLastName(e.target.value)} />
           </IonItem>

           {/* MISSING NAME FIELD */}
           {Validate(input_name, last_name) === false &&
             <> <IonGrid className='p1' >

               <p > --------------------------</p>
               <p>  MISSING NAME FIELD </p>
               <p> --------------------------</p>

             </IonGrid>
                </>}

           {/* NAME FIELD VALID */}
           {Validate(input_name, last_name) === true &&
             <><IonButton 
             className='ion-button1'
               onClick={() => writeSecretFile(input_name)}
               expand="block"
               href={InitialHref}> Submit </IonButton>
             </>}

         </IonContent>
       </IonPage></>
   );
 };

 export default Home;