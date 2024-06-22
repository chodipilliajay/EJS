import express from "express";

const app = express();
const port = 3000;



app.get("/", (req, res)=>{

    const today = new Date("Jun 16, 2024 11:11:00");
    const day = today.getDay();

    let type = "the weekday";
    let adv = "It's time to work hard."

    if (day ===6 || day === 0) {
        type = "the weekend";
        adv = "It's time to have fun."
    }

    res.render("index.ejs",
        {
            dayType: type,
            advice: adv
        }
    )
})

app.listen(port, () =>{
    console.log("the server is running at the port "+port);
})