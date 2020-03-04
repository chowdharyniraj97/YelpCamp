var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema=new mongoose.Schema({
  name: String,
  age: Number
});

var Cat= mongoose.model("Cat",catSchema);

var george=new Cat({
  name: "george",
  age: 11
});

george.save(function(err,cat){
    if(err)
    console.log("something went wrong");
    else {
      console.log("data inserted");
      console.log(cat);
    }
})
