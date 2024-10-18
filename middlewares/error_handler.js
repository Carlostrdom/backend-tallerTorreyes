const error_handler = (error, req, res, next) => {
    console.log(error);

    if (error.status) {
        return res.status(400).json({
            success: false,
            response: error.message || 'Bad Request',
            message: 'Incorrect request, please review the data sent.'
        });
    }

    return res.status(500).json({
        success: false,
        response: error.message || error,
        message: 'Internal Server Error'
    });
}

export default error_handler;