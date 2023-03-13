import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { deleteSecretFile } from "../../../ManageState/NameState";

type BeatTheGame = {
    winner_name: any
}

export const BeatGame: React.FC<BeatTheGame> = (props) => {
    return (
        <>
            <IonHeader>

                <IonToolbar color="none" className="ion-button1">
                    <IonTitle> Congrats {props.winner_name}! </IonTitle>
                </IonToolbar>
               
                    <IonButton className = "ion-button1" href="/home" expand="full" onClick={() => deleteSecretFile}> CLAIM PRIZE </IonButton>
              
            </IonHeader>
        </>

    )
}