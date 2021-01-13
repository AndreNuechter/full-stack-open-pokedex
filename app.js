const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/health', (_, res) => {
    res.send('ok');
});

app.get('/version', (_, res) => {
    res.send('1');
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server listening on port ${PORT}`);
});