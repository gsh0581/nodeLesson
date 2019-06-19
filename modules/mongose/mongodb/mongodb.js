const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animal', {useNewUrlParser: true});

const Cat = mongoose.model('Cat',{name:String});

const kitty = new Cat({name:'hello'});
kitty.save().then((result) => {
    console.log(result)
});
Cat.update({name:'hello'},{name:'xiaobai'},(err)=>{
    console.log(err)

})