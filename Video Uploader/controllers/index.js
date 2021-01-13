exports.index = function(req, res, next){
    res.render('index', {title: 'Video Uploader'});
}