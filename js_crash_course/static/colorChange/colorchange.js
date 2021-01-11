let all_btn = document.getElementsByTagName('button');
const copy_btn_color = new Array('btn-primary','btn-danger','btn-warning','btn-success');

// for (let i = 0; i < all_btn.length; i++) {
//      copy_btn_color.push(all_btn[i].classList[0]);    
// }
// console.log(copy_btn_color);


function buttonColorChange(selectedThing){
      if (selectedThing.value == "green") {
        changeToGreen();
      }
      else if (selectedThing.value == "red") {
        changeToRed();
      }
      else if (selectedThing.value == "reset") {
          Reset();
      }
      else {
        RandomColorPicker();
      }
}

function changeToGreen(){
    
    for (let i = 0; i < all_btn.length; i++) {
        
        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add("btn-success");        
    }

}

function changeToRed(){
    
    for (let i = 0; i < all_btn.length; i++) {

        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add("btn-danger");        
    }
}

function Reset(){
    for (let i = 0; i < all_btn.length; i++) {
        // console.log(copy_btn[i].classList[1]);

        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(copy_btn_color[i]);        
    }
}

function RandomColorPicker(){
     let choise = ['btn-primary','btn-danger','btn-warning','btn-success'];

     for (let i = 0; i < all_btn.length; i++) {
        let index = Math.floor(Math.random()*4);

        all_btn[i].classList.remove(all_btn[i].classList[1]);
        all_btn[i].classList.add(choise[index]);        
    }
}