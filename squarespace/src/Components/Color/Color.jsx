import React from 'react';
import { useSelector } from 'react-redux';
import LeftHomePage from '../Home/LeftHomePage';
import ColorPaletteChooser from './RightColorPage';
import Layout from '../../Layout/Layout';


const Color = () => {
  const { sections = {} } = useSelector((state) => state.web || {});

  return (
    <Layout>
      <LeftHomePage sections={sections} />
      <div className="w-1/3 p-4">
        <ColorPaletteChooser /> 
      </div>
    </Layout>
  );
};

export default Color;
