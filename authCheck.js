function authVerify(req, res, next){
    if(req.user.role != "admin"){
        res.status(403);
        return res.send('Insufficient Permissions');
    }
    next();
}

module.exports = {
    authVerify
} 