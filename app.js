const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', (req, res) => {
    const { pin } = req.body;
    if (pin === "1337") {
        res.json({ message: 'PIN is correct!' });
    } else {
        // res.status(400).json({ message: 'Incorrect PIN' });
        res.json({ message: 'Incorrect PIN :(' });
    }

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
