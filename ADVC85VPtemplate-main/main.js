canvas=document.getElementById("canvass");
ctx = canvas.getContext("2d");

img_width = 150;
img_height = 200;

var img_image;

img_x = 100;
img_y = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	bckimg_imgTag = new Image(); //defining a variable with a new image
    bckimg_imgTag.onload = upload_1; // setting a function, onloading this variable
    bckimg_imgTag.src = background_image; // load image
    
    
	carimg_imgTag = new Image(); //defining a variable with a new image
    carimg_imgTag.onload = upload_2; // setting a function, onloading this variable
    carimg_imgTag.src = greencar_image; // load image
}

function upload_1() {
	ctx.drawImage(bckimg_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_2() {
	ctx.drawImage(carimg_imgTag, img_x, img_y, 80, 100);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
function up() {
    if (img_y >= 0) {
        img_y = img_y - 10;
        upload_1();
        upload_2();
    }
}

function down() {
    if (img_y <= 500) {
        img_y = img_y + 10;
        upload_1();
        upload_2();
    }
}

function left() {
    if (img_x >= 0) {
        img_x = img_x - 10;
        upload_1();
        upload_2();
    }
}

function right() {
    if (img_x <= 700) {
        img_x = img_x + 10;
        upload_1();
        upload_2();
    }
}