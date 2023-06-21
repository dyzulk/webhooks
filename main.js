/*
whurl variable should be equal to your webhooks link!


On discord you create a webhook by going to 
the server settings and from there to the 
integrations tab, then click on webhooks and 
press new webhook. Then copy the link and paste it 
in the whurl variable.

Make sure to hide this link using https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
if someone takes this link they can send messages to you with this webhook so make sure to
hide this link!
*/
/* whurl = "https://discord.com/api/webhooks/1098188658735071393/JYKWPYog58B-GyUSBcSo_moNnNPsvDe6BmO2f4H-GURXfJerKYbzFRwPiZTNWVH-TsII" */
var _0x65cb=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x39\x38\x31\x38\x38\x36\x35\x38\x37\x33\x35\x30\x37\x31\x33\x39\x33\x2F\x4A\x59\x4B\x57\x50\x59\x6F\x67\x35\x38\x42\x2D\x47\x79\x55\x53\x42\x63\x53\x6F\x5F\x6D\x6F\x4E\x6E\x4E\x50\x73\x76\x44\x65\x36\x42\x6D\x4F\x32\x66\x34\x48\x2D\x47\x55\x52\x58\x66\x4A\x65\x72\x4B\x59\x62\x7A\x46\x52\x77\x50\x69\x5A\x54\x4E\x57\x56\x48\x2D\x54\x73\x49\x49"];whurl= _0x65cb[0]
var str= "";
var name= "";
function f1(){
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value)
}
function send(){
    f1();
    const msg = {
        "content": str,
        "username": name
    };
    console.log(msg)
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }

} 
