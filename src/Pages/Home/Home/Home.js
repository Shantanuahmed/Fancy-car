import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import DisplayCars from '../DisplayCars/DisplayCars';
import UpComing from '../UpComing/UpComing';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <DisplayCars></DisplayCars>
            <Comments></Comments>
            <UpComing></UpComing>
        </div>
    );
};

export default Home;