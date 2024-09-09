const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username,},
            {headers:{"private-key": "3b78bd82-ef48-49fc-ac0c-65edb6aa178d"}}
        )
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response?.status || 500).json(error.response?.data || "Unknown error");
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});