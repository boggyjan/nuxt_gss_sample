const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: [
    'http://localhost:5438',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}

const app = express()
app.use(cors(corsOptions))

// users router
const usersRouter = express.Router()
usersRouter.use(function (req, res, next) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify([
    {
      uid: '123',
      name: 'Paul'
    },
    {
      uid: '223',
      name: 'Miyamoto Satoshi'
    },
    {
      uid: '323',
      name: 'Chou Yun On'
    },
    {
      uid: '423',
      name: 'Michael'
    }
  ]))

  next()
})
app.use('/api/users', usersRouter)

// user/uid router
const userRouter = express.Router()
userRouter.use(function (req, res, next) {
  const userInfo = {
    '123': {
      name: 'Paul',
      age: 23,
      location: 'Canada'
    },
    '223': {
      name: 'Miyamoto Satoshi',
      age: 65,
      location: 'Okayama'
    },
    '323': {
      name: 'Chou Yun On',
      age: 12,
      location: 'Seoul'
    },
    '423': {
      name: 'Michael',
      age: 47,
      location: 'London'
    }
  }

  const uid = req.url.replace(/\//g, '')

  if (userInfo[uid]) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(userInfo[uid]))
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'User not found' }))
  }

  next()
})
app.use('/api/user', userRouter)

// listen port
app.listen(8888)

console.log('API server is running...')