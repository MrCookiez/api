import React from 'react';
import PropTypes from 'prop-types';
import Admin from './Admin';
import Client from './Client';
import User from './User';

const Profile = ({ type }) => (
  <>
    {type === 'admin' && <Admin />}
    {type === 'client' && <Client />}
    {type === 'user' && <User />}
  </>
);

Profile.propTypes = {
  type: PropTypes.oneOf(['admin', 'client', 'user']).isRequired,
};

export default Profile;
