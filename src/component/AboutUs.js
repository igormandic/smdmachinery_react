import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import '../css/AboutUs.css'; 

class AboutUs extends React.Component {

  render() {
    // let title = [];
    // let text = [];
    return (
      <div className="">
        <Header1 type="home"/>
            <div className="aboutUs">
                <img src="/logo.png" alt="SMDMachinery" id="logoAboutUs"/>
                <h4 className="aboutUsTitle" ><span id="blueLetter">S</span>avremene Mašine <span id="redLetter">D</span>anašnjice</h4>
                    <p className="aboutUsParagraph">Naša osnovna delatnost je</p>
                    <p className="aboutUsParagraph">prodaja i servisiranje komunalne opreme,specifičnih mašina u oblasti vodoprivrede i opreme za vanredne situacije.</p>
                    <p className="aboutUsParagraph">SMD machinery je vlašćeni zastupnik renomiranih evropskih proizvođača:</p>
                    <p className="aboutUsParagraph"><strong>Wille, Dorotea Mekaniska, Broddson, Boschung, Euromacchine.</strong></p>
                    <p className="aboutUsParagraph">SMD machinery nudi koncept <strong>jedna mašina za sva četiri godišnja doba, </strong> za sve situacije i terene u svim vremenskim uslovima.</p>
                <h4 className="aboutUsTitle">Misija</h4>
                    <p>Naša misija je <strong>zadovoljan kupac.</strong></p>
                    <p>Praćenjem tehnoloških inovacija i stalnim unapređenjem usluga i ponude proizvoda,</p>
                    <p>naša misija je da ispunimo i premašimo očekivanja kupaca, ne samo kvalitetom mašina koje nudimo,</p>
                    <p>već i posvećenim odnosom prema klijentu i nakon kupovine naših proizvoda.</p>
                <h4 className="aboutUsTitle">Vizija</h4>
                    <p>Principi poslovanja SMD machinery se temelje na kvalitetu proizvoda i usluga, timskom radu,</p>
                    <p>uzajamno poštovanje, odgovornosti i spremnosti za nove poslovne izazove.</p>
                    <p>Partnerstvo sa vodećim evropskim proizvođačima je naša prednost i garancija da ćemo biti ponuđači rešenja broj jedan</p>
                    <p>u domenu komunalne opreme, specifičnih mašina u oblasti vodoprivrede i opreme za vanredne situacije</p>
                <h4 className="aboutUsTitle">Cilj</h4>
                    <p>Stalnim unapređenjem kvaliteta poslovanja postižemo pouzdanost i održivost referentnih vrednosti.</p>
                    <p>Naša orijentisanost prema kupcu omogućava pružanje efikasnih individualnih rešenja</p>
                    <p>zahvaljujući širokom asortimanu proizvoda koji se mogu prilagoditi potrebama kupaca i isporučiti u željenom vremenskom okviru.</p>
                    <p>Razmenom iskustava sa proizvođačima i operaterima cilj nam je</p>
                    <p>da konkurentno i uspešno rešsavamo složene probleme komunalne zajednice, vodoprivrede i izazove vanrednih situacija.</p>
                <h4 className="aboutUsTitle">Naš tim</h4>
                    <p>Udružili smo decenije iskustva, kompetentnost, odlučnost i moderne ideje poslovanja</p>
                    <p>Iskusni deo tima je <strong>čvrst temelj i oslonac</strong></p>
                    <p>a mlađi deo tima moderna nadogradnja sa prozorima kroz koje<strong> gledamo u budućnost.</strong></p>
                <h4 className="aboutUsTitle">Slučajnost ili promisao</h4>
                    <p>Slučajnost ne postoji.</p>
                    <p>Znak smo prepoznali i u nizu slova u imenu firme koja je osnovana pre više od trideset godina.</p>
                    <p><strong>SMD</strong> su početna slova naših imena, tima koji veruje u iste ideje i ide jednim putem ka uspehu - <strong>kvalitet pre svega.</strong></p>
                <h4 className="aboutUsTitle">SMD machinery d.o.o</h4>
                <h4 className="aboutUsTitle" id="last"><span id="blueLetter">S</span>uperiornost Moćnih <span id="redLetter">D</span>ostignuća</h4>
            </div>
        <Footer/>  
      </div>
      );
  }

}

export default AboutUs;