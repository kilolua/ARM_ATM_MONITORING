import React, {FC, useContext, useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import LoginForm from '../../widgets/login/LoginForm'
import {Context} from '../../index'
import MainSessionPage from '../mainSessionPage/MainSessionPage'
import Loading from "../../shared/ui/Loading";

const Main: FC = () => {
    const {store} = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        store.checkAuth().then(()=>{
            setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    return <div>{store.isAuth ? <MainSessionPage/> : <LoginForm/>}</div>
}

export default observer(Main)
