module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`NTaskAPI is running on ${app.get('port')}`)
    })
}