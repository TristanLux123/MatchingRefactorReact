import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonItem, IonButtons, IonMenuButton, IonLabel, IonInput, IonGrid, IonButton } from "@ionic/react";

import { homeOutline, newspaperOutline, logOutOutline, informationCircle } from 'ionicons/icons'
import { useState } from "react";


type StartSetter = {
    logName:any
    setBoolean: any
}

export const ButtonSetter: React.FC<StartSetter> = (props:any) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle> Are you ready? </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

            <IonButton expand="full" className="ion-button1" onClick={() => props.setBoolean(true) && props.logName()}> Log Name</IonButton>
            </IonContent>
           
        </IonPage>
    )
}