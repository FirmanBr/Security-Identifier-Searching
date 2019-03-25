import React from 'react';
import { Card,  CardBody,} from 'reactstrap';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import logo from './logo1.svg';


  export default class User extends React.Component {

    constructor(props) {
      super(props);
      this._handleSubmit = this._handleSubmit.bind(this);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        sidebarOpen: true
      };

    }

    
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
        window.location.reload(); 
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    componentDidMount() {

        if (this.props.params.username =="")
        {
            this.props.params.username = 0;
        }

        else {
            this.props.params.username = this.props.params.username;
        }


        //fetch(`https://api.github.com/users/${this.props.params.username}`)
        fetch(`http://202.61.105.104:5555/api/search/document_number/${this.props.params.username}`)
        .then(response => response.json())
        
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }
    
    render() {

        if (!this.state.user) {
            return (<div className="loading"><p> LOADING</p></div>);
            
        }

        else {
        const user = this.state.user;
        const stats = [
        ];


        const chart1 ="data:image/JPEG;base64," + user.face
      return (
        
        <div className="user-page">
            <header className="main-header">
                <nav className="navbar navbar-static-top">
                <form>
                    <table border="1" cellpadding="100">
                        <tr>
                            <td width="80">
                                <img className="logo3" src={logo}/>   
                            </td>
                            <td>
                            </td>
                            <td width="265" valign="top">
                            <font size ="2">
                                Pemerintah Republik Indonesia  <div> <i>Republic of Indonesia</i></div><div>Direktorat Jendral Perhubungan Laut</div><div><i>Directorate General of Sea Transportation</i></div>
                            </font>
                            </td>
                            <td>
                                National DB
                            </td>
                        </tr>
                        
                    </table>

                </form>
                <form onSubmit={this._handleSubmit}>
                        <input ref="userInput"  type="text"  size="100" maxLength="20" className="search-page__input1" placeholder = " DOCUMENT NUMBER "  required/>
                        <button className="search-page__button1">Search</button>
                </form>
                </nav>
            </header>    

          <span></span> <br></br>


          <Card > 
            <CardBody >

                <div className="huruf">
                    <p>
                        <center><b>Informasi Dokumen Pelaut</b></center>
                    </p>
                </div>

                <table width="1320" border="0" align="right" cellpadding="0" cellspacing="0" valign="top">
                    <tr>
                        <td width="100" ></td>
                        <td width="220" rowSpan ="4" valign="top"><img className="user-info__avatar" src={chart1}/></td>
                        <td width="550"><b>Kode Pelaut</b> <i>(Seafarer Code)</i> <p><div className="huruf">{user.seafarerCode}</div></p><p></p><p></p><p></p></td>
                        <td width="450"><b>Nomor Dokumen</b><i>(Document Number)</i><p><div className="huruf">{user.documentId}</div></p><p></p><p></p><p></p> </td>
                    </tr>
                    <tr>
                        <td width="100"></td>
                        <td width="550"><b>Nama Lengkap</b><i>(Full Name)</i> <p><div className="huruf">{user.printedFirstName} {user.printedLastName}</div></p><p></p><p></p><p></p><p></p></td>
                        <td width="450"><b>Berlaku Sampai</b><i>(Valid Until)</i><p><div className="huruf">{user.expiryDate}</div></p><p></p><p></p><p></p> </td>
                    </tr>
                    <tr>
                        <td width="100"></td>
                        <td width="550"><b>Tempat / Tanggal lahir</b> <i>Place Date of Birth</i> <p><div className="huruf">{user.placeOfBirth} , {user.dateOfBirth}</div></p><p></p><p></p><p></p></td>
                        <td width="550"><b>Status</b><i></i> <p><div className="huruf"> {user.status}</div></p><p></p><p></p><p></p><p></p></td>
                    </tr>
                    <tr>
                        <td width="400"></td>
                        <td width="450"><b>Diterbitkan oleh </b><i>(Issued By)</i><p><div className="huruf">{user.nationality}</div></p><p></p><p></p><p></p> </td>
                        <td width="550"></td>
                    </tr>
                    <tr align="right" valign="top">
                        <td width="250"></td>
                        <td width="250"><p></p><p></p><p></p><p></p></td>
                        <td width="250"></td>
                    </tr>
                    
                </table>
            </CardBody>
          </Card>

            <footer className="footer">
                <nav className="navbar navbar-static-bottom">
                </nav>
            </footer>    
        </div>

      );
    }
  }
}