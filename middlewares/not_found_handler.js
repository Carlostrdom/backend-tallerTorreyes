const not_found_handler = (req, res, next) => {

    return res.status(404).json({
        success: false,
        message: `The path ${req.url} was not found.`
    })
}
const method_not_allowed_handler = (req, res, next) => {
    return res.status(405).json({
        success: false,
        response: 'Method Not Allowed',
        message: `Method ${req.method} is not allowed for route ${req.url}.`
    });
}
export { not_found_handler, method_not_allowed_handler };