var express= require('express');
var app=express();
bodyParser= require("body-parser"),
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
var campsites=[
  {Name: "Salmon creek", img: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg"},
  {Name: "Salmon creek", img: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg"},
  {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
  {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
  {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
  {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
  {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
  {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
  {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="}
];

app.get("/",function(req,res){
  res.render('landing.ejs');
})

app.get("/campgrounds/new", function(req,res){
  res.render("new")
})
app.post("/campgrounds",function(req,res){
    var name=req.body.campname;
    var  url=req.body.url;
    campsites.push({Name:name,img:url})
    res.redirect("/campgrounds")
})
app.get("/campgrounds",function(req,res){

  res.render("campgrounds",{campsites:campsites})
})
app.listen(3000,()=>{
  console.log("server is running");
})
