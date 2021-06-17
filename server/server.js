const exp = require('express');
const app = exp();


const path = require('path');
const port = process.env.PORT || 3000;
app.use(exp.static(path.join(__dirname, "..", "build")));
app.use(exp.static("public"));



// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });
