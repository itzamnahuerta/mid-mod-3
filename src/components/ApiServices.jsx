import React, { Component } from 'react'
import '../App.css'
import axios from 'axios';
// import Brooklyn from './Brooklyn';


// law_cat_cd
// ofns_desc
// pd_desc
// prem_typ_desc
// vic_race

export default class ApiServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apidata: [],
      queens: [],
      brooklyn: [],
      bronx: [],
      statenIsland: []
    }
  }

  componentDidMount() {
    this.getNycComplaints();
  }


  getNycComplaints = async() => {
    try {
      const res = await axios.get(`https://data.cityofnewyork.us/resource/qgea-i56i.json`)

      if(res.data && res.data.length > 0 ){
        this.setState({apidata: res})
      };
    } catch(e) {
      console.log('nyc complaint history error => ', e)
    }
  }

  renderDataByLocation = (location) => {
  let list = [];
    if(this.state.apidata.data && this.state.apidata.data.length > 0) {
      console.log("im hurr",this.state.apidata.data)
      this.state.apidata.data.map(item => {
        if(item.boro_nm === location) {
          console.log("render data queens only", item)
          return (list.push(
          <div className="item-container"> 
            <p>{item.boro_nm} </p>
            <p>{item.law_cat_cd} </p>
            <p>{item.ofns_desc} </p>
            <p>{item.pd_desc} </p>
            <p>{item.prem_typ_desc} </p>
            <p>{item.vic_race} </p>
          </div>
          )
      ) }
      })
    }
    return list;
  }

  render() {
    let queensData = this.renderDataByLocation('QUEENS');
    let brooklynData = this.renderDataByLocation('BROOKLYN');
    let bronxData = this.renderDataByLocation("BRONX");
    



    return (
      <div>
        <h2> Brooklyn</h2>
        <ul>
          <li> {brooklynData} </li>
        </ul>

        <h2> Queens </h2>
        <ul>
          <li> {queensData} </li>
        </ul>
        <h2> Bronx </h2>
        <ul>
          <li> {bronxData} </li>
        </ul>
      </div>
    )
  }
}

