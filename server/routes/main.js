const express = require('express');
const router = express.Router();
const Score = require('../models/scoremoebel');

function insertScore(data) {
    const score = new Score(data);
    score.save()
        .then((result) => {
            console.log('Score inserted');
        })
        .catch((err) => {
            console.log(err);
        });
}

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

router.get('/send', (req, res) => {
    insertScore({ username: req.query.username, score: req.query.score, time: req.query.time, avlbcorners: req.query.avlbcorners });
    res.redirect('/');
});

router.get('/scores', (req, res) => {
    Score.find()
        .then((result) => {
            res.render('scores', { title: 'All Scores', scores: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/how-to-play', (req, res) => {
    res.render('how-to-play', { title: 'How to play' });
});

module.exports = router;