import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/iu/Navbar';

// import { HomeScreen } from '../components/home/HomeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { CharacterScreen } from '../components/heroes/CharacterScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { MarvelVillainsScreen } from '../components/marvel/MarvelVillainsScreen';
import { DcVillainsScreen } from '../components/dc/DcVillainsScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />                  
                    <Route exact path="/marvel/villains" component={ MarvelVillainsScreen } />                          
                    <Route exact path="/character/:characterId" component={ CharacterScreen } />              
                    <Route exact path="/dc" component={ DcScreen } />  
                    <Route exact path="/dc/villains" component={ DcVillainsScreen } />  
                    <Route exact path="/search" component={ SearchScreen } /> 

                    <Redirect to="/marvel" />                 
                </Switch>
            </div> 
        </>
    )   
}
