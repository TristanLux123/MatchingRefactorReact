import React, { useContext, useState } from 'react';
 import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
//  import './Grid.css';
//  import './Home.css'
 import { Phase2 } from './Phase2';
 import { homeOutline, informationCircle, personCircle } from 'ionicons/icons'

 import level1_pic1 from "../Level1/ImagesL1/level1_pic1.jpeg"
 import level1_pic2 from "../Level1/ImagesL1/level1_pic2.jpg"
 import level1_pic3 from "../Level1/ImagesL1/level1_pic3.jpg"


 type PropsTypes = {
   name: any,
 }

 const Phase1: React.FC<PropsTypes> = (props) => {
   // IMAGE STATE INFO
   const img1: string = level1_pic1
   const img2: string = level1_pic2
   const img3: string = level1_pic3

   const [imgState, setImg] = useState(img1)
   const [imgState2, setImg2] = useState(img2)
   const [imgState3, setImg3] = useState(img3)

   // SWAP IMAGES FUNCTIONS
   function Swap1() {
     if (imgState === img1) {
       setImg(img2)
     }
     else if (imgState === img2) {
       setImg(img3)
     }
     else {
       setImg(img1)
     }
   }

   function Swap2() {
     if (imgState2 === img2) {
       setImg2(img3)
     }
     else if (imgState2 === img3) {
       setImg2(img1)
     }
     else {
       setImg2(img2)
     }
   }

   function Swap3() {
     if (imgState3 === img3) {
       setImg3(img1)
     }
     else if (imgState3 === img1) {
       setImg3(img2)
     }
     else {
       setImg3(img3)
     }
   }

 // Points
 const [points, setPoints] = useState(10)

   return (


      <>

      <IonHeader >
       <IonToolbar  >
           <IonGrid >
             <IonCol className='ion-col-right'  > <IonIcon  icon= {personCircle} /> {props.name}  </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonCol> </IonCol>
             <IonTitle> Match The Photos </IonTitle>
           </IonGrid>

       </IonToolbar>
      </IonHeader>



       <IonContent>

       <IonGrid className='ion-button1'>
           <IonRow>
             <IonCol> <IonImg src={imgState} ></IonImg> </IonCol>
             <IonCol> <IonImg   src={imgState2} ></IonImg> </IonCol>
             <IonCol> <IonImg   src={imgState3} ></IonImg> </IonCol>
           </IonRow>


           <IonRow  >
             <IonCol > <IonToolbar class='myToolbar' className = "ion-button1">  <IonButton  color="none" expand='full' class="myButton" onClick={() => Swap1()}> Change</IonButton> </IonToolbar> </IonCol>
             <IonCol >  <IonToolbar class='myToolbar' className = "ion-button1" > <IonButton  color="none" expand='full' class="myButton" onClick={() => Swap2()}> Change</IonButton> </IonToolbar></IonCol>
             <IonCol> <IonToolbar class='myToolbar'  className = "ion-button1" > <IonButton  color="none" expand='full' class="myButton" onClick={() => Swap3()}> Change</IonButton> </IonToolbar> </IonCol>
           </IonRow>
         </IonGrid>

         {imgState === imgState2 && imgState2 === imgState3 &&
           <Phase2 points_setter={setPoints} name={props.name} /> //pass name to cAch1ildren
         }

       </IonContent></>





   );
 }
 export default Phase1;