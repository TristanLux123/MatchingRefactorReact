import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonItem, IonButtons, IonMenuButton, IonLabel, IonInput, IonGrid, IonButton } from "@ionic/react";
import { homeOutline, newspaperOutline, logOutOutline, informationCircle } from 'ionicons/icons'
import { useState } from "react";
import { readSecretFile } from "../../../ManageState/NameState";
import { ButtonSetter } from "./ButtonSetter";
import Phase1 from "../Level1/Phase1";

export const Start: React.FC<any> = () => {
    
    let [name, setName] =  useState("")

    let [control, setControl] = useState(false)
    
    const LogName = async () => {
        let ReadName = await readSecretFile()
        const DisplayName = ReadName
        setName(DisplayName)
    }

   

    return (
        <IonPage>
            
            {control === false &&
          <ButtonSetter setBoolean={setControl} logName={LogName()}  /> //pass control to button component and setState from within
        }

        {control === true &&
        <Phase1 name={name} />}

        </IonPage>
    )
}