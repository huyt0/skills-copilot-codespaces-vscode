// Create web server

const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Skills API!');
});

app.get('/skills', (req, res) => {
    const skills = skillsMember();
    res.json(skills);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});






