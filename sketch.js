var database ,dog,dog1,dog2
var position
//var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
  bathImg = loadImage("images/Wash Room.png")
  bedImg = loadImage("images/Bed Room.png")
  vaccinationlistImg = loadImage("images/dogVaccination.png")
  vaccinationImg = loadImage("images/Vaccination.png")
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
  
 

  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
feed = createButton("FEED DRAGO")
feed.position(500,15)
feed.mousePressed(FeedDog)
add = createButton("ADD FOOD")
add.position(400,15)
add.mousePressed(AddFood)
bath1 = createButton("TAKE A BATH")
bath1.position(300,15)
bath1.mousePressed(bath)
bed1 = createButton("SLEEPING TIME")
bed1.position(200,15)
bed1.mousePressed(bed)
vaccinationlist1 = createButton("VACCINATION LIST")
vaccinationlist1.position(100,15)
vaccinationlist1.mousePressed(vaccinationlist)
vaccination1 = createButton("TAKE A BATH")
vaccination1.position(600,15)
vaccination1.mousePressed(vaccination)
} 



function draw(){
 { background(46,139,87);
 foodobject.display()
 
 }
 drawSprites();
  
  fill(255,255,254);
 textSize(15);

  // text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
 
  //add styles here
drawSprites();
}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
  console.log(position.x);
  
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').set({
    'Food': nazo
  })

}
function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}
function FeedDog(){

dog.addImage(dogimg2)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}
function bath(){

  dog.addImage(bathImg)

  
  }
  function bed(){

    dog.addImage(bedImg)
  
    
    }
    function vaccinationlist(){

      dog.addImage(vaccinationlistImg)
    
      
      }
      function vaccination(){

        dog.addImage(vaccinationImg)
      
        
        }
