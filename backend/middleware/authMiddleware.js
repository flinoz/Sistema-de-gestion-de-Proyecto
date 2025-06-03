const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Acceso denegado' });

    try {
        const decoded = jwt.verify(token, 'secret_jwt_key');
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Token inválido' });
    }
};