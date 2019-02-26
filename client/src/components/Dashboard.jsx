import React, { Component } from 'react';
import Auth from '../modules/Auth';
import AddMonsterForm from './AddMonsterForm';


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            myMonsters: null,
            monstersLoaded: false,
        }
    }

    componentDidMount() {
        this.getUserMonsters();
    }

    getUserMonsters() {
        fetch('profile', {
            method: 'GET',
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`,
            }
        }).then(res => res.json())
            .then(res => {
                this.setState({
                    myMonsters: res.monsters,
                    monstersLoaded: true,
                })
            }).catch(err => console.log(err));
    }

    addMonster(e,data){
        fetch('/monsters',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                token: Auth.getToken(),
                'Authorization':`Token ${Auth.getToken()}`,
            },
            body: JSON.stringify({
                monster: data,
            }),
        }).then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.getUserMonsters();
        }).catch(err=> console.log(err));
    }


    render() {
        return (
            <div className="dash">
            <AddMonsterForm addMonster={this.addMonster}/>
                {(this.state.monstersLoaded)
                    ? this.state.myMonsters.map(monster => {
                        return <h1 key={monster.id}>{monster.name}</h1>
                    })
                    : <p>Loading...</p>}
            </div>
        )
    }
}


export default Dashboard;