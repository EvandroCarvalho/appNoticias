import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Initial from './componet/initial';
import NewsPage from './componet/newsPage';

export default router = () => (
    <Router>
        <Scene key='root' navigationBarStyle={{backgroundColor: '#002939'}} backButtonImage = {require('./img/back.png')} titleStyle={{ color: '#FFF', textAlign: 'center', flex: 1 }} >
            <Scene key='initial' component = { Initial } title = 'NEWS'/>
            <Scene key='newsPage' component = { NewsPage } />
        </Scene>
    </Router>
)
