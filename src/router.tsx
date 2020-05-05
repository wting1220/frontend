import Content from './views/content'
import Topic from './views/topic'
import Main from './views/main'
import Article from './views/article'
import White from './views/white'
import Message from './views/message'
import Detail from './views/detail'
import Theme from './views/theme'
import Events from './views/events'
import User from './views/user'
import Search from './views/search'
import UserSetting from './components/user/userSetting'
import UserInfo from './components/user/userInfo'
import ThemeList from './components/theme/themeList'
import ThemeDetail from './components/theme/themeDetail'
import Profile from './components/user/usersetting/profile'
import Password from './components/user/usersetting/password'
import Mail from './components/user/usersetting/mail'

const routes = [
  {
    component: White,
    routes: [
      {
        path: '/',
        component: Main,
        routes: [
          {
            path: '/',
            exact: true,
            component: Content,
          },
          {
            path: '/welcome/:label?/:child?',
            name: 'welcome',
            component: Content,
          },
          {
            path: '/topic',
            name: 'topic',
            component: Topic,
          },
          {
            path: '/theme',
            name: 'theme',
            component: Theme,
            routes: [
              {
                path: '/theme',
                name: 'themelist',
                exact: true,
                component: ThemeList,
              },
              {
                path: '/theme/:tid',
                name: 'themedetail',
                exact: true,
                component: ThemeDetail,
              }
            ]
          },
          {
            path: '/events',
            name: 'events',
            component: Events,
          },
          {
            path: '/message/:type?',
            name: 'message',
            component: Message,
          },
          {
            path: '/search',
            name: 'search',
            component: Search,
          },
          {
            path: '/user',
            name: 'user',
            component: User,
            routes: [
              {
                path: '/user/setting/:type?',
                name: 'setting',
                component: UserSetting,
                routes: [
                  {
                    path: '/user/setting/profile',
                    name: 'profile',
                    component: Profile,
                  },
                  {
                    path: '/user/setting/password',
                    name: 'password',
                    component: Password,
                  },
                  {
                    path: '/user/setting/mail',
                    name: 'mail',
                    component: Mail,
                  },
                ]
              },
              {
                path: '/user/:uid/:type?',
                name: 'info',
                component: UserInfo,
              }
            ]
          },
          {
            path: '/detail/:aid?',
            name: 'detail',
            component: Detail,
          },
          {
            path: '/article',
            name: 'article',
            component: Article,
          },
        ]
      },
    ],
  }
]


//   // 404页面
//   {path: '/404', component: NotFound, auth: false}

export default routes
