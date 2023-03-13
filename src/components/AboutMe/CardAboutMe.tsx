import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonItem, IonButtons, IonMenuButton, IonLabel, IonInput, IonGrid, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
 import AboutMePhoto from "./Images/AboutMePhoto.png"

 export const Card: React.FC<any> = (props) => {
     return (
         <><div>

         </div>
         <IonCard className="ion-button1">
       <img  alt="Silhouette of mountains" src={AboutMePhoto} />
       <IonCardHeader>
         <IonCardTitle className="ion-card-title">Tristan Lux </IonCardTitle>
         <IonCardSubtitle  className="ion-card-title">CSC Major at Gateway CC</IonCardSubtitle>
       </IonCardHeader>

       <IonCardContent className="ion-card-title">
        This is an app that displays the foundational knowledge required to build an Ionic React Application
       </IonCardContent>
     </IonCard></>
     )
 }