import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import GithubCorner from 'react-github-corner';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Landing = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
    if (isAuthenticated) {
      return <Redirect to='/dashboard' />;
    }
  return (
    <Fragment>
      <section className='landing'>
        <div className='landing-inner'>
          <h1>ToDoBoardManage</h1>
          <p>Trello Like Web App</p>
          <p>Design and Devloped by "
          <a href="https://www.linkedin.com/in/rishav-shekhar-sharma-b56715178/">Rishav Shekhar Sharma</a>".</p>
          <div className='buttons'>
            <Button variant='outlined' color='inherit' href='/login'>
              Login
            </Button>
          </div>
        </div>
        <div className="footer">
        <GithubCorner
          href="https://github.com/rishav001own/mplaymusic.git"
          target="_blank"
          rel="noopener noreferrer"
          bannerColor="#000000"
          octoColor="#ffffff"
        />
        </div>
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps)(Landing);