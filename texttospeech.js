let text= document.getElementById("txt");
let submitBtn =document.getElementById("submit");
// console.log(submitBtn)
let resumeBtn =document.getElementById("resume");
let pauseBtn =document.getElementById("pause");

let audioMessage;

submitBtn.addEventListener("click", ()=>{
    //!set the text
    audioMessage.text= text.value;
    //!speak the text 
    window.speechSynthesis.speak(audioMessage);
})

    resumeBtn.addEventListener("click",()=>{
        pauseBtn.style.display="block";
        resumeBtn.style.display="none";
    //it will resume the audio if it is pause 
        if(SpeechSynthesis.paused){
            speechSynthesis.resume();
        }
    })
    pause.addEventListener("click",()=>{
        pauseBtn.style.display  = "none";
        resumeBtn.style.display = "block";
        //it will pause if it is speaking 
        speechSynthesis.speaking? speechSynthesis.paused(): "" ;})

window.onload =()=>{
    resumeBtn.style.display="none"
    if("speechSynthesis" in window ){
        audioMessage= new SpeechSynthesisUtterance();
    }else{
        alert("speech synthesis is not supported ")
    }
}