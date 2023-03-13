import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
// import './/AboutTheDev.css'
import { BeatGame } from "./BeatGame";
type PropsName = {
    name: any,
    points_setter:any
}
export const Phase2:React.FC<PropsName> = (props) => {
    const child_img1: string = "https://images.alphacoders.com/605/thumbbig-605592.webp"
  const child_img2: string = "https://images4.alphacoders.com/128/thumbbig-128706.webp"
  const child_img3: string = "https://images6.alphacoders.com/605/thumbbig-605598.webp"

  const [imgState, setImg] = useState(child_img1)
  const [imgState2, setImg2] = useState(child_img2)
  const [imgState3, setImg3] = useState(child_img3)


  function Swap1() {
    if (imgState === "https://images.alphacoders.com/605/thumbbig-605592.webp") 
    {
      setImg("https://images4.alphacoders.com/128/thumbbig-128706.webp")
    }
    else if (imgState === "https://images4.alphacoders.com/128/thumbbig-128706.webp") 
    {
      setImg("https://images6.alphacoders.com/605/thumbbig-605598.webp")
    }
    else
     {
      setImg("https://images.alphacoders.com/605/thumbbig-605592.webp")
    }
  }

  function Swap2() {
    if (imgState2 === "https://images.alphacoders.com/605/thumbbig-605592.webp") {
      setImg2("https://images4.alphacoders.com/128/thumbbig-128706.webp")
    }
    else if (imgState2 === "https://images4.alphacoders.com/128/thumbbig-128706.webp") {
      setImg2("https://images6.alphacoders.com/605/thumbbig-605598.webp")
    }
    else {
      setImg2("https://images.alphacoders.com/605/thumbbig-605592.webp")
    }
  }


  function Swap3() {
    if (imgState3 === "https://images.alphacoders.com/605/thumbbig-605592.webp") {
      setImg3("https://images4.alphacoders.com/128/thumbbig-128706.webp")
    }
    else if (imgState3 === "https://images4.alphacoders.com/128/thumbbig-128706.webp") {
      setImg3("https://images6.alphacoders.com/605/thumbbig-605598.webp")
    }
    else {
      setImg3("https://images.alphacoders.com/605/thumbbig-605592.webp")
    }
  }
    return(
<> 
<IonToolbar className="ion-button1" color="none"> <IonTitle > KEEP GOING {props.name}! </IonTitle></IonToolbar>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol> <IonImg className='ion-button1' src={imgState} ></IonImg> </IonCol>
            <IonCol> <IonImg  className='ion-button1' src={imgState2} ></IonImg> </IonCol>
            <IonCol> <IonImg  className='ion-button1' src={imgState3} ></IonImg> </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className='ion-button1'>
          <IonRow>
            <IonCol> <IonToolbar  class='myToolbar'  className='ion-button1' >  <IonButton className='ion-button1' color="none" expand='full' class="myButton" onClick={() => Swap1()}> Change</IonButton> </IonToolbar> </IonCol>
            <IonCol>  <IonToolbar   class='myToolbar'  className='ion-button1'> <IonButton className='ion-button1' color="none" expand='full' class="myButton" onClick={() => Swap2()}> Change</IonButton> </IonToolbar></IonCol>
            <IonCol> <IonToolbar  class='myToolbar'  className='ion-button1'> <IonButton className='ion-button1' color="none" expand='full' class="myButton" onClick={() => Swap3()}> Change</IonButton> </IonToolbar> </IonCol>
          </IonRow>
        </IonGrid>

        {imgState === imgState2 && imgState2 === imgState3 &&
            <BeatGame winner_name={props.name}/>
            }
      </IonContent></>

    )
}