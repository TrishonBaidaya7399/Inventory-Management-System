import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';

const GlobalTabComponent = ({ tabsData, onTabChange }) => {
  const router = useRouter();

  const handleTabChange = (key) => {
    onTabChange(key);

    router.push(
      {
        pathname: router.pathname,
        query: { key },
      },
      undefined,
      { shallow: true }
    );
  };

  return <Tabs defaultActiveKey={tabsData[0].key} items={tabsData} onChange={handleTabChange} />;
};

GlobalTabComponent.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.node,
    })
  ).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default GlobalTabComponent;
