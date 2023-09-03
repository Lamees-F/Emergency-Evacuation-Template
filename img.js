var btns = document.querySelector('#btncontiner');
var img = document.querySelector('.imgcontainer');
var body = document.getElementsByTagName('body');

const data = ['C102.png','C103.png','C104.png','C105.png','C107.png',
'C108.png','C109.png','C123.png','C125.png','C128.png',
'C201.png','C202.png','C203.png','C204.png','C205.png',
'C206.png','C207.png','C208.png','C209.png','C210.png',
'C211.png','C215.png','C220.png','C222.png','C224.png'
];

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const btnid=button.id;
        //console.log(btnid);
        if (data.includes(btnid)){
            btns.style.display='none';
            img.style.display='block';
            document.getElementById('photo').src='images/'+btnid;
        }
        else{
            console.log("The image is not in the array:(!");
        }
    })
});
function destroy(){
    btns.style.display='none';
    img.style.display='none';
}
function building(){
    img.style.display='none';
    btns.style.display='block';
}