import cookie from 'cookie'

const allowedMethods = ['GET']

export default (req, res) => {
    res.setHeader('Allow', allowedMethods)

    if (!allowedMethods.includes(req.method)) {
        return res.status(405).end()
    }

    res.setHeader('Set-Cookie', cookie.serialize('authorization', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        sameSite: 'strict',
        maxAge: new Date(),
        path: '/'
    }));

    return res.status(200).end()
}