import { IonPage, IonHeader, IonToolbar,IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonItem, IonButtons, IonMenuButton, IonLabel, IonInput, IonGrid, IonButton, IonIcon, IonCol } from "@ionic/react";
 import {home, informationCircle} from 'ionicons/icons'
 
 export const Menu: React.FC<any> = () => {

     return( 
         <>
         <IonMenu contentId="main-content">
           <IonHeader>
             <IonToolbar>
               <IonTitle>Directory</IonTitle>
             </IonToolbar>
           </IonHeader>
           <IonContent className="ion-padding">


           <IonItem > 
             <IonGrid>
               <IonCol> <IonIcon icon= {home} /> </IonCol>
               <IonCol> <a href="/home"> Home</a> </IonCol>
               <IonCol> </IonCol>
             </IonGrid>
           </IonItem>


           <IonItem> 
             <IonGrid >
               <IonCol > <IonIcon icon= {informationCircle} /> </IonCol>
               <IonCol> <a href="/aboutme"> About The Dev</a> </IonCol>
               <IonCol> </IonCol>
             </IonGrid>
           </IonItem>

           </IonContent>
         </IonMenu>

       </>
     )
 }