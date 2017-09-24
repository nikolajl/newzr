import React, { Component } from "react";
import "./App.css";

import Header from 'components/Header';
import Footer from 'components/Footer';
import PhotoArticle from 'components/PhotoArticle';

export default class App extends Component {
  render() {
    const articles = [{
      title: 'Løkke samler koalition mod Trumps nej til klimasamarbejde',
      description: 'For at fastholde amerikanske storbyer i aftaler om at bekæmpe klimaforandringer går Danmark forrest i internationalt initiativ uden om USAs præsident.',
      img: {src: 'http://24.media.tumblr.com/d6b9403c704c3e5aa1725c106e8a9430/tumblr_mvyxd9PUpZ1st5lhmo1_1280.jpg', alt: 'Beach'},
      author: {link: 'http://www.dillonmcintosh.tumblr.com/', name: 'Dillon McIntosh'}
    },{
      title: 'Bolia indgår samarbejde med amerikansk møbelmastodont: »Det vil øge omsætningen med et trecifret millionbeløb«',
      description: 'Den danske møbelvirksomhed Bolia, som er ejet af Lars Larsen, har netop offentliggjort et partnerskab med verdens største producent af kontormøbler, Steelcase. Samarbejdet vil øge den danske møbelforretnings omsætning med et trecifret millionbeløb inden for få år, vurderer direktør i Bolia.',
      img: {src: 'https://c2.staticflickr.com/6/5515/9199788659_818383d0b8_k.jpg', alt: 'Meadow'},
      author: {link: 'https://www.flickr.com/photos/leshaines123/9199788659/in/photolist-f1XjDR-oqUsF4-eGN3fd-uLvGyn-nsUXqP-6tKPeq-h2Bwtz-6oVtec-3vzcD-nhKUBn-eGN7RY-atDkE4-6qpKgh-5qhbkM-eXSJSR-8YGjfD-eXSK7n-c3hvqo-ddvqc2-h1FgsH-4W6bip-dcnDYJ-ejny6W-bEnete-qoSUSt-nyApt1-cs1Paf-oanrNv-dmE5c9-c4Sgiq-nLYPa4-eHQbYp-fn8csk-uq4gKy-fp186j-7ZcaSx-6wMKEA-kERNCe-veHJHy-eGNaj5-4VddEM-rXUqrU-9X8YXf-87nMXX-tKCh7h-u88G4h-nHuLus-9WPUyn-8fjvkU-nKyT33', name: 'Les Haines'}
    },{
      title: 'Trump: Vi vil ødelægge Nordkorea hvis vi bliver truet',
      description: 'Hvis USA bliver truet, har landet ikke andet valg end fuldstændig at ødelægge Nordkorea, siger USA\'s præsident, Donald Trump, i sin tale i FN.',
      img: {src: 'http://24.media.tumblr.com/23e3f4bb271b8bdc415275fb7061f204/tumblr_mve3rvxwaP1st5lhmo1_1280.jpg', alt: 'City'},
      author: {link: 'http://www.nilssonlee.se/', name: 'Jonas Nilsson Lee'}
    },{
      title: 'Spildt øl pletter ikke, men Kåre Schultz vil ikke løbe risikoen',
      description: 'Det kom givetvis som et chok for de fleste, at Royal Unibrew i går aftes meddelte, at Jesper B. Jørgensen, som har afløst og efterfulgt den ekstremt succesrige Henrik Brandt, var fyret.',
      img: {src: 'http://24.media.tumblr.com/ac840897b5f73fa6bc43f73996f02572/tumblr_mrraat0H431st5lhmo1_1280.jpg', alt: 'Flowers'},
      author: {link: 'http://www.flickr.com/photos/rulasibai/', name: 'Rula Sibai'}
    },{
      title: '',
      description: '',
      img: {src: 'http://24.media.tumblr.com/e100564a3e73c9456acddb9f62f96c79/tumblr_mufs8mix841st5lhmo1_1280.jpg', alt: 'Bridge'},
      author: {link: 'http://www.flickr.com/photos/charliefoster/', name: 'Charlie Foster'}
    },{
      title: '',
      description: '',
      img: {src: 'https://c2.staticflickr.com/4/3676/12024271573_d266422362_h.jpg', alt: 'Balloons'},
      author: {link: 'https://www.flickr.com/photos/82955120@N05/12024271573/in/photolist-jjxx28-f2vns5-jjw3rg-phetyV-djcGV4-7TBwup-7DxDnn-d4c1eC-aYoN8H-dBd8UG-ayQR7Z-8yhyLk-4nTgvd-dGtHuM-6WHtpP-9Dz8tA-gtnVfQ-rkCwz9-aYCE1B-hnK3Xs-axv6P4-pFPBdL-9vFwzg-afJk9N-dd3EJJ-oF1Nc2-aYoMCx-xojot-4Ypyo9-6BxaC2-6ybPn5-HSvt5-asaoZL-dd3CtM-9RJXk3-HSuZp-fe9yXi-7irigF-pgqPwH-9QQ2SU-dd3C2T-ccB6t5-fhtH3c-odGZC3-a4ppMF-ohvnyp-uiUswa-uYhWFR-6Cb4M6-5GoD9y', name: 'Nicolas Raymond'}
    }];

    return (
      <div>
        <Header />
        <main className="pure-g">
          <div className="pure-u-1 pure-u-lg-4-5">
          {articles.map((article, i) => (
            <PhotoArticle {...article} key={i}/>
          ))}

          <div className="photo-box photo-box-thin pure-u-1 pure-u-md-2-3">
            {articles.map(({title, description}, i) => 
            <div key={i} className="article-list">
              <h4 style={{margin: 0}}>{title}</h4>
              <p style={{fontSize: '.9em'}} dangerouslySetInnerHTML={{__html: description}}/>
            </div>
            )}
          </div>

          <div className="photo-box pure-u-1 pure-u-md-1-3">
            <a href="http://www.goodfreephotos.com/">
              <img
                src="http://25.media.tumblr.com/88b812f5f9c3d7b83560fd635435d538/tumblr_mx3tlblmY21st5lhmo1_1280.jpg"
                alt="Port"
              />
            </a>

            <aside className="photo-box-caption">
              <span>
                by <a href="http://www.goodfreephotos.com/">Yinan Chen</a>
              </span>
            </aside>
          </div>
          </div>
          <div className="text-box pure-u-1 pure-u-lg-1-5">
            <div className="l-box">
              <h1 className="text-box-head">Trending hourly</h1>
              <ul className="text-box-subhead">
                <li><a href="#ex1">Police Make Second Arrest Related to London Attack</a></li>
                <li><a href="#ex1">Police Arrest 18-Year-Old In Dover</a></li>
                <li><a href="#ex1">U.K. Warned of Heightened Risk</a></li>
                <li><a href="#ex1">U.S. Seeks to Avoid Quitting Paris Deal, Top Officials Say</a></li>
                <li><a href="#ex1">Hamas Agrees to Conditions for Reconciliation With Fatah Party</a></li>
                <li><a href="#ex1">U.S. Says Russia Attacked Site Near American-Led Coalition in Syria</a></li>
              </ul>
            </div>
          </div>

          <div className="pure-u-1 form-box">
            <div className="l-box">
              <h2>Submit a Photo</h2>
              <form className="pure-form">
                <input type="text" placeholder="Photo URL" required />
                <input type="text" placeholder="Email" />
                <button type="submit" className="pure-button">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    );
  }
}
/*
<li><a href="#ex1"></a></li>








Police Make Second Arrest Related to London Attack
British police have arrested a second man in connection with the bomb blast in London’s subway, and on Sunday afternoon, the government lowered the national terror-alert level, which it had raised in the aftermath of Friday’s explosion. 38 minutes ago

Police Arrest 18-Year-Old In Dover
U.K. Warned of Heightened Risk

U.S. Seeks to Avoid Quitting Paris Deal, Top Officials Say
Trump administration officials said the U.S. wouldn’t pull out of the Paris Agreement, offering to re-engage in the international deal to fight climate change, according to the European Union’s top energy official. 1805

Hamas Agrees to Conditions for Reconciliation With Fatah Party
Hamas agreed Sunday to conditions demanded by Palestinian Authority President Mahmoud Abbas for reconciliation with his Fatah party, a move aimed at mending a decadelong rift between the two factions.

U.S. Says Russia Attacked Site Near American-Led Coalition in Syria
The Russian military attacked a location where they knew the U.S.-led coalition and allied Syrian rebels were operating, the U.S. military said. The strike injured several Syrian Democratic Forces troops.
*/