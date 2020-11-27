import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    const { resumeData } = this.props;
    
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              Projects!
              <br />
              {/* {' '} */}
              {/* You can check them on CV currently. */}
            </h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" style={{'height': '200px'}}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
