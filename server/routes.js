import express from 'express';
import osmosis from 'osmosis';
const routes = express();

routes.get('/', (req, res) => {
    let savedData = [];
    // res.json({
    //     message: 'working'
    // });
let fundata = [];
    osmosis.get('https://www.basketball-reference.com/draft/NBA_2012.html')
        .find('table.stats_table  tbody tr')
        .set({
            title: 'th',
            Tm: 'td[2]',
            player: 'td[3]',
            College: 'td[4]',
        })
        // .data(stats => console.log(stats.data.length))
        .data(function(data) {
            console.log(data);
            savedData.push(data);
        } )
        .log(console.log)
        .done(()=>res.json(savedData))
    console.log(fundata)

});

export default routes;
