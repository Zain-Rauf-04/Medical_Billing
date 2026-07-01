const express = require("express"); // Express Package
const app = express(); 
const path = require("path"); // Path Package
const expressLayouts = require('express-ejs-layouts');  // Express EJS Layout

// EJS configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// Static File configuration
app.use(express.static(path.join(__dirname, "public")))
app.use(expressLayouts);

// default layout
app.set("layout", "layouts/main");

// Server request listing
let port = 8080;
app.listen(port, () => {
    console.log(`Application Successfully listening on port ${port}`)
})

//  ------------ Routes
// Main root
app.get("/", (req, res) => {
    res.redirect("/dashboard");
})
// Other Roots
app.get("/dashboard", (req, res) => {
    res.render("./pages/dashboard", {
        title: "Medical Pro - Dashboard",
        stylesheets: ['sidebar_navbar.css', 'dashboard.css']
    })
})
app.get("/patients", (req, res) => {
    res.render("./pages/patients", {
        title: "Medical Pro - Patients",
        stylesheets: ['sidebar_navbar.css', 'patients.css'],
    })
})
app.get("/patients/:patientId", (req, res) => {
    res.render("./pages/profile", {
        title: "Medical Pro - Add New Patient",
        stylesheets: ['sidebar_navbar.css', 'profile.css'],
    })
})
app.get("/appointments", (req, res) => {
    res.render("./pages/appointments", {
        title: "Medical Pro - Appointments",
        stylesheets: ['sidebar_navbar.css', 'appointments.css']
    })
})
app.get("/billings", (req, res) => {
    res.render("./pages/billings", {
        title: "Medical Pro - Billings",
        stylesheets: ['sidebar_navbar.css', 'billings.css']
    })
})
app.get("/insurances", (req, res) => {
    res.render("./pages/insurances", {
        title: "Medical Pro - Insurance",
        stylesheets: ['sidebar_navbar.css', 'insurances.css'],
    })
})
app.get("/reports", (req, res) => {
    res.render("./pages/reports", {
        title: "Medical Pro - Reports",
        stylesheets: ['sidebar_navbar.css', 'reports.css']
    })
})
app.get("/managements", (req, res) => {
    res.render("./pages/managements", {
        title: "Medical Pro - Management",
        stylesheets: ['sidebar_navbar.css', 'managements.css']
    })
})
app.get("/claims", (req, res) => {
    res.render("./pages/claims",{
        title: "Medical Pro - Add New Claims",
        stylesheets: ['sidebar_navbar.css', 'claims.css']
    })
})
app.get("/settings", (req, res) => {
    res.render("./pages/settings",{
        title: "Medical Pro - Settings",
        stylesheets: ['sidebar_navbar.css', 'settings.css']
    })
})