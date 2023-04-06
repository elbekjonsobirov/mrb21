import { Button } from '@mui/material'
import React, { Component } from 'react'
import './Style/Xizmatlar.scss'
import Xizmatbooks from './XizmatlarComp/Xizmatbooks'
import Xizmatclass from './XizmatlarComp/Xizmatclass'
import Xizmatdocs from './XizmatlarComp/Xizmatdocs'
import Xizmatmeet from './XizmatlarComp/Xizmatmeet'
import Xizmatumumiy from './XizmatlarComp/Xizmatumumiy'

export default class Xizmatlar extends Component {
  state = {
    umumiyActive: true,
    classActive: false,
    meetActive: false,
    docsActive: false,
    booksActive: false,
  }


  umumiyBtn = () => {
    // const { umumiyActive, classActive, meetActive, docsActive, booksActive } = this.state

    this.setState({
      umumiyActive: true,

      classActive: false,
      meetActive: false,
      docsActive: false,
      booksActive: false,
    })
  }
  classBtn = () => {
    // const { umumiyActive, classActive, meetActive, docsActive, booksActive } = this.state

    this.setState({
      classActive: true,

      umumiyActive: false,
      meetActive: false,
      docsActive: false,
      booksActive: false,
    })
  }
  meetBtn = () => {
    // const { umumiyActive, classActive, meetActive, docsActive, booksActive } = this.state

    this.setState({
      meetActive: true,

      classActive: false,
      umumiyActive: false,
      docsActive: false,
      booksActive: false,
    })
  }
  docsBtn = () => {
    // const { umumiyActive, classActive, meetActive, docsActive, booksActive } = this.state

    this.setState({
      docsActive: true,

      classActive: false,
      umumiyActive: false,
      meetActive: false,
      booksActive: false,
    })
  }
  booksBtn = () => {
    // const { umumiyActive, classActive, meetActive, docsActive, booksActive } = this.state

    this.setState({
      booksActive: true,

      classActive: false,
      umumiyActive: false,
      meetActive: false,
      docsActive: false,
    })
  }


  render() {
    const { umumiyActive, classActive, meetActive, docsActive, booksActive } = this.state
    const {navbarActive} = this.props
    return (
      <div className='xizmatlar-page'>
        <div className={navbarActive === true ? "xizmatlar-navbars" : "xizmatlar-navbars xiz-remove"}>
          <ul>
            <li>
              <Button className={umumiyActive === true ? "btnActive" : " "} onClick={this.umumiyBtn}>Umumiy ma'lumot</Button>
            </li>
            <li>
              <Button className={classActive === true ? "btnActive" : " "} onClick={this.classBtn}>Google Classroom</Button>
            </li>
            <li>
              <Button className={meetActive === true ? "btnActive" : " "} onClick={this.meetBtn}>Google Meet</Button>
            </li>
            <li>
              <Button className={docsActive === true ? "btnActive" : " "} onClick={this.docsBtn}>Google Docs</Button>
            </li>
            <li>
              <Button className={booksActive === true ? "btnActive" : " "} onClick={this.booksBtn}>Google Gmail</Button>
            </li>
          </ul>
        </div>
        <div className="xizmatlar-cards">
          <div className={umumiyActive === true ? 'xizmatlar-umumiy' : 'xizmatlar-umumiy xizRemove'}>
            <Xizmatumumiy />
          </div>
          <div className={classActive === true ? "xizmatlar-class" : "xizmatlar-class xizRemove"}>
            <Xizmatclass/>
          </div>
          <div className={meetActive === true ? "xizmatlar-meet" : "xizmatlar-meet xizRemove"}>
            <Xizmatmeet/>
          </div>
          <div className={docsActive === true ? "xizmatlar-docs" : "xizmatlar-docs xizRemove"}>
            <Xizmatdocs/>
          </div>
          <div className={booksActive === true ? "xizmatlar-books" : "xizmatlar-books xizRemove"}>
            <Xizmatbooks/>
          </div>
        </div>
      </div>
    )
  }
}
