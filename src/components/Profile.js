import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProfile } from '../redux/Profile/profileSlice';
import '../styles/Profile.css';

const Profile = () => {
  const { profile, isLoading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { companySymbol } = useParams();
  const history = useNavigate();

  useEffect(() => {
    dispatch(fetchProfile(companySymbol));
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <div>Loading Company details...</div>;
  }

  return (
    <div className="profile-main">
      <button type="button" className="back" onClick={() => history(-1)}>
        {'<'}
        back
      </button>
      <br />
      <div className="company-img">
        <img src={profile[0]?.image} alt="companyImg" />
      </div>
      <div className="company-details">
        <h2 className="company-name">
          {profile[0]?.companyName}
        </h2>
        <h6 className="company-location">
          {profile[0]?.city}
          ,
          {' '}
          {profile[0]?.country}
        </h6>
        <p className="company-symbol">
          Stock Symbol:
          {' '}
          {profile[0]?.symbol}
        </p>
        <h4 className="stock">
          Stock Price:
          {' '}
          $
          {profile[0]?.price}
        </h4>
        <p className="industry">
          Industry :
          {' '}
          {profile[0]?.industry}
        </p>
        <h4 className="details-title">Company Overview</h4>
        <p className="details">{profile[0]?.description}</p>

      </div>

    </div>
  );
};

export default Profile;
