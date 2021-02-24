import React, { Component, Fragment} from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import './styles/BadgesLoader.css'


export default class BadgesLoader extends Component {
  
  render() {
    
    return (
      <Fragment >
        <div className="contenedorLola">
          
          
          <div className="header">
            <Skeleton className="skeleton" height={130} />
          </div>



            <div className="list">
              <div className="item">
                <Skeleton circle={true} height={80} width={80} />
                <div className="list2">
                  <Skeleton count={3} />
                </div>
              </div>
              
              <div className="item">
                <Skeleton circle={true} height={80} width={80} />
                <div className="list2">
                  <Skeleton count={3} />
                </div>
              </div>

              <div className="item">
                <Skeleton circle={true} height={80} width={80} />
                <div className="list2">
                  <Skeleton count={3} />
                </div>
              </div>

              <div className="item">
                <Skeleton circle={true} height={80} width={80} />
                <div className="list2">
                  <Skeleton count={3} />
                </div>
              </div>
            </div>
            
          

        </div>
      </Fragment>
    );
  }
}

