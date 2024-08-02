import React from 'react'
import PropTypes from 'prop-types';
import '../../styles/common/_WaveCircleLoading.scss';

const WaveCircleLoading = ({ size = '50px', color = 'var(--color-primary)' }) => {
  return (
    <div className="waveCircleLoading" style={{ width: size, height: size, '--loader-color': color }} />
  )
}

WaveCircleLoading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};

export default WaveCircleLoading;
