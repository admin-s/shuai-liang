import React,{Component} from 'react'
import './main.less'
import LeftNav from 'component/left-nav'

class Main extends Component{
    render(){
        return(
            <div className='main'>
                <div className='main-left'>
                    <LeftNav></LeftNav>
                </div>
                <div className='main-right'>
                    <div className='main-r-t'>top</div>
                    <div className='main-r-c'>
                        {this.props.children}
                    </div>
                    <div className='main-r-b'>bottom</div>
                </div>
            </div>
        )
    }
}

export default Main