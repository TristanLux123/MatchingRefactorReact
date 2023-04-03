import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonItem, IonButtons, IonMenuButton, IonLabel, IonInput, IonGrid, IonButton } from "@ionic/react";

import { homeOutline, newspaperOutline, logOutOutline, informationCircle } from 'ionicons/icons'
import { Menu } from "../Home/Menu/Menu";
import { Card } from "./CardAboutMe";

export const AboutMe: React.FC<any> = (props) => {
    
    return (
        <><Menu />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>
                            About Me
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                    <IonContent>
                        <Card/> 
                    </IonContent>
            </IonPage></>
    )
}