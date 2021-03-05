const allowedMethods = []
export default (req, res) => {
    res.setHeader('Allow', allowedMethods)
    if (!allowedMethods.includes(req.method)) {
        return res.status(405).end()
    }
    return res.status(200).end()
}