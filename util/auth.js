import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'


export const login = ({ token }) => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/common')
}

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/index' })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }

  return token
}

export const logout = () => {
  cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}

// проверка авторизации, аргумент - компонент
export const withAuthSync = WrappedComponent => {

  //из пропсов наиважнейший для нас токен, функция возвратит оборачиваемый компонент добавляя к нему токен
  const Wrapper = props => {
   
    //не понятно, что происходит здесь
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/')
      }
    }

    /*первое монтирование элемента добавляем на событие изменения в хранилище функцию
     * 
     */
    useEffect(() => {
      window.addEventListener('storage', syncLogout)
      // очистка листенера после удаления компанента
      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])


    return <WrappedComponent {...props} />
  }

  Wrapper.getServerSideProps = async ctx => {

    //если токена нема - идёшь логиниться
    const token = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }


  return Wrapper
}
