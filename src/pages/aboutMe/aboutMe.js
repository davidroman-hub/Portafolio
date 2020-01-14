import React, {Component, Fragment} from 'react'


window.addEventListener('scroll', () => {
    const header = document.getElementById('header-content');
      header.style.opacity = '1'- window.pageYOffset / 650;})

class AboutMe extends Component{
    render(){
        return(
            <Fragment>
                <h1> hola soy home desde AboutMe.js</h1>
            </Fragment>
            )
    }
}

export default AboutMe