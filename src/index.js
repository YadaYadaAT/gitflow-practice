const express = require('express'); 
const app = express(); 
const PORT = 3000; 
app.get('/', (req,res) ='Hello, team!')); 
app.listen(PORT, () => 'Server running on port ${PORT}')); 

// test edit