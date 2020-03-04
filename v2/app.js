var express= require('express');
var app=express();
var mongoose=require('mongoose');
var bodyParser= require("body-parser");
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser: true});
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
//schema
var campgroundSchema= new mongoose.Schema({
  Name: String,
  img: String,
  description: String
});

var Campground=mongoose.model("Campground",campgroundSchema);

// var campsites=[
//   {Name: "Salmon creek", img: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg"},
//   {Name: "Salmon creek", img: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg"},
//   {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
//   {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
//   {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
//   {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
//   {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
//   {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="},
//   {Name: "Salmon creek", img: "https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI="}
// ];

app.get("/",function(req,res){
  res.render('landing.ejs');
})

app.get("/campgrounds/new", function(req,res){
  res.render("new")
})
app.post("/campgrounds",function(req,res){
    var name=req.body.campname;
    var  url=req.body.url;
    var desc=req.body.description;
    var newCampground={Name:name,img:url,description: desc};
    Campground.create(newCampground
    ,function(err,campground){
      if(err){
        console.log(err);
      } else{
        console.log("newly created campground");
        console.log(campground);
      }
    })
    res.redirect("/campgrounds")
})
app.get("/campgrounds",function(req,res){
  Campground.find({},function(err,allcampgrounds){
    if(err)
      console.log(err);
    else {
        res.render("campgrounds",{campsites:allcampgrounds})
    }
  })

});
app.get("/campgrounds/:id", function(req,res){
  var id=req.params.id;
  Campground.findById(id,function(err,foundit){
    if(err){
      console.log(err);
    }else{
      res.render("show",{campground:foundit});
    }
  })
})
app.listen(3000,()=>{
  console.log("server is running");
})
