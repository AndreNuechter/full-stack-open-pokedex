const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/version', (_, res) => {
    res.send('1');
});

app.get('/health', (_, res) => {
    res.send('ok');
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server listening on port ${PORT}`);
});