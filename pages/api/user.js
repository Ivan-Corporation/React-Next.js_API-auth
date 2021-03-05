import data from '../../data'

const allowedMethods = ['GET']

export default (req, res) => {
    res.setHeader('Allow', allowedMethods)

    if (!allowedMethods.includes(req.method)) {
        return res.status(405).end()
    }

    const name = req.cookies.authorization;

    if (!name) {
        return res.status(404).end()
    }

    const { email } = data.find(user => user.name === name)

    return res.status(200).json({
        name,
        email
    })
}