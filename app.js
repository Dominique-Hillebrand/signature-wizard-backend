const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', (req, res) => {
    const { pin, fullName } = req.body;
    if (fullName && pin === "1337") {
      res.json({ message: "authenticated" });
    } else {
      res.json({ message: "Incorrect PIN" });
    }

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
