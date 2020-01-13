import React, {Component, Fragment} from 'react'
import './home.scss'

class Home extends Component{
    render(){
        return(
            <Fragment>
                <header className="header-content" id="header-content">
                    <div className="header-text">
                        <p className ="icon">
                            <i class="fas fa-gamepad"></i>
                        </p>
                        <h1 className="title">
                            David Roman
                            <br/> Come inside! <br/>       
                        <span className="orange-neon-title regular-text">Web developper</span>
                        </h1>
                        <p className="description">
                            Welcome to my Home page!<br/>
                            All the information about me it is below the page<br/>
                            it will be very funny work with you!.
                        </p>
                        <a href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer" className="btn-link regular-text">Git Hub</a>

                    </div>
                </header>
                
                 <main>

                </main>
               
            </Fragment>
         )
    }
}

export default Home