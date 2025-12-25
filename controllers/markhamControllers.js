const homePage = (req,res)=>{
    res.send("<h1 style='color = red'> Welcome to homepage of the Markham <h1>");
};

const noticePage = (req,res)=>{
    res.send("<h1 style='color = green'> Welcome to Notice page of the Markham <h1>");
};

const registerPage = (req,res)=>{
    res.send("well well ..... you are now registered in Markham college of commerce ");
}

const loginPage = (req,res)=>{
    res.send("<h1style = 'text alingment = center'> you are logged in <h1>")
}
module.exports = {homePage,noticePage,registerPage,loginPage};