const not_found_handler = (req, res, next) => {

    return res.status(404).json({
        success: false,
        message: `La ruta ${req.url} no se encontró.`
    })
}
const method_not_allowed_handler = (req, res, next) => {
    return res.status(405).json({
        success: false,
        response: 'Method Not Allowed',
        message: `El método ${req.method} no está permitido para la ruta ${req.url}.`
    });
}
export { not_found_handler, method_not_allowed_handler };