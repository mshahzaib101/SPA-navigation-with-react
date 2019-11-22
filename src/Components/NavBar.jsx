import React from 'react';
import './NavBar.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/crop@1X.png';
import IconButton from '@material-ui/core/IconButton';
import WorkOutline from '@material-ui/icons/WorkOutline';
import Search from '@material-ui/icons/Search';
import Key from '@material-ui/icons/VpnKey';
import Account from '@material-ui/icons/SupervisorAccount';
import AnchorLink from 'react-anchor-link-smooth-scroll'



const useStyles = makeStyles(theme => ({
    navButton: {
      color: '#722bad',
      fontWeight:'700',
      textTransform: 'none',
      fontSize:'16px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      
    },
    navButton1: {
        color: '#722bad',
        fontWeight:'700',
        fontSize:'15px',
       
      },
    navButton2: {
        color: '#f5f630',
        fontWeight:'700',
        fontSize:'15px',
        textTransform: 'none',
      },
      navButton3: {
        color: '#f5f630',
        fontSize:'16px',
        marginRight:'5px'
      },
  }));


function NavBar() {
   const classes = useStyles();

        return (
            <div className='main-nav'>
                <div className='top-nav-bar'>
                    <div className='top-sub-con'>
                <Button className={classes.navButton2}>
                <Key className={classes.navButton3} />
                Sign in
                </Button>
                <Button className={classes.navButton2}>
                <Account className={classes.navButton3} />
                Register
                </Button>
                </div>
                </div>
            <div className='nav-container'>
                <div>
                <img src={logo} className="App-logo" alt="logo" />
                </div>
                {/* // nav buttons */}
                <div className='btns-container'>
                <AnchorLink href='#home' className='anchor-link'>
                <Button className={classes.navButton}>
                Home
                </Button>
                </AnchorLink>
                <AnchorLink href='#whatWeDo' className='anchor-link'>
                <Button className={classes.navButton}>
                What We Do
                </Button>
                </AnchorLink>
                <AnchorLink href='#howItWorks' className='anchor-link'>
                <Button className={classes.navButton}>
                How It Works
                </Button>
                </AnchorLink>
                <AnchorLink href='#benefits' className='anchor-link'>
                <Button className={classes.navButton}>
                Benefits
                </Button>
                </AnchorLink>
                <AnchorLink href='#aboutus' className='anchor-link'>
                <Button className={classes.navButton}>
                About Us
                </Button>
                </AnchorLink>
                </div>

                {/* //icon buttons */}
                <div className='btnsIcons-container'>
                <IconButton className={classes.navButton1} aria-label="WorkOutline">
                <WorkOutline />
                 </IconButton>
                 <IconButton className={classes.navButton1} aria-label="Search">
                <Search />
                 </IconButton>
                 <IconButton className={classes.navButton1} aria-label="Search">
                EN
                 </IconButton>
                </div>
            </div>
            </div>
        )
}

export default NavBar;




