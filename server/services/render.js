const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // make a get request to /api/users
    axios.get(`${process.env.Backendurl}/api/users`)
        .then(function(response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).send("Error fetching users");
        });
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get(`${process.env.Backendurl}/api/users`, { params: { id: req.query.id } })
        .then(function(userdata) {
            res.render("update_user", { user: userdata.data });
        })
        .catch(err => {
            console.error("Error fetching user for update:", err);
            res.status(500).send("Error fetching user for update");
        });
}