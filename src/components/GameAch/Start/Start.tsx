import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonItem, IonButtons, IonMenuButton, IonLabel, IonInput, IonGrid, IonButton } from "@ionic/react";
import { homeOutline, newspaperOutline, logOutOutline, informationCircle } from 'ionicons/icons'
import { useState } from "react";
import { readSecretFile } from "../../../ManageState/NameState";
import { ButtonSetter } from "./ButtonSetter";
import Phase1 from "../Level1/Phase1";
import { AppContext } from "../../../ManageState/Context";
import { useContext } from "react";
export const Start: React.FC<any> = () => {
    

    const { name, setName } = useContext(AppContext);

    let [control, setControl] = useState(false)
    
    const LogName = async () => {
        let ReadName = await readSecretFile()
        const DisplayName = ReadName
        setName(DisplayName)
    }

   

    return (
        <IonPage>
            
            {control === false &&
            <IonHeader>
                <IonToolbar>
                <IonButton expand="full" className="ion-button1" onClick={() => {setControl(true);}}> Log Name</IonButton>
                </IonToolbar>
            </IonHeader>
        }

        {control === true &&
        <Phase1 name={name} />}

        </IonPage>
    )
}