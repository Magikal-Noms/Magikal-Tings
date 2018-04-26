import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import AllOrders from "./AllOrders"

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className='nav-div'>
  <div className='heading'> <h1>Magikal Tings</h1> </div>
  <nav>
  <div className='nav-items'>
  {isLoggedIn ? (
    <div>
    {/* The navbar will show these links after you log in */}
    <Link to="/orders"><button>Orders</button></Link>
    <Link to='/products'><button> Tings </button> </Link>
    <Link to="/home"><button>Home</button></Link>
    <button onClick={handleClick}>
    Log Out!
    </button>
    </div>
  ) : (
    <div>
    {/* The navbar will show these links before you log in */}
      <Link to='/products'><button> Tings </button> </Link>
      <Link to="/"><button>Home</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Sign Up!</button></Link>
      </div>
    )}
        <Link to='/cart'><img src="https://d30y9cdsu7xlg0.cloudfront.net/png/16757-200.png" alt=""/></Link>
      </div>
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
