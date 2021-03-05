import axios from 'axios'

const allowedMethods = ['GET']

export default async (req, res) => {
    res.setHeader('Allow', allowedMethods)

    if (!allowedMethods.includes(req.method)) {
        return res.status(405).end()
    }

    const {
        query
    } = req

    const {
        code
    } = query

    if (!code) {
        res.status(404).end()
    }

    const url = 'https://github.com/login/oauth/access_token'

    try {
        // Fetch access token from Github using code
        const { data } = await axios.post(url, {
            client_id: '6032b552aea1c954232e',
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
        }, {
            headers: {
                'Accept': 'application/json'
            }
        })

        if (!data.access_token) {
            throw new Error('No access token found.')
        }

        // Fetch user taken using access token
        const githubData = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `token ${data.access_token}`
            }
        })

        return res.json(githubData.data)

    } catch (e) {
        console.log(e)
        return res.status(500).end()
    }
}